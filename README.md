# Comparison of Temporal's polyfills

## Size

|                             |    minify |     gzip |    brotli |     zstd |
|-----------------------------|-----------|----------|-----------|----------|
| no polyfill                 |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`    |  53.42 kB | 18.59 kB |  16.31 kB | 19.20 kB |
| `temporal-polyfill`         |  56.40 kB | 20.15 kB |  18.11 kB | 21.05 kB |
| `@js-temporal/polyfill`     | 159.88 kB | 45.45 kB |  39.34 kB | 47.30 kB |

note:

* The code is bundled by `vite` v8 (beta) with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
