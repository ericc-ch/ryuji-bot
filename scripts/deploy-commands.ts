import { consola } from "consola"
import { REST, Routes } from "discord.js"

import { getAllCommands } from "../src/lib/commands"
import { ENV } from "../src/lib/env"

const commands = await getAllCommands()

const rest = new REST().setToken(ENV.DISCORD_TOKEN)

try {
  consola.start("Started refreshing application (/) commands.")

  await rest.put(Routes.applicationCommands(ENV.DISCORD_CLIENT_ID), {
    body: commands.map((command) => command.data.toJSON()),
  })

  consola.success("Successfully reloaded application (/) commands.")
} catch (error) {
  consola.error(error)
}
