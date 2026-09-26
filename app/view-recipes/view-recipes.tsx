"use client";
import Link from "next/link";
import {
  FaClock,
  FaUtensils,
  FaListCheck,
  FaBasketShopping,
  FaArrowRight,
  FaTrash,
} from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";

// Added TypeScript interface for the component props
interface RecipesFeedProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
}

export default function RecipesFeed({ session }: RecipesFeedProps) {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      let postArr: any[] = [];
      const querySnapshot = await getDocs(collection(db, "recipes"));
      querySnapshot.forEach((document) => {
        postArr.push({
          id: document.id,
          ...document.data(),
        });
      });
      setRecipes(postArr);
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong while fetching recipes!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?",
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "recipes", id));
      // Update UI immediately by filtering out the deleted recipe
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id),
      );
    } catch (error) {
      console.error("Error deleting recipe: ", error);
      alert("Failed to delete recipe. Please try again.");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  // Helper function to convert comma or newline separated strings from the DB into arrays
  const parseList = (text: string | string[]) => {
    if (!text) return [];
    if (Array.isArray(text)) return text;
    return text
      .split(/,|\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <main className="min-h-screen font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Community Recipes
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Explore freshly posted recipes from home cooks and chefs around the
            world.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <FaSpinner className="animate-spin text-4xl text-[#E73F1E] mb-4" />
            <p>Loading community recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p>No recipes found. Be the first to post one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => {
              // Parse strings into arrays for the UI
              const ingList = parseList(recipe.ingredients);
              const instList = parseList(recipe.instructions || recipe.steps);

              return (
                <article
                  key={recipe.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between space-y-5"
                >
                  {/* Top Details Wrapper */}
                  <div className="space-y-5">
                    {/* 1. Chef's Header & Delete Button */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-base overflow-hidden shrink-0">
                          {recipe.img || recipe.chefImage ? (
                            <img
                              src={recipe.img || recipe.chefImage}
                              alt={recipe.author || recipe.chefName || "Chef"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            (recipe.author || recipe.chefName || "C")
                              .charAt(0)
                              .toUpperCase()
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">
                            {recipe.author || recipe.chefName || "Unknown Chef"}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {recipe.timestamp || "Recently"}
                          </p>
                        </div>
                      </div>

                      {/* Delete Action */}
                      {session?.user?.email == recipe.email && (
                        <button
                          onClick={() => handleDelete(recipe.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete Recipe"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      )}
                    </div>

                    {/* 2. Recipe Title & Badges */}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {recipe.title || recipe.recipeName}
                      </h2>
                      <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                        <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                          <FaUtensils className="text-[#E73F1E]" />
                          {recipe.method || "Standard"}
                        </span>
                        <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                          <FaClock className="text-[#E73F1E]" />
                          {recipe.duration}{" "}
                          {typeof recipe.duration === "number" ? "mins" : ""}
                        </span>
                      </div>
                    </div>

                    {/* 3. Truncated Ingredients */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FaBasketShopping className="text-[#E73F1E]" />{" "}
                        Ingredients
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        {ingList.slice(0, 2).map((ingredient, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 truncate"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E73F1E] shrink-0" />
                            <span className="truncate">{ingredient}</span>
                          </li>
                        ))}
                        {ingList.length > 2 && (
                          <li className="text-gray-400 italic text-[11px] font-medium pt-0.5">
                            + {ingList.length - 2} more ingredients...
                          </li>
                        )}
                        {ingList.length === 0 && (
                          <li className="text-gray-400 italic">
                            No ingredients listed.
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* 4. Truncated Instructions */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FaListCheck className="text-[#E73F1E]" /> Instructions
                      </h4>
                      <div className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        {instList.length > 0 ? (
                          <>
                            <p className="line-clamp-2 leading-relaxed">
                              <strong className="text-[#E73F1E] mr-1">
                                1.
                              </strong>
                              {instList[0]}
                            </p>
                            {instList.length > 1 && (
                              <p className="text-gray-400 italic text-[11px] font-medium mt-1">
                                + {instList.length - 1} more steps...
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="text-gray-400 italic">
                            No instructions provided.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Read More Server Button */}
                  <div className="pt-2 border-t border-gray-100">
                    <Link
                      href={`/view-recipes/${recipe.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors shadow-sm"
                    >
                      Read Full Recipe
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}