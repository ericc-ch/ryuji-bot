import { consola } from "consola"
import { Client, Events, GatewayIntentBits } from "discord.js"

import { ENV } from "./lib/env"

// Initialize client with basic intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
})

// Handle ready event
client.once(Events.ClientReady, (readyClient) => {
  consola.success(`Logged in as ${readyClient.user.tag}`)
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
