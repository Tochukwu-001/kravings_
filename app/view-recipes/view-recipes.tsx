// "use client"

// import Link from "next/link";
// import { useState } from "react";
// import { 
//   FaClock, 
//   FaUtensils, 
// //   FaSparkles, 
//   FaListCheck, 
//   FaBasketShopping, 
//   FaUser 
// } from "react-icons/fa6";

// // Static mock data representing posted recipes from database
// const recipes = [
//   {
//     id: "1",
//     chefName: "Chef Amina",
//     chefImage: "", 
//     timestamp: "2 hours ago",
//     recipeName: "Smoky Party Jollof Rice",
//     method: "Stovetop Smoking & Simmering",
//     duration: "1 hr 30 mins",
//     ingredients: [
//       "3 cups Long Grain Parboiled Rice",
//       "6 large Red Bell Peppers (Tatashe)",
//       "4 Fresh Tomatoes & 2 Red Onions",
//       "1/2 cup Tomato Paste",
//       "2 cups Rich Beef Stock",
//       "Thyme, Curry powder, Bay leaves & Salt"
//     ],
//     steps: [
//       "Blend bell peppers, tomatoes, and onions into a smooth puree; boil until reduced.",
//       "Sauté chopped onions in vegetable oil, stir in tomato paste and fry for 5 minutes.",
//       "Pour in boiled pepper mixture and fry until oil separates from the sauce.",
//       "Add beef stock, thyme, curry, and bay leaves; bring sauce to a rolling boil.",
//       "Add washed rice, cover tightly with foil and a lid, then cook on very low heat.",
//       "Increase heat slightly at the very end to burn the bottom layer for signature smokiness."
//     ],
//     presentation: "Serve hot garnished with golden fried plantains (Dodo), fresh parsley, thin red onion rings, and a side of grilled chicken."
//   },
//   {
//     id: "2",
//     chefName: "Chef Kwame",
//     chefImage: "",
//     timestamp: "5 hours ago",
//     recipeName: "Authentic Beef Suya Skewers",
//     method: "High-Heat Grilling",
//     duration: "45 mins",
//     ingredients: [
//       "500g Thinly Sliced Flank Steak",
//       "1/2 cup Peanut Powder / Kuli-Kuli (Yaji Spice)",
//       "1 tsp Garlic & Ginger Powder",
//       "1/2 tsp Cayenne Pepper",
//       "2 tbsp Vegetable Oil",
//       "Seasoning Cubes & Salt"
//     ],
//     steps: [
//       "Slice flank steak into thin, wide strips.",
//       "Mix Yaji spice with garlic, ginger, cayenne, salt, and vegetable oil to create a rub.",
//       "Coat beef slices thoroughly with spice mix and thread onto soaked wooden skewers.",
//       "Preheat grill to high heat.",
//       "Grill skewers for 10-12 minutes, turning and basting with oil until charred at edges."
//     ],
//     presentation: "Arrange on a platter over shredded cabbage, sliced red onions, and ripe tomatoes, finished with a extra sprinkle of dry Yaji spice."
//   }
// ];

// export default function RecipesFeed() {
//   // State to track which recipes are expanded by their ID
//   const [expandedRecipes, setExpandedRecipes] = useState({});

//   const toggleExpand = (id) => {
//     setExpandedRecipes((prev) => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
//       <div className="max-w-3xl mx-auto space-y-8">
        
//         {/* Page Header */}
//         <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Community Recipes</h1>
//             <p className="text-gray-500 text-sm mt-1">
//               Explore freshly posted recipes from home cooks and chefs around the world.
//             </p>
//           </div>
//         </div>

//         {/* Recipe Feed List */}
//         <div className="space-y-8">
//           {recipes.map((recipe) => {
//             const isExpanded = expandedRecipes[recipe.id];
            
//             // Truncation logic
//             const visibleIngredients = isExpanded ? recipe.ingredients : recipe.ingredients.slice(0, 3);
//             const visibleSteps = isExpanded ? recipe.steps : recipe.steps.slice(0, 1);

