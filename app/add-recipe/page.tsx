import { auth } from "@/auth";
import { Main } from "next/document";
import RecipeClient from "./add-recipe";

export default async function AddRecipe () {
    const session = await auth ()
    return (
        <main>
            <RecipeClient/>

        </main>
    )
}