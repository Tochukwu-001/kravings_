"use client"

import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "react"


export default function Providers ({ children }: ProviderProps<"/">) {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>

        </div>
    )
}