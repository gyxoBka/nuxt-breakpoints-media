import type { Ref } from '@vue/reactivity'
import type { IBreakpoints } from '../types'
import { useNuxtApp } from '#imports'

export function useBreakpoints(): Ref<IBreakpoints> {
  return useNuxtApp().$bp
}
