import { ref } from 'vue'
import type { Ref } from '@vue/reactivity'
import type { IBreakpoints, IBreakpointsMedia, IModuleOptions } from '../types'

export function createBreakpoints(options: IModuleOptions): { bp: Ref<IBreakpoints>, mediaQuery: IBreakpointsMedia } {
  const bp = ref<IBreakpoints>({
    sm: false,
    lSm: false,
    sSm: true,

    md: false,
    lMd: false,
    sMd: true,

    lg: false,
    lLg: false,
    sLg: true,

    xl: false,
  })

  const mediaQuery: IBreakpointsMedia = {
    sm: `(min-width: ${options.sm}px) and (max-width: ${options.md - 1}px)`,
    sSm: `(max-width: ${options.sm - 1}px)`,
    lSm: `(min-width: ${options.sm}px)`,

    md: `(min-width: ${options.md}px) and (max-width: ${options.lg - 1}px)`,
    sMd: `(max-width: ${options.md - 1}px)`,
    lMd: `(min-width: ${options.md}px)`,

    lg: `(min-width: ${options.lg}px) and (max-width: ${options.xl - 1}px)`,
    sLg: `(max-width: ${options.lg - 1}px)`,
    lLg: `(min-width: ${options.lg}px)`,

    xl: `(min-width: ${options.xl}px)`,
  }

  return { bp, mediaQuery }
}
