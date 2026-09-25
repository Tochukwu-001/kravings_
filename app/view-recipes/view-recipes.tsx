"use client"
import Link from "next/link";
import { 
  FaClock, 
  FaUtensils, 
  FaListCheck, 
  FaBasketShopping,
  FaArrowRight
} from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect } from "react";


const recipes = [
  {
    id: "1",
    chefName: "Chef Amina",
    chefImage: "",
    timestamp: "2 hours ago",
    recipeName: "Smoky Party Jollof Rice",
    method: "Stovetop Smoking & Simmering",
    duration: "1 hr 30 mins",
    ingredients: [
      "3 cups Long Grain Parboiled Rice",
      "6 large Red Bell Peppers (Tatashe)",
      "4 Fresh Tomatoes & 2 Red Onions",
      "1/2 cup Tomato Paste",
      "2 cups Rich Beef Stock",
      "Thyme, Curry powder, Bay leaves & Salt"
    ],
    steps: [
      "Blend bell peppers, tomatoes, and onions into a smooth puree; boil until reduced.",
      "Sauté chopped onions in vegetable oil, stir in tomato paste and fry for 5 minutes.",
      "Pour in boiled pepper mixture and fry until oil separates from the sauce.",
      "Add beef stock, thyme, curry, and bay leaves; bring sauce to a rolling boil."
    ]
  },
  {
    id: "2",
    chefName: "Chef Kwame",
    chefImage: "",
    timestamp: "5 hours ago",
    recipeName: "Authentic Beef Suya Skewers",
    method: "High-Heat Grilling",
    duration: "45 mins",
    ingredients: [
      "500g Thinly Sliced Flank Steak",
      "1/2 cup Peanut Powder / Kuli-Kuli",
      "1 tsp Garlic & Ginger Powder",
      "1/2 tsp Cayenne Pepper",
      "2 tbsp Vegetable Oil",
      "Seasoning Cubes & Salt"
    ],
    steps: [
      "Slice flank steak into thin, wide strips.",
      "Mix Yaji spice with garlic, ginger, cayenne, salt, and vegetable oil to create a rub.",
      "Coat beef slices thoroughly with spice mix and thread onto wooden skewers.",
      "Grill skewers for 10-12 minutes, turning until charred at edges."
    ]
  },
  {
    id: "3",
    chefName: "Chef Zainab",
    chefImage: "",
    timestamp: "1 day ago",
    recipeName: "Moroccan Lamb Tagine",
    method: "Slow Braising",
    duration: "2 hrs",
    ingredients: [
      "800g Lamb Shoulder",
      "1 cup Dried Apricots",
      "2 tsp Ras el Hanout",
      "1 Saffron Pinch",
      "2 cups Vegetable Stock"
    ],
    steps: [
      "Sear seasoned lamb pieces until browned on all sides.",
      "Sauté onions and spices until fragrant before returning lamb.",
      "Add stock and simmer on low heat for 1.5 hours until tender."
    ]
  },
  {
    id: "4",
    chefName: "Chef David",
    chefImage: "",
    timestamp: "2 days ago",
    recipeName: "Golden Nigerian Puff-Puff",
    method: "Deep Frying",
    duration: "1 hr 15 mins",
    ingredients: [
      "2 cups All-Purpose Flour",
      "1/2 cup Sugar",
      "1 tbsp Active Dry Yeast",
      "1/2 tsp Ground Nutmeg",
      "Vegetable Oil for frying"
    ],
    steps: [
      "Combine dry ingredients, add lukewarm water, and mix into a smooth batter.",
      "Cover and leave in a warm place to rise for 1 hour.",
      "Scoop batter into hot oil and fry until golden brown on all sides."
    ]
  }
];

export default function RecipesFeed() {

  const handleFetch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const postObj = {
          id: doc.id,
          ...doc.data()
        }
        console.log(postObj);
        
      });
    } catch (error) {
      console.error("Error", error)
      alert("Something went wrong!")
    }
  }

  useEffect(()=>{
    handleFetch()
  }, [])

  return (
    <main className="min-h-screen font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">Community Recipes</h1>
          <p className="text-gray-500 text-sm mt-1">
            Explore freshly posted recipes from home cooks and chefs around the world.
          </p>
        </div>

        {/* 2 Cards Per Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <article 
              key={recipe.id} 
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between space-y-5"
            >
              {/* Top Details Wrapper */}
              <div className="space-y-5">
                
                {/* 1. Chef's Header */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-base overflow-hidden shrink-0">
                    {recipe.chefImage ? (
                      <img 
                        src={recipe.chefImage} 
                        alt={recipe.chefName} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      recipe.chefName.charAt(0)
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{recipe.chefName}</h3>
                    <p className="text-xs text-gray-500">{recipe.timestamp}</p>
                  </div>
                </div>

                {/* 2. Recipe Title & Badges */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {recipe.recipeName}
                  </h2>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                    <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                      <FaUtensils className="text-[#E73F1E]" /> 
                      {recipe.method}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                      <FaClock className="text-[#E73F1E]" /> 
                      {recipe.duration}
                    </span>
                  </div>
                </div>

                {/* 3. Truncated Ingredients */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaBasketShopping className="text-[#E73F1E]" /> Ingredients
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    {recipe.ingredients.slice(0, 2).map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E73F1E] shrink-0" />
                        <span className="truncate">{ingredient}</span>
                      </li>
                    ))}
                    {recipe.ingredients.length > 2 && (
                      <li className="text-gray-400 italic text-[11px] font-medium pt-0.5">
                        + {recipe.ingredients.length - 2} more ingredients...
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
                    <p className="line-clamp-2 leading-relaxed">
                      <strong className="text-[#E73F1E] mr-1">1.</strong> 
                      {recipe.steps[0]}
                    </p>
                    {recipe.steps.length > 1 && (
                      <p className="text-gray-400 italic text-[11px] font-medium mt-1">
                        + {recipe.steps.length - 1} more steps...
                      </p>
                    )}
                  </div>
                </div>

              </div>

              {/* Read More Server Button */}
              <div className="pt-2 border-t border-gray-100">
                <Link 
                  href={`/recipes/${recipe.id}`} 
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors shadow-sm"
                >
                  Read Full Recipe
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
}