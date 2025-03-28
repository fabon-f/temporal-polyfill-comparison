# Comparison of Temporal's polyfills

## Size

|                             |    minify |     gzip |    brotli |
|-----------------------------|-----------|----------|-----------|
| no polyfill                 |   0.14 kB |  0.13 kB |   0.12 kB |
| `temporal-polyfill` via CDN |  56.92 kB | 20.24 kB |  18.19 kB |
| `temporal-polyfill`         |  57.94 kB | 21.13 kB |  19.04 kB |
| `@js-temporal/polyfill`     | 156.48 kB | 45.42 kB |  39.28 kB |

note:

* The code is bundled by `vite` with default options (i.e. minified by `esbuild`, not `terser`).

See `examples` directory for details.
