import { SessionProvider } from "next-auth/react";

export default function Providers ({ children }: ProvidersProps<"/">) {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    )
}