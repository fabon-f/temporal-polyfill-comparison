# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.16 kB | 17.87 kB |  15.79 kB | 18.54 kB |
| `temporal-polyfill`                          |  57.81 kB | 19.37 kB |  17.43 kB | 20.28 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  61.96 kB | 22.01 kB |  19.42 kB | 22.85 kB |
| `temporal-polyfill` (full)                   |  67.17 kB | 23.11 kB |  20.70 kB | 24.24 kB |
| `@js-temporal/polyfill`                      | 159.73 kB | 45.45 kB |  39.30 kB | 47.31 kB |
| `@formatjs/temporal` (**WIP**)               | 196.48 kB | 56.57 kB |  40.32 kB | 49.81 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
