import sharp from "sharp";
import fs from "fs";

const SRC = "/home/z/my-project/upload/pasted_image_1794145876645.png";
const OUT_DIR = "/home/z/my-project/public/images";

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // Optimized full logo (for header/footer), preserve aspect ratio & content
  await sharp(SRC)
    .resize(640, 640, { fit: "contain" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(`${OUT_DIR}/logo.png`);
  console.log("✓ logo.png (640)");

  // Smaller variant for tight spaces
  await sharp(SRC)
    .resize(256, 256, { fit: "contain" })
    .png({ quality: 85, compressionLevel: 9 })
    .toFile(`${OUT_DIR}/logo-sm.png`);
  console.log("✓ logo-sm.png (256)");

  console.log("DONE");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
