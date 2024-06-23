# nuxt-breakpoints-media

> Nuxt3 or higher module

Module adds to your app easy way to control web page breakpoints

## Installation

```sh
npm i nuxt-breakpoints-media
```

Add to modules

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-breakpoints-media'],
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
})
```

## Usage

```ts
const { $bp } = useNuxtApp()
const isSmallThanMd = computed(() => $bp.value.sMd)
```

### Usage with composable
```ts
const bp = useBreakpoints()
const isSmallThanMd = computed(() => bp.value.sMd)
```


Plugin returns a ref value with next props

```ts
interface IBreakpoints {
  sm: boolean
  lSm: boolean
  sSm: boolean

  md: boolean
  lMd: boolean
  sMd: boolean

  lg: boolean
  lLg: boolean
  sLg: boolean

  xl: boolean
}
```

## LICENSE

MIT
