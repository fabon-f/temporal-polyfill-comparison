# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.32 kB | 17.86 kB |  15.81 kB | 18.59 kB |
| `temporal-polyfill`                          |  58.25 kB | 19.74 kB |  17.73 kB | 20.73 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.56 kB | 22.09 kB |  19.53 kB | 23.02 kB |
| `temporal-polyfill` (full)                   |  67.74 kB | 23.46 kB |  21.03 kB | 24.70 kB |
| `@js-temporal/polyfill`                      | 159.73 kB | 45.42 kB |  39.36 kB | 47.27 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
