# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.00 kB |  0.00 kB |   0.00 kB |  0.00 kB |
| `temporal-polyfill-lite`                     |  51.16 kB | 17.88 kB |  15.76 kB | 18.55 kB |
| `temporal-polyfill`                          |  57.81 kB | 19.37 kB |  17.47 kB | 20.27 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  61.96 kB | 22.02 kB |  19.40 kB | 22.86 kB |
| `temporal-polyfill` (full)                   |  67.17 kB | 23.11 kB |  20.67 kB | 24.23 kB |
| `@js-temporal/polyfill`                      | 159.71 kB | 45.44 kB |  39.37 kB | 47.28 kB |
| `@formatjs/temporal` (**WIP**)               | 229.63 kB | 71.28 kB |  49.97 kB | 61.62 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
