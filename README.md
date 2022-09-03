# Fun Animal Names

This module hashes strings into fun animal names.

This project was scaffolded with [TSDX](https://tsdx.io/).

```ts
import { funAnimalName } from 'fun-animal-names'

const name = funAnimalName('abc123')
console.log(name) // 'Perfect Duck'
```

You can also specify the set of animal names and adjectives to use:

```ts
import { funAnimalName } from 'fun-animal-names'

const name = funAnimalName('abc123', {
  adjectives: ['Happy'],
  animalNames: ['Goldfish'],
})
console.log(name) // 'Happy Goldfish'
```

### Jest

You can verify functionality with:

```sh
npm run test
```

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of the library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

## Continuous Integration

### GitHub Actions

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## License

[MIT](http://opensource.org/licenses/MIT).
