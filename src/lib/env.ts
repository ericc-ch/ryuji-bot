import { getEnv } from "@echristian/env"

const DISCORD_TOKEN = getEnv("DISCORD_TOKEN")
const DISCORD_CLIENT_ID = getEnv("CLIENT_ID")

export const ENV = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
}
