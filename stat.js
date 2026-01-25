import { glob, readFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import zlib from 'node:zlib';
import ctp from 'console-table-printer';

const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);

async function size(jsFiles) {
  let originalSize = 0;
  let gzipSize = 0;
  let brotliSize = 0;
  for (const js of jsFiles) {
    const code = await readFile(js);
    const [gzipBuffer, brotliBuffer] = await Promise.all([gzip(code), brotliCompress(code)])
    originalSize += code.byteLength;
    gzipSize += gzipBuffer.byteLength;
    brotliSize += brotliBuffer.byteLength;
  }
  return {
    original: originalSize,
    gzip: gzipSize,
    brotli: brotliSize,
  };
}

const kbFormatter = new Intl.NumberFormat('en', {
  style: 'unit',
  unit: 'kilobyte',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

async function humanReadableStat(jsFiles) {
  const { original, gzip, brotli } = await size(jsFiles);
  const originalSizeWithUnit = kbFormatter.format(original / 1000);
  const gzipSizeWithUnit = kbFormatter.format(gzip / 1000);
  const brotliSizeWithUnit = kbFormatter.format(brotli / 1000);
  return {
    original: originalSizeWithUnit,
    gzip: gzipSizeWithUnit,
    brotli: brotliSizeWithUnit,
  };
}

async function getStatRow(dir, description) {
  const jsFiles = await Array.fromAsync(glob(`./examples/${dir}/dist/**/*.js`));
  const { original, gzip, brotli } = await humanReadableStat(jsFiles);
  return {
    description,
    original,
    gzip,
    brotli,
  };
}

const table = new ctp.Table({
  columns: [
    { name: 'description', title: '', alignment: 'left' },
    { name: 'original', title: 'minify' },
    { name: 'gzip', title: 'minify + gzip' },
    { name: 'brotli', title: 'minify + brotli' },
  ],
});

table.addRows([
  await getStatRow('native', 'no polyfill'),
  {
    ...await humanReadableStat([
      './examples/fullcalendar/node_modules/temporal-polyfill/global.min.js',
      ...await Array.fromAsync(glob('./examples/native/dist/**/*.js')),
    ]),
    description: 'temporal-polyfill via CDN',
  },
  await getStatRow('fullcalendar', 'temporal-polyfill'),
  await getStatRow('temporal-polyfill-lite', 'temporal-polyfill-lite'),
  await getStatRow('js-temporal', '@js-temporal/polyfill'),
]);

table.printTable();
