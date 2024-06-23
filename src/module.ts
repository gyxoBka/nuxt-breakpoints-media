import { defineNuxtModule, addPlugin, addImports, addTemplate, createResolver } from '@nuxt/kit'
import type { IModuleOptions } from './types'
import { DEFAULT_OPTIONS } from './constants'

export type { IBreakpoints } from './types'

export type ModuleOptions = IModuleOptions

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-breakpoints-media',
    configKey: 'breakpoints',
  },
  setup(_options, _nuxt) {
    const options = {
      ...DEFAULT_OPTIONS,
      ..._options,
    }

    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    _nuxt.options.build.transpile.push(runtimeDir)

    _nuxt.options.alias['#breakpoints-options'] = addTemplate({
      filename: 'breakpoints-options.mjs',
      getContents() {
        return `export default ${JSON.stringify(options)}`
      },
    }).dst

    addImports({ name: 'useBreakpoints', as: 'useBreakpoints', from: resolve(runtimeDir, 'composables') })

    addPlugin(resolve(runtimeDir, 'plugin'))
  },
})
