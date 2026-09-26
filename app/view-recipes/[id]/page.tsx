"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { FaSpinner, FaArrowLeft, FaClock, FaUtensils, FaBasketShopping, FaListCheck } from "react-icons/fa6";

export default function RecipeDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string; // Grabs the dynamic [id] from the URL

  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "recipes", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRecipe({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleRecipe();
  }, [id]);

  // Helper function to convert comma or newline separated strings into arrays
  const parseList = (text: string | string[]) => {
    if (!text) return [];
    if (Array.isArray(text)) return text;
    return text.split(/,|\n/).map((item) => item.trim()).filter(Boolean);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 gap-3">
        <FaSpinner className="animate-spin text-4xl text-[#E73F1E]" />
        <p>Cooking up your recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Recipe Not Found</h2>
        <button onClick={() => router.back()} className="text-[#E73F1E] font-semibold hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  const ingList = parseList(recipe.ingredients);
  const instList = parseList(recipe.instructions || recipe.steps);

  return (
    <main className="min-h-screen font-sans p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaArrowLeft /> Back to Feed
        </button>

        {/* Recipe Header Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            
            {/* Chef Info */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-[#E73F1E] flex items-center justify-center text-[#E73F1E] font-bold text-3xl overflow-hidden shadow-sm">
                {recipe.img || recipe.chefImage ? (
                  <img
                    src={recipe.img || recipe.chefImage}
                    alt={recipe.author || recipe.chefName || "Chef"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  (recipe.author || recipe.chefName || "C").charAt(0).toUpperCase()
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-sm">
                  {recipe.author || recipe.chefName || "Unknown Chef"}
                </h3>
                <p className="text-xs text-gray-500">{recipe.timestamp || "Recently"}</p>
              </div>
            </div>

            {/* Recipe Title & Meta */}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {recipe.title || recipe.recipeName}
              </h1>
              
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                  <FaUtensils className="text-[#E73F1E]" />
                  {recipe.method || "Standard"}
                </span>
                <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                  <FaClock className="text-[#E73F1E]" />
                  {recipe.duration} {typeof recipe.duration === "number" ? "mins" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Ingredients Column */}
          <div className="md:col-span-1 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 h-fit">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
              <FaBasketShopping className="text-[#E73F1E]" /> Ingredients
            </h4>
            <ul className="space-y-4 text-sm text-gray-700">
              {ingList.length > 0 ? (
                ingList.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E73F1E] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{ingredient}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-400 italic">No ingredients listed.</li>
              )}
            </ul>
          </div>

          {/* Instructions Column */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
              <FaListCheck className="text-[#E73F1E]" /> Instructions
            </h4>
            <div className="space-y-6 text-sm text-gray-700">
              {instList.length > 0 ? (
                instList.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <p className="leading-relaxed pt-1">{step}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic">No instructions provided.</p>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}