export interface IBreakpoints {
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

export interface IBreakpointsMedia {
  sm: string
  lSm: string
  sSm: string

  md: string
  lMd: string
  sMd: string

  lg: string
  lLg: string
  sLg: string

  xl: string
}

export interface IModuleOptions {
  sm: number
  md: number
  lg: number
  xl: number
  fallback?: Partial<IBreakpoints>
}
