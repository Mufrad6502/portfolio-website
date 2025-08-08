"use client"

import { AnimationProvider } from "@/contexts/animation-context"
import { ReactNode } from "react"

export default function RootProvider({ children }: { children: ReactNode }) {
  return <AnimationProvider>{children}</AnimationProvider>
}
