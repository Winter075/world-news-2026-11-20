import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(process.cwd(), 'entry.png');

if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository root');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
