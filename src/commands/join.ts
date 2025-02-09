import {
  joinVoiceChannel,
  createAudioResource,
  StreamType,
  createAudioPlayer,
  AudioPlayerStatus,
} from "@discordjs/voice"
import { synthesizeStream } from "@echristian/edge-tts"
import { consola } from "consola"
import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
  MessageFlags,
} from "discord.js"
import { Readable } from "node:stream"

import type { Command } from "../types/commands"

import { processUserAudio } from "../lib/audio-processor"
import { ChatManager } from "../lib/chat-manager"
import { ENV } from "../lib/env"
import { GoogleFileManager } from "../lib/google-file-manager"
import { TempManager } from "../lib/temp-manager"

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins your voice channel and starts recording"),

  execute: async (interaction: CommandInteraction) => {
    if (!interaction.guild) {
      await interaction.reply({
        content: "This command can only be used in a server!",
        ephemeral: true,
      })
      return
    }

    const member = interaction.member as GuildMember
    const voiceChannel = member.voice.channel

    if (!voiceChannel) {
      await interaction.reply({
        content: "You need to be in a voice channel first!",
        ephemeral: true,
      })
      return
    }

    // Get ChatManager instance and check if session already exists
    const chatManager = ChatManager.getInstance()
    // We already checked for guild above
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (chatManager.hasSession(interaction.guildId!)) {
      await interaction.reply({
        content: "I'm already in a voice channel in this server!",
        ephemeral: true,
      })
      return
    }

    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      })

      // Create the audio player
      const player = createAudioPlayer()

      // Handle player state changes
      player.on(AudioPlayerStatus.Playing, () => {
        consola.info("Started playing audio response")
      })

      player.on(AudioPlayerStatus.Idle, () => {
        consola.info("Finished playing audio response")
      })

      player.on("error", (error) => {
        consola.error("Error:", error.message)
      })

      // Subscribe the connection to the player
      connection.subscribe(player)

      // Create a new chat session for this guild. We already checked for guild above.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      chatManager.createSession(interaction.guildId!)

      const receiver = connection.receiver

      const tempManager = new TempManager("voice-")
      const googleFileManager = GoogleFileManager.getInstance(
        ENV.GEMINI_API_KEY,
      )

      const SAMPLE_RATE = 48000
      const CHANNELS = 2
      const PCM_FORMAT = "s16le"

      receiver.speaking.on("start", async (userId) => {
        const user = interaction.client.users.cache.get(userId)
        consola.info(`${user?.tag ?? userId} started speaking`)

        try {
          const outputPath = await processUserAudio(receiver, {
            userId,
            userTag: user?.tag,
            tempManager,
            sampleRate: SAMPLE_RATE,
            channels: CHANNELS,
            pcmFormat: PCM_FORMAT,
          })

          consola.info(`Audio saved to temporary file: ${outputPath}`)

          try {
            const uploadedFile = await googleFileManager.upload(outputPath, {
              mimeType: "audio/ogg",
            })
            consola.info(`Audio uploaded to Google AI: ${uploadedFile.name}`)

            // Wait for processing to complete
            const processedFile =
              await googleFileManager.waitForFileProcessing(uploadedFile)
            consola.info(`Audio processing complete: ${processedFile.name}`)

            // Get the chat session for this guild
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const chat = chatManager.getSession(interaction.guildId!)

            if (!chat) {
              consola.error("No chat session found for guild")
              return
            }

            try {
              const response = await chat.sendMessage([
                {
                  fileData: {
                    fileUri: processedFile.uri,
                    mimeType: "audio/ogg",
                  },
                },
              ])

              const responseText = response.response.text()
              consola.info("AI Response:", responseText)

              // Split the response into Ryuji and Ann parts
              const ryujiMatch = /Ryuji: (.*)\n/.exec(responseText)?.[1]
              const annMatch = /Ann: (.*)/.exec(responseText)?.[1]

              if (!ryujiMatch || !annMatch) {
                consola.error("Failed to parse character responses")
                return
              }

              // Strip out the character names and clean up the text for TTS
              const ryujiText = ryujiMatch.trim()
              const annText = annMatch.trim()

              consola.info("Ryuji Text:", ryujiText)
              consola.info("Ann Text:", annText)

              // Create sequential TTS streams
              async function createCharacterAudioResource(
                text: string,
                language: string,
                voice: string,
              ) {
                const audioChunks = synthesizeStream({
                  text,
                  language,
                  voice,
                })

                return new Promise<Readable>((resolve) => {
                  const audioStream = new Readable({
                    read() {
                      audioChunks.next().then(
                        (result) => {
                          if (result.done) {
                            this.push(null)
                          } else {
                            this.push(result.value)
                          }
                        },
                        (error: unknown) => {
                          consola.error("Error reading audio chunk:", error)
                          this.destroy(error as Error)
                        },
                      )
                    },
                  })
                  resolve(audioStream)
                })
              }

              // Play characters sequentially
              try {
                // Play Ryuji first (Japanese)
                const ryujiStream = await createCharacterAudioResource(
                  ryujiText,
                  "ja-JP",
                  "ja-JP-KeitaNeural",
                )
                const ryujiResource = createAudioResource(ryujiStream, {
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
                const annResource = createAudioResource(annStream, {
                  inputType: StreamType.OggOpus,
                })

                player.play(annResource)
              } catch (error) {
                consola.error("Failed to play character audio:", error)
              }
            } catch (error) {
              consola.error("Failed to send audio to chat session:", error)
            }
          } catch (error) {
            consola.error("Failed to upload audio to Google AI:", error)
          }
        } catch (error) {
          consola.error("Failed to process audio:", error)
        }
      })

      await interaction.reply({
        content: `Joined ${voiceChannel.name} and started listening!`,
        ephemeral: true,
      })
    } catch (error) {
      console.error(error)
      // If something fails, make sure to clean up the chat session
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      chatManager.removeSession(interaction.guildId!)
      await interaction.reply({
        content: "Failed to join voice channel!",
        flags: [MessageFlags.Ephemeral],
      })
    }
  },
}

export default command
