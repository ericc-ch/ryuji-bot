import { OpusEncoder } from "@discordjs/opus"
import { joinVoiceChannel, EndBehaviorType } from "@discordjs/voice"
import { consola } from "consola"
import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
} from "discord.js"
import { spawn } from "node:child_process"
import { mkdirSync } from "node:fs"
import { join } from "node:path"

import type { Command } from "../types/commands"

const SAMPLE_RATE = 48000
const CHANNELS = 2
const PCM_FORMAT = "s16le"

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

    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      })

      const receiver = connection.receiver

      mkdirSync(join(process.cwd(), "recordings"), { recursive: true })

      receiver.speaking.on("start", (userId) => {
        const user = interaction.client.users.cache.get(userId)
        consola.info(`${user?.tag ?? userId} started speaking`)

        // Create discord voice receiver stream
        const opusStream = receiver.subscribe(userId, {
          end: {
            behavior: EndBehaviorType.AfterInactivity,
            duration: 2000,
          },
        })

        // Buffer to store all chunks
        const chunks: Array<Buffer> = []
        const decoder = new OpusEncoder(SAMPLE_RATE, CHANNELS)

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

          // Create output file path
          const outputFile = join(
            process.cwd(),
            "recordings",
            `${user?.tag ?? userId}.ogg`,
          )

          // Spawn ffmpeg process
          const ffmpeg = spawn("ffmpeg", [
            "-f",
            PCM_FORMAT, // Input format: raw PCM
            "-ar",
            String(SAMPLE_RATE), // Sample rate: 48kHz
            "-ac",
            String(CHANNELS), // Audio channels: 2
            "-i",
            "-", // Input from stdin
            "-c:a",
            "libopus", // Encode to opus
            outputFile, // Output file
          ])

          // Write the buffer to ffmpeg's stdin and close it
          ffmpeg.stdin.write(finalBuffer)
          ffmpeg.stdin.end()

          ffmpeg.stderr.on("data", (data) => {
            consola.debug(`ffmpeg: ${data}`)
          })

          ffmpeg.on("close", (code) => {
            if (code === 0) {
              consola.info(`Finished recording ${user?.tag ?? userId}`)
            } else {
              consola.error(`ffmpeg process exited with code ${code}`)
            }
          })

          ffmpeg.on("error", (error) => {
            consola.error(`Error recording ${user?.tag ?? userId}:`, error)
          })
        })

        opusStream.on("error", (error) => {
          consola.error(
            `Error receiving audio from ${user?.tag ?? userId}:`,
            error,
          )
        })
      })

      await interaction.reply({
        content: `Joined ${voiceChannel.name} and started listening!`,
        ephemeral: true,
      })
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "Failed to join voice channel!",
        ephemeral: true,
      })
    }
  },
}

export default command