//             return (
//               <article 
//                 key={recipe.id} 
//                 className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6"
//               >
//                 {/* 1. Chef's Header: Image, Name, Timestamp */}
//                 <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
//                   <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-lg overflow-hidden shrink-0">
//                     {recipe.chefImage ? (
//                       <img 
//                         src={recipe.chefImage} 
//                         alt={recipe.chefName} 
//                         className="w-full h-full object-cover" 
//                       />
//                     ) : (
//                       recipe.chefName.charAt(0)
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-900 text-base">{recipe.chefName}</h3>
//                     <p className="text-xs text-gray-500">{recipe.timestamp}</p>
//                   </div>
//                 </div>

//                 {/* 2. Recipe Title & Badges: Name, Method, Duration */}
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                     {recipe.recipeName}
//                   </h2>
//                   <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-700">
//                     <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
//                       <FaUtensils className="text-[#E73F1E]" /> 
//                       Method: {recipe.method}
//                     </span>
//                     <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
//                       <FaClock className="text-[#E73F1E]" /> 
//                       Duration: {recipe.duration}
//                     </span>
//                   </div>
//                 </div>

//                 {/* 3. Ingredients */}
//                 <div>
//                   <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
//                     <FaBasketShopping className="text-[#E73F1E]" /> Ingredients
//                   </h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
//                     {visibleIngredients.map((ingredient, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#E73F1E] shrink-0" />
//                         {ingredient}
//                       </li>
//                     ))}
//                     {/* Show how many are hidden if truncated */}
//                     {!isExpanded && recipe.ingredients.length > 3 && (
//                       <li className="flex items-center gap-2 text-gray-400 italic font-medium">
//                         +{recipe.ingredients.length - 3} more...
//                       </li>
//                     )}
//                   </ul>
//                 </div>

//                 {/* 4. Instructions / Steps */}
//                 <div>
//                   <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
//                     <FaListCheck className="text-[#E73F1E]" /> Instructions
//                   </h4>
//                   <ol className="space-y-3 text-sm text-gray-700">
//                     {visibleSteps.map((step, idx) => (
//                       <li key={idx} className="flex gap-3">
//                         <span className="font-bold text-[#E73F1E] shrink-0">{idx + 1}.</span>
//                         <span className="leading-relaxed">{step}</span>
//                       </li>
//                     ))}
//                     {/* Show how many are hidden if truncated */}
//                     {!isExpanded && recipe.steps.length > 1 && (
//                       <li className="text-gray-400 italic font-medium ml-6">
//                         +{recipe.steps.length - 1} more steps...
//                       </li>
//                     )}
//                   </ol>
//                 </div>

//                 {/* 5. Presentation / Garnishing (Only shown if expanded) */}
//                 {isExpanded && (
//                   <div className="bg-[#FFDD9C]/20 border border-[#FFDD9C] p-4 rounded-xl space-y-1">
//                     <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
//                       {/* <FaSparkles className="text-[#E73F1E]" /> Presentation & Garnishing */}
//                     </h4>
//                     <p className="text-sm text-gray-800 leading-relaxed">
//                       {recipe.presentation}
//                     </p>
//                   </div>
//                 )}

//                 {/* 6. Read More Toggle Button */}
//                 <button 
//                   onClick={() => toggleExpand(recipe.id)}
//                   className="w-full mt-2 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#E73F1E] hover:border-[#E73F1E] transition-all"
//                 >
//                   {isExpanded ? "Show less" : "Read more"}
//                 </button>

//               </article>
//             );
//           })}
//         </div>

//       </div>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import { 
  FaClock, 
  FaUtensils, 
  FaListCheck, 
  FaBasketShopping 
} from "react-icons/fa6";

