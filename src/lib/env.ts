import { getEnv } from "@echristian/env"

const DISCORD_TOKEN = getEnv("DISCORD_TOKEN")

export const ENV = {
  DISCORD_TOKEN,
}
