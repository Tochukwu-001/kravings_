import { auth } from "@/auth";
import ViewClient from "./view-recipes";

export default async function ViewRecipes () {
    const session = await auth()
    return (
        <main>
            <ViewClient session={session}/>
        </main>
    )
}