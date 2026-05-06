# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.27 kB | 18.04 kB |  16.00 kB | 18.78 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  63.63 kB | 22.30 kB |  19.73 kB | 23.24 kB |
| `temporal-polyfill`                          |  57.21 kB | 20.40 kB |  18.31 kB | 21.29 kB |
| `@js-temporal/polyfill`                      | 159.84 kB | 45.46 kB |  39.42 kB | 47.30 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
