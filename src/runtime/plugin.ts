import { createBreakpoints } from './createBreakpoints'
import { defineNuxtPlugin } from '#imports'
import options from '#breakpoints-options'

export default defineNuxtPlugin((_nuxtApp) => {
  const { bp, mediaQuery } = createBreakpoints(options)

  _nuxtApp.hook('app:suspense:resolve', () => {
    if (!window?.matchMedia) return

    const keys = Object.keys(mediaQuery) as Array<keyof typeof mediaQuery>

    keys.forEach((key) => {
      const mediaQueryList = window.matchMedia(mediaQuery[key])

      if (mediaQueryList) {
        bp.value[key] = mediaQueryList.matches

        mediaQueryList.onchange = (event) => {
          bp.value[key] = event.matches
        }
      }
    })
  })

  return _nuxtApp.provide('bp', bp)
})
