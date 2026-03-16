# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.39 kB | 18.05 kB |  15.99 kB | 18.82 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  64.02 kB | 22.42 kB |  19.80 kB | 23.39 kB |
| `temporal-polyfill` via CDN                  |  57.16 kB | 20.36 kB |  18.25 kB | 21.30 kB |
| `temporal-polyfill`                          |  58.29 kB | 20.71 kB |  18.60 kB | 21.64 kB |
| `@js-temporal/polyfill`                      | 159.88 kB | 45.45 kB |  39.34 kB | 47.30 kB |

note:

* The code is bundled by `vite` v8 (beta) with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
