import {
  FileState,
  GoogleAIFileManager,
  type FileMetadataResponse,
} from "@google/generative-ai/server"
import { consola } from "consola"

import { sleep } from "./sleep"
import { TempManager } from "./temp-manager"

interface WaitForProcessingOptions {
  initialInterval?: number
  maxAttempts?: number
  backoffFactor?: number
}

interface UploadOptions {
  mimeType: string
}

export class GoogleFileManager {
  private fileManager: GoogleAIFileManager
  private tempManager: TempManager
  private log = consola.withTag("GoogleFileManager")

  constructor(apiKey: string) {
    if (!apiKey) throw new GoogleFileManagerError("API key is required")
    this.fileManager = new GoogleAIFileManager(apiKey)
    this.tempManager = new TempManager("google-ai-")
  }

  private async withRetry<T>(
    operation: () => Promise<T>,
    maxAttempts = 3,
    delay = 1000,
  ): Promise<T> {
    let lastError: Error | undefined

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await operation()
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error))
        this.log.warn(
          `Attempt ${attempt}/${maxAttempts} failed: ${lastError.message}`,
        )

        if (attempt === maxAttempts) break
        await sleep(delay * attempt)
      }
    }

    throw new GoogleFileManagerError(
      "Operation failed after retries",
      lastError,
    )
  }

  async upload(input: Blob | string, options: UploadOptions) {
    if (input instanceof Blob) {
      return await this.uploadBlob(input, options)
    }

    return await this.uploadFile(input, options)
  }

  async uploadMany(
    files: Array<{ input: Blob | string; options: UploadOptions }>,
    concurrency = 3,
  ) {
    this.log.info(`Starting batch upload of ${files.length} files`)
    const results: Array<FileMetadataResponse> = []

    for (let i = 0; i < files.length; i += concurrency) {
      const batch = files.slice(i, i + concurrency)
      const batchResults = await Promise.all(
        batch.map(({ input, options }) => this.upload(input, options)),
      )
      results.push(...batchResults)

      this.log.success(
        `Completed batch ${Math.floor(i / concurrency) + 1}/${Math.ceil(files.length / concurrency)}`,
      )
    }

    this.log.info(`Batch upload complete. ${results.length} files uploaded.`)

    return results
  }

  async uploadBlob(
    blob: Blob,
    { mimeType }: UploadOptions,
  ): Promise<FileMetadataResponse> {
    this.log.start(
      `Uploading blob of size: ${(blob.size / 1024).toFixed(2)} KB`,
    )

    const tempFile = await this.tempManager.createTempFile({
      content: await blob.text(),
      filename: "upload_blob",
    })

    try {
      const response = await this.withRetry(() =>
        this.fileManager.uploadFile(tempFile, { mimeType }),
      )
      this.log.success(`Uploaded blob: ${response.file.name}`)
      return response.file
    } finally {
      await this.tempManager.cleanup(tempFile)
    }
  }

  async uploadFile(
    path: string,
    { mimeType }: UploadOptions,
  ): Promise<FileMetadataResponse> {
    this.log.info(`Starting file upload: ${path}`)
    const response = await this.withRetry(() =>
      this.fileManager.uploadFile(path, { mimeType }),
    )
    this.log.success(`Uploaded file: ${response.file.name}`)
    return response.file
  }

  async deleteAllFiles(): Promise<void> {
    this.log.start("Cleaning up uploaded files")

    const fileList = await this.withRetry(() => this.fileManager.listFiles())
    // fileList.files can be undefined
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const files = fileList.files ?? []
    const totalFiles = files.length

    if (totalFiles === 0) {
      this.log.info("No files to delete")
      return
    }

    this.log.info(`Found ${totalFiles} file(s) to delete`)
    const results = await Promise.allSettled(
      files.map((file) =>
        this.withRetry(() => this.fileManager.deleteFile(file.name)),
      ),
    )

    const succeeded = results.filter((r) => r.status === "fulfilled").length
    const failed = results.filter((r) => r.status === "rejected").length

    if (failed > 0) {
      this.log.warn(`Failed to delete ${failed} file(s)`)
    }
    this.log.success(`Successfully deleted ${succeeded} file(s)`)
  }

  async waitForFileProcessing(
    file: FileMetadataResponse,
    options: WaitForProcessingOptions = {},
  ): Promise<FileMetadataResponse> {
    const {
      initialInterval = 100,
      maxAttempts = 30,
      backoffFactor = 1.2,
    } = options

    this.log.start(`Processing file: ${file.name}`)
    let currentFile = file
    let attempts = 0
    let interval = initialInterval

    while (currentFile.state === FileState.PROCESSING) {
      attempts++
      this.log.debug(`Processing attempt ${attempts}/${maxAttempts}...`)

      if (attempts >= maxAttempts) {
        throw new GoogleFileManagerError(
          `Timeout waiting for file processing: ${file.name}`,
        )
      }

      await sleep(interval)
      interval *= backoffFactor

      currentFile = await this.withRetry(() =>
        this.fileManager.getFile(file.name),
      )
    }

    if (currentFile.state !== FileState.ACTIVE) {
      throw new GoogleFileManagerError(
        `File processing failed: ${file.name} (State: ${currentFile.state})`,
      )
    }

    this.log.success(`Successfully processed file: ${file.name}`)
    return currentFile
  }

  async cleanup(): Promise<void> {
    try {
      await this.tempManager.cleanupAll()
      this.log.success("Cleanup completed successfully")
    } catch (error) {
      this.log.error("Cleanup failed:", error)
      throw new GoogleFileManagerError("Cleanup failed", error)
    }
  }
}

class GoogleFileManagerError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message)
    this.name = "GoogleFileManagerError"
  }
}
