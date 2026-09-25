"use client"
import { SessionProvider} from "next-auth/react";
import { ProvidersProps} from "next-auth/react/types";
import { Children } from "react";


export default function Providers ({ childern}: ProvidersProps<"/">) {
    return(
        <div>
            <SessionProvider>
                {childern}
            </SessionProvider>
        </div>
    )
}