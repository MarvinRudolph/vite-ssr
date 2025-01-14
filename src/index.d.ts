// This is a generic mix of framework types
import type { SharedContext, SharedOptions } from './utils/types'

declare module 'vite-ssr' {
  const handler: (
    App: any,
    options: SharedOptions & {
      routes: Array<Record<string, any>>
      routerOptions?: Record<string, any>
      styleCollector?: (ctx: any) => any
    },
    hook?: (
      params: SharedContext & {
        app: any
        router: any
        initialRoute: any
      }
    ) => any
  ) => any

  export default handler
  export const ClientOnly: any
  export const useContext: () => SharedContext
}
