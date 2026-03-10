# Comparison of Temporal's polyfills

## Size

|                                              |    minify |     gzip |    brotli |     zstd |
|----------------------------------------------|-----------|----------|-----------|----------|
| no polyfill                                  |   0.13 kB |  0.13 kB |   0.10 kB |  0.12 kB |
| `temporal-polyfill-lite`                     |  52.27 kB | 18.03 kB |  15.97 kB | 18.78 kB |
| `temporal-polyfill-lite`<br>(calendars-full) |  63.85 kB | 22.40 kB |  19.81 kB | 23.34 kB |
| `temporal-polyfill`                          |  56.68 kB | 20.26 kB |  18.22 kB | 21.15 kB |
| `@js-temporal/polyfill`                      | 159.88 kB | 45.45 kB |  39.34 kB | 47.30 kB |

note:

* The code is bundled by `vite` v8 (beta) with default options (i.e. minified by `oxc-minify`, not `terser`).

See `examples` directory for details.
