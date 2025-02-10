import { mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "pathe"

interface TempFileOptions {
  content: string | Buffer
  filename: string
  encoding?: BufferEncoding
}

export class TempManager {
  private tempDirs = new Set<string>()
  private tempFiles = new Set<string>()
  private readonly prefix: string

  constructor(prefix = "tmp-") {
    this.prefix = prefix
    // // Ensure cleanup on process exit
    // process.on("exit", () => this.cleanupAll())
    // process.on("SIGINT", () => this.cleanupAll())
    // process.on("SIGTERM", () => this.cleanupAll())
  }

  async createTempDir(): Promise<string> {
    const dir = await mkdtemp(join(tmpdir(), this.prefix))
    this.tempDirs.add(dir)
    return dir
  }

  async createTempFile({
    content,
    filename,
    encoding = "utf-8",
  }: TempFileOptions): Promise<string> {
    // Validate filename. Yes we want to match control characters
    // eslint-disable-next-line no-control-regex
    if (!filename || /[<>:"/\\|?*\x00-\x1F]/g.test(filename)) {
      throw new Error("Invalid filename")
    }

    const dir = await this.createTempDir()
    const filePath = join(dir, filename)
    await writeFile(filePath, content, encoding)
    this.tempFiles.add(filePath)
    return filePath
  }

  async cleanup(path: string): Promise<void> {
    try {
      await rm(path, { recursive: true, force: true })
      this.tempDirs.delete(path)
      this.tempFiles.delete(path)
    } catch (error) {
      console.error(`Failed to cleanup ${path}:`, error)
    }
  }

  async cleanupAll(): Promise<void> {
    const cleanup = async (paths: Set<string>) => {
      const promises = Array.from(paths).map((path) => this.cleanup(path))
      await Promise.allSettled(promises)
    }

    await cleanup(this.tempFiles)
    await cleanup(this.tempDirs)
  }

  async *createTempFiles(
    contents: Array<TempFileOptions>,
  ): AsyncGenerator<string> {
    for (const content of contents) {
      yield await this.createTempFile(content)
    }
  }
}
