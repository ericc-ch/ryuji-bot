import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
  MessageFlags,
} from "discord.js"

import type { Command } from "../types/commands"

import { ChatManager } from "../lib/chat-manager"
import { ENV } from "../lib/env"
import { GoogleFileManager } from "../lib/google-file-manager"
import { TempManager } from "../lib/temp-manager"
import { setupVoiceConnection, handleSpeech } from "../lib/voice-helpers"

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
      const { connection, player } = setupVoiceConnection(voiceChannel)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      chatManager.createSession(interaction.guildId!)

      const receiver = connection.receiver
      const tempManager = new TempManager("voice-")
      const googleFileManager = GoogleFileManager.getInstance(
        ENV.GEMINI_API_KEY,
      )

      receiver.speaking.on("start", (userId) => {
        const user = interaction.client.users.cache.get(userId)
        void handleSpeech(
          receiver,
          userId,
          user?.tag,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          interaction.guildId!,
          player,
          chatManager,
          tempManager,
          googleFileManager,
        )
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
