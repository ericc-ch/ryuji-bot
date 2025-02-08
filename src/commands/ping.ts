import { CommandInteraction, SlashCommandBuilder } from "discord.js"

import type { Command } from "../types/commands"

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),

  execute: async (interaction: CommandInteraction) => {
    await interaction.reply("Pong!")
  },
}

export default command
