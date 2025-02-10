import { consola } from "consola"
import {
  CommandInteraction,
  SlashCommandBuilder,
  GuildMember,
  MessageFlags,
} from "discord.js"

import type { Command } from "../types/commands"

const log = consola.withTag("join-command")

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
    log.info(
      `Join command initiated by ${interaction.user.tag} (${interaction.user.id})`,
    )

    if (!interaction.guild) {
      log.warn("Command used outside of a guild context")
      await interaction.reply({
        content: "This command can only be used in a server!",
        flags: [MessageFlags.Ephemeral],
      })
      return
    }

    log.debug(
      `Guild context: ${interaction.guild.name} (${interaction.guild.id})`,
    )

    const member = interaction.member as GuildMember
    const voiceChannel = member.voice.channel

    if (!voiceChannel) {
      log.warn(
        `${member.user.tag} attempted to use command without being in a voice channel`,
      )
      await interaction.reply({
        content: "You need to be in a voice channel first!",
        flags: [MessageFlags.Ephemeral],
      })
      return
    }

    log.info(
      `User is in voice channel: ${voiceChannel.name} (${voiceChannel.id})`,
    )

    // Get ChatManager instance and check if session already exists
    const chatManager = ChatManager.getInstance()
    log.debug("Retrieved ChatManager instance")
    // We already checked for guild above
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (chatManager.hasSession(interaction.guildId!)) {
      log.warn(
        `Attempted to create duplicate session in guild ${interaction.guildId}`,
      )
      await interaction.reply({
        content: "I'm already in a voice channel in this server!",
        flags: [MessageFlags.Ephemeral],
      })
      return
    }

    try {
      log.info("Setting up voice connection...")
      const { connection, player } = setupVoiceConnection(voiceChannel)
      log.success("Voice connection established")
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      chatManager.createSession(interaction.guildId!)
      log.info(`Created chat session for guild ${interaction.guildId}`)

      const receiver = connection.receiver
      log.debug("Created voice receiver")

      const tempManager = new TempManager("voice-")
      log.debug("Initialized TempManager")

      const googleFileManager = GoogleFileManager.getInstance(
        ENV.GEMINI_API_KEY,
      )
      log.debug("Retrieved GoogleFileManager instance")

      receiver.speaking.on("start", (userId) => {
        const user = interaction.client.users.cache.get(userId)
        log.info(
          `Speaking event detected for user: ${
            user?.tag ?? userId
          } in guild ${interaction.guildId}`,
        )
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

      log.info(`Successfully joined ${voiceChannel.name} and started listening`)
      await interaction.reply({
        content: `Joined ${voiceChannel.name} and started listening!`,
        flags: [MessageFlags.Ephemeral],
      })
    } catch (error) {
      log.error("Failed to set up voice connection:", error)
      // If something fails, make sure to clean up the chat session
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      chatManager.removeSession(interaction.guildId!)
      log.debug(`Cleaned up chat session for guild ${interaction.guildId}`)

      await interaction.reply({
        content: "Failed to join voice channel!",
        flags: [MessageFlags.Ephemeral],
      })
    }
  },
}

export default command
