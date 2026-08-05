# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.61 kB | 17.91 kB |  15.90 kB | 18.66 kB |
| `temporal-polyfill`                          |  58.14 kB | 19.69 kB |  17.73 kB | 20.68 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.86 kB | 22.16 kB |  19.60 kB | 23.08 kB |
| `temporal-polyfill` (full)                   |  67.49 kB | 23.39 kB |  20.98 kB | 24.56 kB |
| `@js-temporal/polyfill`                      | 159.76 kB | 45.43 kB |  39.32 kB | 47.26 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