// Static mock data representing posted recipes from database
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
      "Add beef stock, thyme, curry, and bay leaves; bring sauce to a rolling boil.",
      "Add washed rice, cover tightly with foil and a lid, then cook on very low heat.",
      "Increase heat slightly at the very end to burn the bottom layer for signature smokiness."
    ],
    presentation: "Serve hot garnished with golden fried plantains (Dodo), fresh parsley, thin red onion rings, and a side of grilled chicken."
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
      "1/2 cup Peanut Powder / Kuli-Kuli (Yaji Spice)",
      "1 tsp Garlic & Ginger Powder",
      "1/2 tsp Cayenne Pepper",
      "2 tbsp Vegetable Oil",
      "Seasoning Cubes & Salt"
    ],
    steps: [
      "Slice flank steak into thin, wide strips.",
      "Mix Yaji spice with garlic, ginger, cayenne, salt, and vegetable oil to create a rub.",
      "Coat beef slices thoroughly with spice mix and thread onto soaked wooden skewers.",
      "Preheat grill to high heat.",
      "Grill skewers for 10-12 minutes, turning and basting with oil until charred at edges."
    ],
    presentation: "Arrange on a platter over shredded cabbage, sliced red onions, and ripe tomatoes, finished with a extra sprinkle of dry Yaji spice."
  }
];

export default function RecipesFeed() {
  // State to track which recipes are expanded by their ID
  const [expandedRecipes, setExpandedRecipes] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedRecipes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community Recipes</h1>
            <p className="text-gray-500 text-sm mt-1">
              Explore freshly posted recipes from home cooks and chefs around the world.
            </p>
          </div>
        </div>

        {/* Recipe Feed List */}
        <div className="space-y-8">
          {recipes.map((recipe) => {
            const isExpanded = !!expandedRecipes[recipe.id];
            
            // Truncation logic
            const visibleIngredients = isExpanded ? recipe.ingredients : recipe.ingredients.slice(0, 3);
            const visibleSteps = isExpanded ? recipe.steps : recipe.steps.slice(0, 1);

            return (
              <article 
                key={recipe.id} 
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6"
              >
                {/* 1. Chef's Header: Image, Name, Timestamp */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#E73F1E] font-bold text-lg overflow-hidden shrink-0">
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
                    <h3 className="font-bold text-gray-900 text-base">{recipe.chefName}</h3>
                    <p className="text-xs text-gray-500">{recipe.timestamp}</p>
                  </div>
                </div>

                {/* 2. Recipe Title & Badges: Name, Method, Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {recipe.recipeName}
                  </h2>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-700">
                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                      <FaUtensils className="text-[#E73F1E]" /> 
                      Method: {recipe.method}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                      <FaClock className="text-[#E73F1E]" /> 
                      Duration: {recipe.duration}
                    </span>
                  </div>
                </div>

                {/* 3. Ingredients */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <FaBasketShopping className="text-[#E73F1E]" /> Ingredients
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {visibleIngredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E73F1E] shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                    {/* Show how many are hidden if truncated */}
                    {!isExpanded && recipe.ingredients.length > 3 && (
                      <li className="flex items-center gap-2 text-gray-400 italic font-medium">
                        +{recipe.ingredients.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>

                {/* 4. Instructions / Steps */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaListCheck className="text-[#E73F1E]" /> Instructions
                  </h4>
                  <ol className="space-y-3 text-sm text-gray-700">
                    {visibleSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="font-bold text-[#E73F1E] shrink-0">{idx + 1}.</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                    {/* Show how many are hidden if truncated */}
                    {!isExpanded && recipe.steps.length > 1 && (
                      <li className="text-gray-400 italic font-medium ml-6">
                        +{recipe.steps.length - 1} more steps...
                      </li>
                    )}
                  </ol>
                </div>

                {/* 5. Presentation / Garnishing (Only shown if expanded) */}
                {isExpanded && (
                  <div className="bg-[#FFDD9C]/20 border border-[#FFDD9C] p-4 rounded-xl space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                      Presentation & Garnishing
                    </h4>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {recipe.presentation}
                    </p>
                  </div>
                )}

                {/* 6. Read More Toggle Button */}
                <button 
                  onClick={() => toggleExpand(recipe.id)}
                  className="w-full mt-2 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#E73F1E] hover:border-[#E73F1E] transition-all"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>

              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}