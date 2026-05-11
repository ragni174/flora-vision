import { Jimp } from "jimp";
import fs from "fs";
import path from "path";

const assetsDir = "public/assets";

async function processImages() {
  const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png') && !f.includes('_transparent'));
  
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace('.png', '_transparent.png'));
    
    console.log(`Processing ${file}...`);
    try {
      const image = await Jimp.read(inputPath);
      
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const red = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue = this.bitmap.data[idx + 2];
        
        const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;
        
        if (luminance < 15) {
          this.bitmap.data[idx + 3] = 0; // Fully transparent
        } else if (luminance < 35) {
          const alpha = Math.floor(((luminance - 15) / 20) * 255);
          this.bitmap.data[idx + 3] = alpha;
        }
      });
      
      await image.write(outputPath);
      console.log(`Saved ${outputPath}`);
    } catch (error) {
      console.error(`Failed to process ${file}:`, error);
    }
  }
}

processImages().then(() => console.log('All done.')).catch(console.error);
