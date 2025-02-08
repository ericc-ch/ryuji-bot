import fs from "node:fs/promises"
import path from "pathe"

import type { Command } from "../types/commands"

import { PATHS } from "./paths"

interface Module {
  default: Command
}

export async function getAllCommands() {
  const commandFiles = await fs.readdir(PATHS.COMMANDS_DIR)

  const imports = commandFiles.map((fileName) => {
    const filePath = path.join(PATHS.COMMANDS_DIR, fileName)
    return import(filePath)
  })

  const modules = await Promise.all<Module>(imports)
  const commands = modules.map((module) => module.default)

  return commands
}
