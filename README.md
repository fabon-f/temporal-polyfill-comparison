# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.49 kB | 17.89 kB |  15.87 kB | 18.65 kB |
| `temporal-polyfill`                          |  58.85 kB | 19.67 kB |  17.69 kB | 20.63 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.73 kB | 22.14 kB |  19.61 kB | 23.08 kB |
| `temporal-polyfill` (full)                   |  68.21 kB | 23.35 kB |  20.96 kB | 24.54 kB |
| `@js-temporal/polyfill`                      | 159.76 kB | 45.43 kB |  39.33 kB | 47.26 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
