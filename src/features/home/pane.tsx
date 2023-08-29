import { createContext, useContext, useMemo } from "react"
import { Pane } from "tweakpane"

interface PaneContextState {
  data: Record<string, any>
  pane: Pane
}

const Context = createContext<PaneContextState>(null!)

const pane = new Pane()

interface PaneProviderProps {
  data: Record<string, any>
  children: React.ReactNode
}

export default function PaneProvider({ data, children }: PaneProviderProps) {
  const value = useMemo(
    () => ({
      pane,
      data,
    }),
    [data],
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function usePaneContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error("usePaneContext must be used within a PaneProvider")
  }
  return context
}
