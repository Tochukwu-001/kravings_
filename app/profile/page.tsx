import Link from "next/link";
import { 
  FaUtensils, 
  FaBookmark, 
  FaGear,
  FaPlus, 
  FaStar, 
  FaHeart, 
  FaLocationDot, 
  FaGlobe
} from "react-icons/fa6";

// Server Components can read URL search parameters directly
export default function ProfilePage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  // Read the current tab from the URL, defaulting to "recipes"
  const activeTab = searchParams.tab || "recipes";

  return (
    <main className="min-h-dvh flex flex-col font-sans bg-gray-50 text-gray-900">
      
      
      {/* PROFILE HEADER / HERO COVER */}
      <section className="relative">
        {/* Cover Photo */}
        <div className="h-64 md:h-80 w-full bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Profile Info Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative -mt-24 pb-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            
            {/* Avatar & User Details */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white relative">
                {/* User Avatar Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center"></div>
              </div>
              <div className="space-y-1 mb-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Amina Bello</h1>
                <p className="text-gray-500 font-medium text-sm">@amina_cooks • Home Chef & Food Blogger</p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1"><FaLocationDot className="text-[#E73F1E]" /> Lagos, Nigeria</span>
                  <span className="flex items-center gap-1"><FaGlobe className="text-[#E73F1E]" /> aminakitchen.com</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <Link href="/recipes/new" className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white bg-[#E73F1E] hover:opacity-90 transition shadow-sm text-sm">
                <FaPlus /> Add Recipe
              </Link>
              <Link 
                href="?tab=settings" 
                className="p-3 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm"
                aria-label="Settings"
              >
                <FaGear />
              </Link>
            </div>

          </div>

          {/* STATS BAR */}
          <div className="grid grid-cols-3 max-w-lg mt-8 text-center md:text-left divide-x divide-gray-200">
            <div className="px-4">
              <span className="block text-xl md:text-2xl font-extrabold text-gray-900">14</span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Recipes Shared</span>
            </div>
            <div className="px-4">
              <span className="block text-xl md:text-2xl font-extrabold text-gray-900">1.2k</span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Followers</span>
            </div>
            <div className="px-4">
              <span className="block text-xl md:text-2xl font-extrabold text-gray-900">340</span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Following</span>
            </div>
          </div>

        </div>
      </section>

      {/* TAB NAVIGATION (Using Next.js Links instead of Buttons) */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-8 overflow-x-auto">
          <Link 
            href="?tab=recipes"
            className={`py-4 font-semibold text-sm md:text-base border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "recipes" 
                ? "border-[#E73F1E] text-[#E73F1E]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaUtensils /> My Recipes <span className="ml-1 px-2 py-0.5 rounded-full bg-gray-100 text-xs">14</span>
          </Link>
          <Link 
            href="?tab=saved"
            className={`py-4 font-semibold text-sm md:text-base border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "saved" 
                ? "border-[#E73F1E] text-[#E73F1E]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaBookmark /> Saved Favorites <span className="ml-1 px-2 py-0.5 rounded-full bg-gray-100 text-xs">28</span>
          </Link>
          <Link 
            href="?tab=settings"
            className={`py-4 font-semibold text-sm md:text-base border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === "settings" 
                ? "border-[#E73F1E] text-[#E73F1E]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaGear /> Profile Settings
          </Link>
        </div>
      </section>

      {/* TAB CONTENT AREA */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto flex-1 w-full">
        
        {/* TAB 1: MY RECIPES */}
        {activeTab === "recipes" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Recipes Published by You</h2>
              <span className="text-sm text-gray-500">Showing 3 of 14</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Recipe Card 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <FaStar className="text-yellow-400" /> 4.9
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                    <span>Published 2 days ago</span>
                    <span className="text-[#E73F1E] bg-[#FFDD9C]/40 px-2 py-0.5 rounded-md font-bold">Main Dish</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Authentic Smoky Party Jollof Rice</h3>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">45 mins • 4 servings</span>
                    <Link href="#" className="text-xs font-bold text-[#E73F1E] hover:underline">Edit Recipe</Link>
                  </div>
                </div>
              </div>

              {/* Recipe Card 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541832676-9b763b022144?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <FaStar className="text-yellow-400" /> 4.8
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                    <span>Published 1 week ago</span>
                    <span className="text-[#E73F1E] bg-[#FFDD9C]/40 px-2 py-0.5 rounded-md font-bold">Appetizer</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Crispy Nigerian Plantain Chips</h3>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">25 mins • 3 servings</span>
                    <Link href="#" className="text-xs font-bold text-[#E73F1E] hover:underline">Edit Recipe</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SAVED FAVORITES */}
        {activeTab === "saved" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Recipes You Have Bookmarked</h2>
              <span className="text-sm text-gray-500">28 saved items</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Saved Item preview card */}
              <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-xs">
                <div className="w-24 h-24 rounded-xl bg-[url('https://images.unsplash.com/photo-1541832676-9b763b022144?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center shrink-0"></div>
                <div className="flex-1 space-y-1">
                  <span className="text-xs font-bold text-[#E73F1E]">South Africa</span>
                  <h4 className="font-bold text-gray-900">Bunny Chow Street Style</h4>
                  <p className="text-xs text-gray-500">By Sipho M. • 1 hr 20 mins</p>
                </div>
                <button className="p-3 text-red-500 hover:bg-red-50 rounded-full transition">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS (Standard HTML form for Server Side) */}
        {activeTab === "settings" && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-100 pb-4">Edit Profile Settings</h2>
            
            {/* Using a standard action form (Server Actions in Next.js 14+) */}
            <form action="/api/profile/update" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-600">First Name</label>
                  <input type="text" name="firstName" defaultValue="Amina" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E73F1E]" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-600">Last Name</label>
                  <input type="text" name="lastName" defaultValue="Bello" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E73F1E]" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-600">Email Address</label>
                <input type="email" name="email" defaultValue="amina@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E73F1E]" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-gray-600">Bio</label>
                <textarea name="bio" rows={3} defaultValue="Home Chef & Food Blogger celebrating African flavors." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E73F1E]"></textarea>
              </div>

              <button type="submit" className="px-6 py-3 rounded-xl font-bold text-white bg-[#E73F1E] hover:opacity-90 transition text-sm">
                Save Changes
              </button>
            </form>
          </div>
        )}

      </section>

    </main>
  );
}