 import Image from "next/image";
 import { FaClock, FaFireBurner, FaChevronDown, FaUtensils, FaListOl, FaLeaf } from "react-icons/fa6";
 
 export default function RecipesFeedPage() {
   // Mock database of posted recipes
   const postedRecipes = [
     {
       id: 1,
       chefName: "Amina Bello",
       chefImage: "/avatar.jpg", 
       timestamp: "2 hours ago",
       recipeName: "Authentic Smoky Party Jollof",
       recipeImage: "/bg.jpg", // ADDED: Placeholder for the actual food image
       duration: "1h 30m",
       method: "Stovetop Steaming",
       ingredients: [
         "3 cups long-grain parboiled rice",
         "6 large fresh plum tomatoes",
         "3 red bell peppers (tatashe)",
         "2 scotch bonnet peppers (ata rodo)",
         "1 large red onion",
         "1/2 cup vegetable oil",
         "2 tablespoons tomato paste",
         "2 cups beef or chicken broth",
       ],
       instructions: [
         "Blend the tomatoes, bell peppers, scotch bonnets, and half of the onion until smooth.",
         "In a large pot, heat the oil and fry the remaining chopped onion until translucent.",
         "Stir in the tomato paste and fry for 5 minutes to remove the sour taste.",
         "Pour in the blended pepper mix, season well, and boil until it thickens.",
         "Wash the rice thoroughly until the water runs clear, then stir it into the sauce.",
         "Add the broth, cover the pot tightly with foil to trap the steam, and cook on low heat for 45 minutes."
       ],
       garnishing: "Serve hot with fried plantains (dodo), creamy coleslaw, and grilled chicken. Garnish the plate with sliced tomatoes and onions."
     },
     {
       id: 2,
       chefName: "David Osei",
       chefImage: "/avatar.jpg", 
       timestamp: "5 hours ago",
       recipeName: "Spicy Kelewele (Fried Plantain Cubes)",
       recipeImage: "/bg.jpg", // ADDED: Placeholder for the actual food image
       duration: "25m",
       method: "Deep Frying",
       ingredients: [
         "4 ripe plantains",
         "1 tablespoon grated ginger",
         "1 teaspoon cayenne pepper",
         "1/2 teaspoon ground cloves",
         "1/2 teaspoon nutmeg",
         "Salt to taste",
         "Vegetable oil for frying"
       ],
       instructions: [
         "Peel the ripe plantains and cut them into bite-sized cubes.",
         "In a bowl, mix the grated ginger, cayenne, cloves, nutmeg, and salt with a tiny splash of water to form a paste.",
         "Toss the plantain cubes in the spice paste until evenly coated.",
         "Heat vegetable oil in a deep pan over medium-high heat.",
         "Fry the plantains in batches until they are deeply golden brown and caramelized.",
         "Drain on paper towels to remove excess oil."
       ],
       garnishing: "Serve immediately with a side of roasted peanuts and a cold glass of zobo drink."
     }
   ];
 
   return (
     <main className="min-h-dvh bg-gray-50 font-sans pb-20">
       
       {/* HEADER */}
       <section className="bg-black py-16 px-4 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
           Community <span className="text-[#E73F1E]">Recipes</span>
         </h1>
         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           Discover, cook, and share authentic dishes from chefs all over the continent.
         </p>
       </section>
 
       {/* RECIPES FEED */}
       <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 space-y-12">
         {postedRecipes.map((recipe) => (
           <article 
             key={recipe.id} 
             className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
           >
             {/* 1. Recipe Header (Chef Info) */}
             <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
               <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full bg-gray-200 relative overflow-hidden shrink-0 border-2 border-white shadow-sm">
                   <Image 
                     src={recipe.chefImage} 
                     alt={recipe.chefName}
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-900 text-lg">{recipe.chefName}</h3>
                   <p className="text-sm text-gray-500 font-medium">{recipe.timestamp}</p>
                 </div>
               </div>
             </div>
 
             {/* 2. Recipe Main Content */}
             <div className="p-6 md:p-8">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                 {recipe.recipeName}
               </h2>
 
               {/* Quick Info Tags */}
               <div className="flex flex-wrap gap-4 mb-6">
                 <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                   <FaClock className="text-[#E73F1E]" />
                   <span className="font-semibold text-gray-700">{recipe.duration}</span>
                 </div>
                 <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                   <FaFireBurner className="text-[#E73F1E]" />
                   <span className="font-semibold text-gray-700">{recipe.method}</span>
                 </div>
               </div>
 
               {/* ADDED: Featured Food Image */}
               <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gray-200 shadow-inner">
                 <Image 
                   src={recipe.recipeImage} 
                   alt={recipe.recipeName}
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                 />
               </div>
 
               {/* Action Buttons Container (Side by Side on desktop, stacked on mobile) */}
               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 
                 {/* 3. View Ingredients Button */}
                 <details className="group flex-1">
                   <summary className="w-full flex items-center justify-center gap-3 bg-[#FFDD9C]/30 text-[#E73F1E] font-bold px-6 py-3.5 rounded-2xl cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#FFDD9C]/50 transition-colors border border-[#FFDD9C]/50">
                     <FaUtensils />
                     <span>View Ingredients</span>
                     <FaChevronDown className="transition-transform duration-300 group-open:-rotate-180" />
                   </summary>
                   
                   <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 animate-fade-in">
                     <h4 className="font-bold text-gray-900 mb-4 text-lg">What you need:</h4>
                     <ul className="space-y-3">
                       {recipe.ingredients.map((ingredient, index) => (
                         <li key={index} className="flex items-start gap-3">
                           <span className="w-2 h-2 rounded-full bg-[#E73F1E] shrink-0 mt-2"></span>
                           <span className="text-gray-700 leading-relaxed">{ingredient}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 </details>
 
                 {/* 4. View Instructions Button (Collapsible) */}
                 <details className="group flex-1">
                   <summary className="w-full flex items-center justify-center gap-3 bg-black text-white font-bold px-6 py-3.5 rounded-2xl cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-gray-900 transition-colors">
                     <FaListOl />
                     <span>View Instructions</span>
                     <FaChevronDown className="transition-transform duration-300 group-open:-rotate-180" />
                   </summary>
                   
                   <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 animate-fade-in">
                     <h4 className="font-bold text-gray-900 mb-5 text-lg">Step-by-step:</h4>
                     <div className="space-y-6">
                       {recipe.instructions.map((step, index) => (
                         <div key={index} className="flex gap-4">
                           <div className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                             {index + 1}
                           </div>
                           <p className="text-gray-700 leading-relaxed pt-1">
                             {step}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>
                 </details>
 
               </div>
 
               {/* 5. Presentation / Garnishing */}
               <div className="bg-[#FFDD9C]/20 rounded-2xl p-6 border border-[#FFDD9C]/30 flex items-start gap-4">
                 <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E73F1E] shadow-sm">
                   <FaLeaf />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1">Presentation & Garnishing</h4>
                   <p className="text-gray-700 leading-relaxed">
                     {recipe.garnishing}
                   </p>
                 </div>
               </div>
 
             </div>
           </article>
         ))}
       </section>
       
     </main>
   );
 }