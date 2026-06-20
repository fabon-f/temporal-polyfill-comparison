# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  51.45 kB | 17.91 kB |  15.86 kB | 18.65 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  62.69 kB | 22.14 kB |  19.55 kB | 23.07 kB |
| `temporal-polyfill`                          |  58.38 kB | 19.79 kB |  17.81 kB | 20.78 kB |
| `temporal-polyfill` (full)                   |  67.88 kB | 23.51 kB |  21.09 kB | 24.75 kB |
| `@js-temporal/polyfill`                      | 159.84 kB | 45.47 kB |  39.39 kB | 47.31 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
