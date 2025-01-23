import { useLayoutEffect } from 'react'

export const isWeb: boolean = false
export const isWindowDefined: boolean = false
export const isServer: boolean = false
export const isClient: boolean = false
export const useIsomorphicLayoutEffect: typeof useLayoutEffect = useLayoutEffect
export const isChrome: boolean = false
export const isWebTouchable: boolean = false
export const isTouchable: boolean = true
export const isAndroid: boolean = false
export const isIos: boolean = true
export const currentPlatform: 'web' | 'ios' | 'native' | 'android' = 'ios'
