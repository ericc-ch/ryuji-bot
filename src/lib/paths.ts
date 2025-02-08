import path from "pathe"

const SRC_DIR = path.join(import.meta.dir, "..")

const COMMANDS_DIR = path.join(SRC_DIR, "commands")

export const PATHS = {
  SRC_DIR,
  COMMANDS_DIR,
}
