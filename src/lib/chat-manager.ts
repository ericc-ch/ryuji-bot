import {
  GoogleGenerativeAI,
  ChatSession,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

import { JAPANESE_SYSTEM_PROMPT } from "../prompts/japanese"
import { ENV } from "./env"

interface ChatManagerOptions {
  model?: string
}

export class ChatManager {
  private static instance: ChatManager | null = null
  private chatSessions = new Map<string, ChatSession>()
  private readonly genAI: GoogleGenerativeAI
  private readonly model: string

  private constructor(options: ChatManagerOptions = {}) {
    this.genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY)
    this.model = options.model ?? "gemini-2.0-flash"
  }

  static getInstance(options: ChatManagerOptions = {}): ChatManager {
    if (!ChatManager.instance) {
      ChatManager.instance = new ChatManager(options)
    }
    return ChatManager.instance
  }

  createSession(guildId: string): ChatSession {
    const model = this.genAI.getGenerativeModel({
      model: this.model,
      systemInstruction: JAPANESE_SYSTEM_PROMPT,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    })
    const chat = model.startChat()

    this.chatSessions.set(guildId, chat)
    return chat
  }

  getSession(guildId: string): ChatSession | undefined {
    return this.chatSessions.get(guildId)
  }

  removeSession(guildId: string): boolean {
    return this.chatSessions.delete(guildId)
  }

  hasSession(guildId: string): boolean {
    return this.chatSessions.has(guildId)
  }
}
