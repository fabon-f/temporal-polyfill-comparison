# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.44 kB | 17.88 kB |  15.80 kB | 18.62 kB |
| `temporal-polyfill`                          |  57.81 kB | 19.32 kB |  17.42 kB | 20.30 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.67 kB | 22.12 kB |  19.54 kB | 23.04 kB |
| `temporal-polyfill` (full)                   |  67.17 kB | 23.04 kB |  20.69 kB | 24.25 kB |
| `@js-temporal/polyfill`                      | 159.73 kB | 45.41 kB |  39.30 kB | 47.31 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
