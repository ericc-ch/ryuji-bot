import type { VoiceReceiver } from "@discordjs/voice"

import { OpusEncoder } from "@discordjs/opus"
import { EndBehaviorType } from "@discordjs/voice"
import { consola } from "consola"
import { spawn } from "node:child_process"

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

  // Create a temp directory for the output file
  const outputFile = `${globalThis.crypto.randomUUID()}.ogg`
  const outputPath = await tempManager.createTempFile({
    content: "", // Initial empty file
    filename: outputFile,
    encoding: "binary",
  })

  // Create discord voice receiver stream
  const opusStream = receiver.subscribe(userId, {
    end: {
      behavior: EndBehaviorType.AfterInactivity,
      duration: 2000,
    },
  })

  return new Promise((resolve, reject) => {
    // Buffer to store all chunks
    const chunks: Array<Buffer> = []
    const decoder = new OpusEncoder(sampleRate, channels)

    opusStream.on("data", (chunk: Buffer) => {
      try {
        // Decode opus packet to PCM
        const pcmChunk = decoder.decode(chunk)
        chunks.push(pcmChunk)
      } catch (error) {
        consola.error("Failed to decode opus packet:", error)
      }
    })

    opusStream.on("end", () => {
      // Combine all chunks into a single buffer
      const finalBuffer = Buffer.concat(chunks)

      // Spawn ffmpeg process
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

      ffmpeg.stderr.on("data", (data) => {
        consola.debug(`ffmpeg: ${data}`)
      })

      ffmpeg.on("close", (code) => {
        if (code === 0) {
          consola.info(`Finished recording ${userTag ?? userId}`)
          resolve(outputPath)
        } else {
          const error = new Error(`ffmpeg process exited with code ${code}`)
          consola.error(error.message)
          reject(error)
        }
      })

      ffmpeg.on("error", (error) => {
        consola.error(`Error recording ${userTag ?? userId}:`, error)
        reject(error)
      })
    })

    opusStream.on("error", (error) => {
      consola.error(`Error receiving audio from ${userTag ?? userId}:`, error)
      reject(error)
    })
  })
}
