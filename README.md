# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.06 kB | 17.95 kB |  15.91 kB | 18.70 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  63.42 kB | 22.22 kB |  19.65 kB | 23.20 kB |
| `temporal-polyfill`                          |  58.38 kB | 19.79 kB |  17.81 kB | 20.78 kB |
| `@js-temporal/polyfill`                      | 159.84 kB | 45.47 kB |  39.39 kB | 47.31 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
