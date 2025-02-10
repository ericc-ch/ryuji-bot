import type { VoiceBasedChannel } from "discord.js"

import {
  VoiceReceiver,
  joinVoiceChannel,
  createAudioResource,
  StreamType,
  createAudioPlayer,
  AudioPlayerStatus,
  AudioPlayer,
} from "@discordjs/voice"
import { synthesize } from "@echristian/edge-tts"
import { consola } from "consola"

import { processUserAudio, convertMp3ToOgg } from "./audio-processor"
import { ChatManager } from "./chat-manager"
import { GoogleFileManager } from "./google-file-manager"
import { TempManager } from "./temp-manager"

// Track processing state per guild
const processingState = new Map<string, boolean>()

export function setupVoiceConnection(voiceChannel: VoiceBasedChannel) {
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    selfDeaf: false,
  })

  const player = createAudioPlayer()

  player.on(AudioPlayerStatus.Playing, () => {
    consola.info("Started playing audio response")
  })

  player.on(AudioPlayerStatus.Idle, () => {
    consola.info("Finished playing audio response")
  })

  player.on("error", (error) => {
    consola.error("Error:", error.message)
  })

  connection.subscribe(player)
  return { connection, player }
}

export async function createCharacterAudioResource(
  text: string,
  language: string,
  voice: string,
) {
  const { audio } = await synthesize({
    text,
    language,
    voice,
  })

  return audio
}

export async function playCharacterResponses(
  player: AudioPlayer,
  ryujiText: string,
  annText: string,
) {
  const tempManager = new TempManager("voice-response-")

  // Play Ryuji first (Japanese)
  const ryujiStream = await createCharacterAudioResource(
    ryujiText,
    "ja-JP",
    "ja-JP-KeitaNeural",
  )

  // Create temp files for the MP3 streams
  const ryujiMp3File = await tempManager.createTempFile({
    content: Buffer.from(await ryujiStream.arrayBuffer()),
    filename: "ryuji.mp3",
    encoding: "binary",
  })

  // Convert Ryuji's MP3 to OGG
  const ryujiOggPath = await convertMp3ToOgg({
    inputPath: ryujiMp3File,
    tempManager,
  })

  // Create and play Ryuji's audio resource
  const ryujiResource = createAudioResource(ryujiOggPath, {
    inputType: StreamType.OggOpus,
  })

  // Set up promise to wait for Ryuji's audio to finish
  const waitForRyuji = new Promise<void>((resolve) => {
    player.once(AudioPlayerStatus.Idle, () => {
      resolve()
    })
  })

  player.play(ryujiResource)
  await waitForRyuji

  // Then play Ann (English)
  const annStream = await createCharacterAudioResource(
    annText,
    "en-US",
    "en-US-JennyNeural",
  )

  // Create temp file for Ann's MP3
  const annMp3File = await tempManager.createTempFile({
    content: Buffer.from(await annStream.arrayBuffer()),
    filename: "ann.mp3",
    encoding: "binary",
  })

  // Convert Ann's MP3 to OGG
  const annOggPath = await convertMp3ToOgg({
    inputPath: annMp3File,
    tempManager,
  })

  // Create and play Ann's audio resource
  const annResource = createAudioResource(annOggPath, {
    inputType: StreamType.OggOpus,
  })

  // Add promise to wait for Ann's audio to finish
  const waitForAnn = new Promise<void>((resolve) => {
    player.once(AudioPlayerStatus.Idle, () => {
      resolve()
    })
  })

  player.play(annResource)
  await waitForAnn
}

export async function handleSpeech(
  receiver: VoiceReceiver,
  userId: string,
  userTag: string | undefined,
  guildId: string,
  player: AudioPlayer,
  chatManager: ChatManager,
  tempManager: TempManager,
  googleFileManager: GoogleFileManager,
) {
  // Check if we're already processing for this guild
  if (processingState.get(guildId)) {
    consola.info(
      `${userTag ?? userId} tried to speak while processing another input`,
    )
    return
  }

  processingState.set(guildId, true)
  consola.info(`${userTag ?? userId} started speaking`)

  try {
    const outputPath = await processUserAudio(receiver, {
      userId,
      userTag,
      tempManager,
      sampleRate: 48000,
      channels: 2,
      pcmFormat: "s16le",
    })

    consola.info(`Audio saved to temporary file: ${outputPath}`)

    const uploadedFile = await googleFileManager.upload(outputPath, {
      mimeType: "audio/ogg",
    })
    consola.info(`Audio uploaded to Google AI: ${uploadedFile.name}`)

    const processedFile =
      await googleFileManager.waitForFileProcessing(uploadedFile)
    consola.info(`Audio processing complete: ${processedFile.name}`)

    let chat = chatManager.getSession(guildId)
    if (!chat) {
      consola.info(
        `No chat session found for guild ${guildId}, creating new session`,
      )
      chatManager.createSession(guildId)
      chat = chatManager.getSession(guildId)
      if (!chat) {
        consola.error("Failed to create chat session")
        return
      }
      consola.success(`Created new chat session for guild ${guildId}`)
    }

    const response = await chat.sendMessage([
      "User:",
      {
        fileData: {
          fileUri: processedFile.uri,
          mimeType: "audio/ogg",
        },
      },
    ])

    const responseText = response.response.text()
    consola.info("AI Response:", responseText)

    const ryujiMatch = /Ryuji: (.*)\n/.exec(responseText)?.[1]
    const annMatch = /Ann: (.*)/.exec(responseText)?.[1]

    if (!ryujiMatch || !annMatch) {
      consola.error("Failed to parse character responses")
      return
    }

    const ryujiText = ryujiMatch.trim()
    const annText = annMatch.trim()

    consola.info("Ryuji Text:", ryujiText)
    consola.info("Ann Text:", annText)

    await playCharacterResponses(player, ryujiText, annText)
  } catch (error) {
    consola.error("Failed to process speech:", error)
  } finally {
    // Make sure we always clear the processing state
    processingState.set(guildId, false)
  }
}
