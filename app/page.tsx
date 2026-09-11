import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaStar, FaRegHeart, FaUtensils, FaUsers } from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function Home() {
  return (
    <main className="min-h-dvh font-sans text-neutral-800 bg-white">
      
    

      {/* HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center items-center px-6">
          <blockquote className="w-full md:w-2/3 lg:w-1/2 mx-auto pt-20 space-y-6 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
              Africa's Finest <br className="hidden md:block" />
              <span className="text-[#FFDD9C]">Dishes</span>
            </h1>
            <p className="tracking-wider text-base md:text-lg text-center text-gray-200 leading-relaxed font-light">
              Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.
            </p>
            <Link href="#explore" className="bg-white text-black flex items-center w-fit py-2 px-3 rounded-full gap-3 hover:scale-105 transition-transform mt-4">
              <span className="pl-3 font-semibold">See Our Dishes</span>
              <button className="text-white w-9 h-9 rounded-full flex items-center justify-center bg-[#E73F1E]">
                <FaArrowRightLong />
              </button>
            </Link>
          </blockquote>
        </div>
      </section>

      {/* FEATURED DISHES SECTION */}
      <section id="explore" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-neutral-900">Trending Recipes</h2>
            <p className="text-gray-600 max-w-lg">
              Explore the most loved African recipes this week, handpicked from our community of passionate home cooks and chefs.
            </p>
          </div>
          <Link href="#" className="text-[#E73F1E] font-semibold flex items-center gap-2 hover:underline">
            View All <FaArrowRightLong />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recipe Card 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div className="relative h-64 bg-gray-200 w-full overflow-hidden">
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform">
                <FaUtensils size={48} />
              </div>
              <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-gray-400 hover:text-[#E73F1E] transition">
                <FaRegHeart />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[#E73F1E] text-xs font-bold tracking-widest uppercase">West Africa</p>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-neutral-900">Classic Jollof Rice</h3>
                <div className="flex items-center gap-1 bg-[#FFDD9C]/30 px-2 py-1 rounded-md">
                  <FaStar className="text-[#E73F1E] text-xs" />
                  <span className="text-sm font-bold text-neutral-800">4.9</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mt-2">A rich and savory tomato-based rice dish cooked with incredible spices and smoky flavor.</p>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div className="relative h-64 bg-gray-200 w-full overflow-hidden">
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform">
                 <FaUtensils size={48} />
              </div>
              <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-gray-400 hover:text-[#E73F1E] transition">
                <FaRegHeart />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[#E73F1E] text-xs font-bold tracking-widest uppercase">North Africa</p>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-neutral-900">Moroccan Chicken Tagine</h3>
                <div className="flex items-center gap-1 bg-[#FFDD9C]/30 px-2 py-1 rounded-md">
                  <FaStar className="text-[#E73F1E] text-xs" />
                  <span className="text-sm font-bold text-neutral-800">4.8</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mt-2">Slow-cooked savory stews made with sliced meat, poultry, or fish together with vegetables or fruit.</p>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div className="relative h-64 bg-gray-200 w-full overflow-hidden">
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform">
                 <FaUtensils size={48} />
              </div>
              <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-gray-400 hover:text-[#E73F1E] transition">
                <FaRegHeart />
              </button>
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[#E73F1E] text-xs font-bold tracking-widest uppercase">East Africa</p>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-neutral-900">Kenyan Nyama Choma</h3>
                <div className="flex items-center gap-1 bg-[#FFDD9C]/30 px-2 py-1 rounded-md">
                  <FaStar className="text-[#E73F1E] text-xs" />
                  <span className="text-sm font-bold text-neutral-800">4.9</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mt-2">Deliciously roasted meat, specifically goat meat, served with kachumbari salad and a side of ugali.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="bg-[#FFDD9C] py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <FaUsers className="text-[#E73F1E] text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Join the Kravings Community</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Have a family recipe passed down through generations? Share it with the world. Create your profile, upload your favorite African dishes, and connect with food lovers globally.
          </p>
          <button className="mt-8 px-8 py-4 bg-[#E73F1E] text-white rounded-full font-bold text-lg hover:bg-[#c93619] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-12 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-bold tracking-tight text-[#FFDD9C]">
              Kravings.
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed mt-2">
              The ultimate platform to discover, celebrate, and share the rich and diverse culinary heritage of the African continent.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">All Recipes</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Top Chefs</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Submit a Dish</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:text-left text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Kravings. All rights reserved.
        </div>
      </footer>
    </main>
  );
}