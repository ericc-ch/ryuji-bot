import { joinVoiceChannel } from "@discordjs/voice"
import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
} from "discord.js"

import type { Command } from "../types/commands"

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins your voice channel"),

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
      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false,
      })

      await interaction.reply(`Joined ${voiceChannel.name}!`)
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
