# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.20 kB | 18.01 kB |  15.99 kB | 18.75 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  63.74 kB | 22.33 kB |  19.72 kB | 23.28 kB |
| `temporal-polyfill`                          |  57.21 kB | 20.40 kB |  18.31 kB | 21.29 kB |
| `@js-temporal/polyfill`                      | 159.83 kB | 45.46 kB |  39.37 kB | 47.30 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
