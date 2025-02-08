import type { CommandInteraction, SlashCommandBuilder } from "discord.js"

export interface Command {
  data: SlashCommandBuilder
  execute: (command: CommandInteraction) => Promise<void> | void
}
