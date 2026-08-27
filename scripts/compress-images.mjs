import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

/* Lokalnie: npm install sharp --no-save (albo npx pnpm add -D sharp) przed uruchomieniem. */

const IMPORTS_DIR = path.resolve("src/imports")

const TARGETS = {
  "profile_photo.jpg": { maxWidth: 1920, quality: 82 },
  "image.png": { maxWidth: 1200, quality: 82, outputExt: ".jpg" },
  ...Object.fromEntries(
    Array.from({ length: 15 }, (_, i) => [
      `image-${i + 1}.png`,
      { maxWidth: 1200, quality: 80, outputExt: ".jpg" },
    ]),
  ),
}

const DEFAULT_JPEG = { maxWidth: 1920, quality: 82 }

async function compressFile(fileName, config) {
  const inputPath = path.join(IMPORTS_DIR, fileName)
  const ext = path.extname(fileName).toLowerCase()
  const base = path.basename(fileName, ext)
  const outputExt = config.outputExt ?? ext
  const outputName = base + outputExt
  const outputPath = path.join(IMPORTS_DIR, outputName)
  const tempPath = outputPath + ".tmp"

  const inputStat = await fs.stat(inputPath)
  const image = sharp(inputPath).rotate()
  const meta = await image.metadata()

  let pipeline = image.resize({
    width: config.maxWidth,
    height: config.maxWidth,
    fit: "inside",
    withoutEnlargement: true,
  })

  if (outputExt === ".jpg" || outputExt === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true })
  } else if (outputExt === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true })
  }

  await pipeline.toFile(tempPath)
  await fs.rename(tempPath, outputPath)

  if (outputPath !== inputPath) {
    await fs.unlink(inputPath)
  }

  const outputStat = await fs.stat(outputPath)
  const saved = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1)

  console.log(
    `${fileName} → ${outputName}: ${formatSize(inputStat.size)} → ${formatSize(outputStat.size)} (${saved}% mniej) [${meta.width}x${meta.height}]`,
  )

  return { input: fileName, output: outputName }
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function main() {
  const entries = await fs.readdir(IMPORTS_DIR, { withFileTypes: true })
  const files = entries
    .filter((entry) => entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name))
    .map((entry) => entry.name)

  const conversions = []

  for (const fileName of files.sort()) {
    const config = TARGETS[fileName] ?? (fileName.endsWith(".jpg") ? DEFAULT_JPEG : null)
    if (!config) continue
    conversions.push(await compressFile(fileName, config))
  }

  const before = files.length
  console.log(`\nPrzetworzono ${conversions.length} plików.`)

  const pngToJpg = conversions.filter((c) => c.input.endsWith(".png") && c.output.endsWith(".jpg"))
  if (pngToJpg.length > 0) {
    console.log("\nZaktualizuj importy w App.tsx:")
    for (const { input, output } of pngToJpg) {
      console.log(`  ./imports/${input} → ./imports/${output}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
