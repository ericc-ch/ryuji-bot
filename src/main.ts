import { consola } from "consola"
import { Client, Events, GatewayIntentBits } from "discord.js"

import { getAllCommands } from "./lib/commands"
import { ENV } from "./lib/env"

consola.level = 4

// Initialize client with basic intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
})

// Handle ready event
client.once(Events.ClientReady, (readyClient) => {
  consola.success(`Logged in as ${readyClient.user.tag}`)
})

// Handle commands
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const commands = await getAllCommands()

  const command = commands.find(
    (command) => command.data.name === interaction.commandName,
  )

  if (!command) {
    consola.error(`Unknown command ${interaction.commandName}`)
    return
  }

  try {
    await command.execute(interaction)
  } catch (error) {
    consola.error(error)
    await interaction.reply({
      content: "There was an error executing this command!",
      ephemeral: true,
    })
  }
})

// Handle errors gracefully
client.on(Events.Error, (error) => {
  consola.error("Discord client error:", error)
})

// Connect to Discord
try {
  await client.login(ENV.DISCORD_TOKEN)
} catch (error) {
  consola.error("Failed to connect to Discord:", error)
  process.exit(1)
}
