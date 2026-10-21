# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.49 kB | 17.89 kB |  15.87 kB | 18.64 kB |
| `temporal-polyfill`                          |  58.62 kB | 19.68 kB |  17.67 kB | 20.64 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.73 kB | 22.14 kB |  19.61 kB | 23.09 kB |
| `temporal-polyfill` (full)                   |  67.97 kB | 23.34 kB |  20.98 kB | 24.56 kB |
| `@js-temporal/polyfill`                      | 159.73 kB | 45.41 kB |  39.30 kB | 47.31 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
