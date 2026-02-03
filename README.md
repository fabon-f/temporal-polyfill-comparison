# Comparison of Temporal's polyfills

## Size

|                             |    minify |     gzip |    brotli |
|-----------------------------|-----------|----------|-----------|
| no polyfill                 |   0.13 kB |  0.13 kB |   0.10 kB |
| `temporal-polyfill-lite`    |  58.10 kB | 19.13 kB |  16.67 kB |
| `temporal-polyfill`         |  56.40 kB | 20.15 kB |  18.11 kB |
| `@js-temporal/polyfill`     | 159.88 kB | 45.45 kB |  39.34 kB |

note:

* The code is bundled by `vite` v8 (beta) with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
