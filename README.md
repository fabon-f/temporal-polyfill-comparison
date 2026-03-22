# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.45 kB | 18.09 kB |  16.04 kB | 18.86 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  63.99 kB | 22.43 kB |  19.79 kB | 23.38 kB |
| `temporal-polyfill`                          |  57.22 kB | 20.40 kB |  18.33 kB | 21.29 kB |
| `@js-temporal/polyfill`                      | 159.86 kB | 45.46 kB |  39.40 kB | 47.32 kB |

note:

* The code is bundled by `vite` v8 with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
