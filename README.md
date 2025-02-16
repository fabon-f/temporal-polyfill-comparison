# Comparison of Temporal's polyfills

## Size

|                             |    minify |     gzip |    brotli |
|-----------------------------|-----------|----------|-----------|
| no polyfill                 |   0.14 kB |  0.13 kB |   0.12 kB |
| `temporal-polyfill` via CDN |  60.45 kB | 20.98 kB |  18.74 kB |
| `temporal-polyfill`         |  61.86 kB | 21.84 kB |  19.69 kB |
| `@js-temporal/polyfill`     | 189.77 kB | 48.21 kB |  40.58 kB |

note:

* The code is bundled by `vite` with default options (i.e. minified by `esbuild`, not `terser`).
* Both polyfills will shrink to some extent after supporting the latest spec (which is smaller than the previous one).

See `examples` directory for details.
