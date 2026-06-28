# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.64 kB | 17.91 kB |  15.87 kB | 18.66 kB |
| `temporal-polyfill`                          |  58.25 kB | 19.74 kB |  17.73 kB | 20.73 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.88 kB | 22.17 kB |  19.60 kB | 23.09 kB |
| `temporal-polyfill` (full)                   |  67.74 kB | 23.46 kB |  21.03 kB | 24.70 kB |
| `@js-temporal/polyfill`                      | 159.73 kB | 45.42 kB |  39.36 kB | 47.27 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
