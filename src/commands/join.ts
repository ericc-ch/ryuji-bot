import { joinVoiceChannel, EndBehaviorType } from "@discordjs/voice"
import { consola } from "consola"
import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
} from "discord.js"
import { createWriteStream, mkdirSync } from "node:fs"
import { join } from "node:path"

import type { Command } from "../types/commands"

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins your voice channel and starts recording"),

  execute: async (interaction: CommandInteraction) => {
    // Check if the command was used in a guild
    if (!interaction.guild) {
      await interaction.reply({
        content: "This command can only be used in a server!",
        ephemeral: true,
      })
      return
    }

    // Get member who used the command
    const member = interaction.member as GuildMember

    // Check if user is in a voice channel
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

      // Start listening to speaking users
      receiver.speaking.on("start", (userId) => {
        const user = interaction.client.users.cache.get(userId)
        consola.info(`${user?.tag ?? userId} started speaking`)

        // Create filename with timestamp and username
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
        const filename = `${user?.username ?? userId}-${timestamp}.opus`
        const outputPath = join(process.cwd(), "recordings", filename)

        // Create audio stream for this user
        const audioStream = receiver.subscribe(userId, {
          end: {
            behavior: EndBehaviorType.AfterSilence,
            duration: 500,
          },
        })

        // Pipe to file
        const outputStream = createWriteStream(outputPath)
        audioStream.pipe(outputStream)

        audioStream.on("end", () => {
          consola.info(`Finished recording ${user?.tag ?? userId}`)
          outputStream.end()
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
