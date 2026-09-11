import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaUtensils, FaGlobe, FaUsers, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col font-sans">
      {/* NAVIGATION BAR */}
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover flex flex-col">
        <div className="flex-1 flex flex-col justify-center min-h-[90vh] bg-black/60 text-white px-4">
          <blockquote className="lg:w-3/5 mx-auto space-y-6 pt-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Africa's Finest <span className="text-[#E73F1E]">Dishes</span>
            </h1>
            <p className="tracking-wider text-lg md:text-xl text-gray-200 md:px-10 leading-relaxed">
              Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.
            </p>
            <Link href={"#"} className="bg-white text-black font-semibold flex items-center mx-auto mt-8 w-fit pl-6 pr-2 py-2 rounded-full gap-4 hover:scale-105 transition-transform shadow-lg">
              See our Dishes
              <button className="text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform bg-[#E73F1E]">
                <FaArrowRight />
              </button>
            </Link>
          </blockquote>
        </div>
      </section>

      {/* FEATURES / HOW IT WORKS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Kravings?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the rich culinary heritage of Africa and share your own kitchen creations with a passionate community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[#FFDD9C]">
              <FaGlobe className="text-4xl text-[#E73F1E]" />
            </div>
            <h3 className="text-xl font-bold">Discover Recipes</h3>
            <p className="text-gray-600">Explore thousands of authentic African recipes curated by home cooks and professional chefs alike.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[#FFDD9C]">
              <FaUtensils className="text-4xl text-[#E73F1E]" />
            </div>
            <h3 className="text-xl font-bold">Share Your Craft</h3>
            <p className="text-gray-600">Upload your unique dishes, share your secret ingredients, and build your own culinary portfolio.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[#FFDD9C]">
              <FaUsers className="text-4xl text-[#E73F1E]" />
            </div>
            <h3 className="text-xl font-bold">Connect Globally</h3>
            <p className="text-gray-600">Interact with food lovers from across the globe, review recipes, and exchange ideas.</p>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES SECTION */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending on Kravings</h2>
              <p className="text-gray-600">Top-rated dishes from our community this week.</p>
            </div>
            <Link href="#" className="hidden md:flex font-semibold hover:underline items-center gap-2 text-[#E73F1E]">
              View all <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <FaStar className="text-yellow-400" /> 4.9
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Authentic Smoky Jollof Rice</h3>
                <p className="text-gray-500 text-sm mb-4">By Chef Amina • Nigeria</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">45 mins</span>
                  <button className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-[#E73F1E]">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>

            {/* Dish Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541832676-9b763b022144?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <FaStar className="text-yellow-400" /> 4.8
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">South African Bunny Chow</h3>
                <p className="text-gray-500 text-sm mb-4">By Sipho M. • South Africa</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">1 hr 20 mins</span>
                  <button className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-[#E73F1E]">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>

            {/* Dish Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598511796318-7b82ef4b4700?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <FaStar className="text-yellow-400" /> 4.9
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Moroccan Chicken Tagine</h3>
                <p className="text-gray-500 text-sm mb-4">By Youssef • Morocco</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">2 hrs</span>
                  <button className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-[#E73F1E]">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}