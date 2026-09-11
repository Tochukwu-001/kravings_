import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaFire, FaBowlFood, FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";

// Exporting Theme in case you need it for logic elsewhere, 
// but it is no longer used for styling.
export const Theme = {
  primaryColor: "#E73F1E",
  secondaryCOlor: "#FFDD9C" // Kept original spelling from your prompt
}

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center">
          <blockquote className="lg:w-1/2 mx-auto md:pt-30 pt-10 space-y-4 max-md:p-3">
            <h1 className="md:text-6xl text-4xl font-bold text-center">
              Africa's Finest Dishes
            </h1>
            <p className="tracking-wider md:text-lg text-center text-gray-200">
              Discover and share your dishes with the world on a platform built
              to connect a global community of food lovers, allowing you to
              celebrate every unique recipe, exchange homemade flavors, and
              unite over a shared passion for cooking.
            </p>
            <Link
              href={"#dishes"}
              className="bg-white text-black flex items-center w-fit p-2 rounded-full mx-auto md:mt-10 mt-6 gap-2 hover:scale-105 transition-transform"
            >
              <p className="pl-3 font-semibold">See our Dishes</p>
              <button className="text-white w-8 h-8 rounded-full flex items-center justify-center bg-[#E73F1E]">
                <FaArrowRightLong />
              </button>
            </Link>
          </blockquote>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-20 px-5 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore <span className="text-[#E73F1E]">Kravings</span>
          </h2>
          <p className="text-gray-500 mt-2">Find recipes by popular categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Soups & Stews", icon: <FaBowlFood size={30} /> },
            { name: "Grills & Suya", icon: <FaFire size={30} /> },
            { name: "Street Food", icon: <MdOutlineFastfood size={30} /> },
            { name: "Regional Classics", icon: <FaEarthAfrica size={30} /> },
          ].map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#FFDD9C] text-[#E73F1E]">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-700">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRENDING DISHES SECTION */}
      <section id="dishes" className="py-20 px-5 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trending Recipes</h2>
              <p className="text-gray-500 mt-2">What the community is cooking right now</p>
            </div>
            <Link href="/recipes" className="hidden md:flex items-center gap-2 font-medium hover:underline text-[#E73F1E]">
              View all <FaArrowRightLong />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Smoky Party Jollof Rice", author: "Chef Tobi", time: "45 mins" },
              { title: "Authentic Egusi Soup", author: "Mama Nkechi", time: "1 hr 20 mins" },
              { title: "Spicy Beef Suya", author: "Kravings Kitchen", time: "30 mins" },
            ].map((dish, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>By {dish.author}</span>
                    <span>⏱ {dish.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/recipes" className="md:hidden mt-8 flex justify-center items-center gap-2 font-medium text-[#E73F1E]">
            View all recipes <FaArrowRightLong />
          </Link>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 px-5 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Join the Kravings Community</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-3xl">🍲</div>
            <h3 className="text-xl font-bold mb-3">1. Discover</h3>
            <p className="text-gray-500">Explore hundreds of authentic African recipes shared by home cooks and chefs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-3xl">👨🏽‍🍳</div>
            <h3 className="text-xl font-bold mb-3">2. Cook</h3>
            <p className="text-gray-500">Follow easy step-by-step instructions to recreate the magic in your own kitchen.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-3xl">📸</div>
            <h3 className="text-xl font-bold mb-3">3. Share</h3>
            <p className="text-gray-500">Upload your own recipes, leave reviews, and connect with other food lovers.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 px-5 bg-[#FFDD9C]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Ready to share your secret recipe?</h2>
          <p className="text-gray-700 text-lg">Join thousands of foodies celebrating the rich culinary heritage of Africa.</p>
          <button className="px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl bg-[#E73F1E]">
            Create an Account Free
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-2xl font-bold tracking-widest">KRAVINGS</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Recipes</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}