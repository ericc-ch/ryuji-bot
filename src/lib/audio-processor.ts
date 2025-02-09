import type { VoiceReceiver } from "@discordjs/voice"

import { OpusEncoder } from "@discordjs/opus"
import { EndBehaviorType } from "@discordjs/voice"
import { consola } from "consola"
import { spawn } from "node:child_process"
import { join } from "node:path"

import { TempManager } from "./temp-manager"

interface ProcessAudioOptions {
  userId: string
  userTag?: string
  tempManager: TempManager
  sampleRate: number
  channels: number
  pcmFormat: string
}

export async function processUserAudio(
  receiver: VoiceReceiver,
  options: ProcessAudioOptions,
): Promise<string> {
  const { userId, userTag, tempManager, sampleRate, channels, pcmFormat } =
    options

  const userIdentifier = userTag ?? userId
  consola.info(`Starting audio processing for user: ${userIdentifier}`)
  consola.debug(
    `Audio settings: ${sampleRate}Hz, ${channels} channels, ${pcmFormat} format`,
  )

  // Create a temp directory for the output file
  const tempDir = await tempManager.createTempDir()
  const outputPath = join(tempDir, `${globalThis.crypto.randomUUID()}.ogg`)
  consola.debug(`Created temporary directory: ${tempDir}`)
  consola.debug(`Output file will be: ${outputPath}`)

  // Create discord voice receiver stream
  const opusStream = receiver.subscribe(userId, {
    end: {
      behavior: EndBehaviorType.AfterInactivity,
      duration: 2000,
    },
  })
  consola.debug(`Created opus stream for user ${userIdentifier}`)

  return new Promise((resolve, reject) => {
    // Buffer to store all chunks
    const chunks: Array<Buffer> = []
    const decoder = new OpusEncoder(sampleRate, channels)
    consola.debug(`Initialized opus decoder`)

    let chunkCount = 0
    opusStream.on("data", (chunk: Buffer) => {
      try {
        // Decode opus packet to PCM
        const pcmChunk = decoder.decode(chunk)
        chunks.push(pcmChunk)
        chunkCount++

        if (chunkCount % 100 === 0) {
          consola.debug(
            `Processed ${chunkCount} audio chunks for ${userIdentifier}`,
          )
        }
      } catch (error) {
        consola.error(
          `Failed to decode opus packet for ${userIdentifier}:`,
          error,
        )
      }
    })

    opusStream.on("end", () => {
      // Combine all chunks into a single buffer
      const finalBuffer = Buffer.concat(chunks)
      consola.info(
        `Audio stream ended for ${userIdentifier}. Total chunks: ${chunkCount}, Buffer size: ${finalBuffer.length} bytes`,
      )

      // Spawn ffmpeg process
      consola.debug(`Starting ffmpeg conversion for ${userIdentifier}`)
      const ffmpeg = spawn("ffmpeg", [
        "-f",
        pcmFormat, // Input format: raw PCM
        "-ar",
        sampleRate.toString(), // Sample rate
        "-ac",
        channels.toString(), // Audio channels
        "-i",
        "-", // Input from stdin
        "-c:a",
        "libopus", // Encode to opus
        outputPath, // Output file
      ])

      // Write the buffer to ffmpeg's stdin and close it
      ffmpeg.stdin.write(finalBuffer)
      ffmpeg.stdin.end()
      consola.debug(`Wrote audio buffer to ffmpeg for ${userIdentifier}`)

      ffmpeg.stderr.on("data", (data) => {
        consola.debug(`ffmpeg [${userIdentifier}]: ${data}`)
      })

      ffmpeg.on("close", (code) => {
        if (code === 0) {
          consola.success(
            `Successfully converted audio for ${userIdentifier} to ${outputPath}`,
          )
          resolve(outputPath)
        } else {
          const error = new Error(
            `ffmpeg process exited with code ${code} for ${userIdentifier}`,
          )
          consola.error(error.message)
          reject(error)
        }
      })

      ffmpeg.on("error", (error) => {
        consola.error(`ffmpeg error for ${userIdentifier}:`, error)
        reject(error)
      })
    })

    opusStream.on("error", (error) => {
      consola.error(`Opus stream error for ${userIdentifier}:`, error)
      reject(error)
    })
  })
}
