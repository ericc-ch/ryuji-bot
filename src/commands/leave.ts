import { getVoiceConnection } from "@discordjs/voice"
import {
  CommandInteraction,
  GuildMember,
  SlashCommandBuilder,
} from "discord.js"

import type { Command } from "../types/commands"

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("Leave the voice channel"),

  execute: async (interaction: CommandInteraction) => {
    // Check if the command was used in a guild
    if (!interaction.guildId) {
      await interaction.reply({
        content: "This command can only be used in a server!",
        ephemeral: true,
      })
      return
    }

    // Get the voice connection for this guild
    const connection = getVoiceConnection(interaction.guildId)

    // If not in a voice channel
    if (!connection) {
      await interaction.reply({
        content: "I'm not in any voice channel!",
        ephemeral: true,
      })
      return
    }

    // Check if user is in the same voice channel
    const member = interaction.member as GuildMember
    if (!member.voice.channelId) {
      await interaction.reply({
        content: "You need to be in a voice channel to use this command!",
        ephemeral: true,
      })
      return
    }

    // Destroy the voice connection
    connection.destroy()
    await interaction.reply("👋 Left the voice channel!")
  },
}

export default command
