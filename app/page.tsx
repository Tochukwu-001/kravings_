import Image from "next/image";
import Link from "next/link";

import { FaArrowRight, FaBars, FaClock, FaGlobeAfrica, FaHeart, FaStar, FaUsers, FaUtensils } from "react-icons/fa";




const FEATURED_DISHES = [
  {
    id: 1,
    title: "Nigerian Jollof Rice",
    origin: "West Africa",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop",
    prepTime: "45 mins",
  },
  {
    id: 2,
    title: "South African Bobotie",
    origin: "South Africa",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    prepTime: "1 hr",
  },
  {
    id: 3,
    title: "Kenyan Nyama Choma",
    origin: "East Africa",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    prepTime: "30 mins",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      
      {/* NAVBAR & HERO SECTION CONTAINER */}
      <div className="relative min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        
        {/* OVERLAY */}
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-between">
          
          {/* NAVIGATION BAR */}
          
          {/* HERO SECTION */}
          <section className="flex-1 flex items-center justify-center px-4 py-12">
            <blockquote className="lg:w-1/2 mx-auto space-y-6 text-center border-none p-0 m-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFDD9C] text-[#E73F1E] font-semibold text-xs md:text-sm rounded-full uppercase tracking-widest">
                <FaGlobeAfrica /> Welcome to Kravings
              </span>

              <h1 className="md:text-6xl text-4xl font-extrabold tracking-tight leading-tight">
                Africa&apos;s Finest Dishes
              </h1>

              <p className="tracking-wider md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
                Discover and share your dishes with the world on a platform built to connect a global community of food lovers, allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.
              </p>

              <div className="pt-4">
                <Link 
                  href="#dishes" 
                  className="bg-white text-black inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-medium shadow-lg hover:bg-slate-100 transition-all group"
                >
                  <span>See Our Dishes</span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1" 
                    style={{ backgroundColor: "#E73F1E" }}
                  >
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </blockquote>
          </section>

          {/* Spacer for vertical balance */}
          <div className="py-4"></div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Why Kravings?</h2>
          <p className="text-slate-600">Bringing authentic African culinary heritage into kitchens worldwide.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-xl flex items-center justify-center text-xl mb-6">
              <FaUtensils />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
            <p className="text-slate-600 leading-relaxed">Access verified, traditional recipes shared directly by home cooks and experienced chefs across Africa.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-xl flex items-center justify-center text-xl mb-6">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-slate-600 leading-relaxed">Connect with fellow food enthusiasts, ask questions, leave reviews, and share your cooking journey.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-xl flex items-center justify-center text-xl mb-6">
              <FaHeart />
            </div>
            <h3 className="text-xl font-bold mb-2">Share Your Flavor</h3>
            <p className="text-slate-600 leading-relaxed">Got a secret family recipe? Publish it on Kravings and let the world experience your unique dishes.</p>
          </div>
        </div>
      </section>

      {/* DISHES SHOWCASE SECTION */}
      <section id="dishes" className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Explore Trending Recipes</h2>
              <p className="text-slate-600 mt-2">Discover popular dishes loved by our community</p>
            </div>
            <Link href="/recipes" className="text-[#E73F1E] font-semibold flex items-center gap-2 hover:underline">
              View All Recipes <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_DISHES.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={dish.image} 
                    alt={dish.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                    {dish.origin}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <FaClock className="text-xs" /> Prep: {dish.prepTime}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                      <FaStar />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E73F1E] transition-colors">
                    {dish.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="community" className="py-20 px-6 bg-[#E73F1E] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Have a secret recipe to share?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of creators who are preserving and celebrating African culinary culture.
          </p>
          <div className="pt-4">
            <Link 
              href="/signup" 
              className="bg-[#FFDD9C] text-slate-900 font-bold px-8 py-3.5 rounded-full hover:bg-white transition-colors inline-block"
            >
              Start Sharing Today
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}