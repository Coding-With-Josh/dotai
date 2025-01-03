'use client'

import { SessionProvider } from "next-auth/react"
import { WalletProvider } from "@/components/solana/wallet/wallet-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <WalletProvider>{children}</WalletProvider>
    </SessionProvider>
  )
}

