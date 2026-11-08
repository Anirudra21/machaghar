import sharp from "sharp";
import fs from "fs";

const SVG = "/home/z/my-project/public/favicon.svg";
const OUT_DIR = "/home/z/my-project/public";

async function main() {
  const svgBuf = fs.readFileSync(SVG);

  // Standard PNG favicon sizes
  for (const size of [32, 64, 180]) {
    await sharp(svgBuf, { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(`${OUT_DIR}/favicon-${size}.png`);
    console.log(`✓ favicon-${size}.png`);
  }

  // Apple touch icon (180) alias
  await sharp(svgBuf, { density: 384 })
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`${OUT_DIR}/apple-touch-icon.png`);
  console.log("✓ apple-touch-icon.png");

  // 32x32 as favicon-32.png alias already done; also create favicon.ico via PNG
  // (Next.js serves favicon.ico from /public; we provide favicon.svg primarily)
  console.log("DONE");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
