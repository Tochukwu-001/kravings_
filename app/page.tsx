import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaUtensils, 
  FaHeart, 
  FaUsers, 
  FaFire, 
  FaStar, 
  FaClock 
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-900 ">
      {/* HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="min-h-dvh bg-black/60 text-white flex items-center justify-center px-4 py-16">
          <blockquote className="lg:w-2/3 max-w-4xl mx-auto space-y-6 text-center">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#FFDD9C]">
              Welcome to Kravings
            </span>
            <h1 className="md:text-7xl text-4xl font-extrabold tracking-tight leading-tight">
              Africa&apos;s Finest Dishes
            </h1>
            <p className="tracking-wide md:text-lg text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
              Discover and share your dishes with the world on a platform built to connect a global community of food lovers,
              allowing you to celebrate every unique recipe, exchange homemade flavors, and unite over a shared passion for cooking.
            </p>

            <div className="pt-6">
              <Link 
                href="/dishes" 
                className="bg-white text-black flex items-center w-fit mx-auto px-6 py-3 rounded-full gap-3 hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium"
              >
                <span>See Our Dishes</span>
                <span className="text-white w-8 h-8 rounded-full flex items-center justify-center text-sm bg-[#E73F1E]">
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </blockquote>
        </div>
      </section>

      {/* REGIONAL CATEGORIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#E73F1E]">
              Explore Cuisines
            </h2>
            <p className="text-3xl md:text-4xl font-bold mt-2">Taste across the Continent</p>
          </div>
          <Link href="/categories" className="mt-4 md:mt-0 font-semibold flex items-center gap-2 hover:underline text-[#E73F1E]">
            View all regions <FaArrowRightLong />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "West Africa", count: "120+ Recipes", img: "/west-africa.jpg", desc: "Jollof, Egusi & Suya" },
            { name: "East Africa", count: "85+ Recipes", img: "/east-africa.jpg", desc: "Injera, Nyama Choma" },
            { name: "North Africa", count: "90+ Recipes", img: "/north-africa.jpg", desc: "Tagine, Couscous" },
            { name: "South & Central", count: "75+ Recipes", img: "/south-africa.jpg", desc: "Bobotie, Bunny Chow" },
          ].map((cat, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-2xl overflow-hidden h-64 bg-stone-900 cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <div className="absolute inset-0 bg-stone-800 group-hover:scale-105 transition-transform duration-500">
                <Image src={cat.img} alt={cat.name} fill className="object-cover opacity-80" />
              </div>
              <div className="absolute bottom-0 z-20 p-5 text-white">
                <span className="text-xs px-2 py-1 rounded bg-white/20 backdrop-blur-md mb-2 inline-block">
                  {cat.count}
                </span>
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <p className="text-xs text-stone-300 mt-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING DISHES */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#E73F1E]">
              <FaFire /> Trending Dishes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Popular Recipes Right Now</h2>
            <p className="text-stone-600 mt-3">Tried, tested, and loved by foodies around the world.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Authentic Nigerian Jollof Rice", origin: "Nigeria", time: "45 mins", rating: "4.9", image: "/jollof.jpg" },
              { title: "Moroccan Lamb Tagine", origin: "Morocco", time: "1 hr 30 mins", rating: "4.8", image: "/tagine.jpg" },
              { title: "South African Braai Ribs", origin: "South Africa", time: "50 mins", rating: "4.9", image: "/braai.jpg" }
            ].map((dish, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200/60">
                <div className="h-56 relative bg-stone-200">
                  <Image src={dish.image} alt={dish.title} fill className="object-cover" />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaStar className="text-amber-400" /> {dish.rating}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-xs text-stone-500 mb-2">
                    <span className="font-semibold uppercase text-[#E73F1E]">{dish.origin}</span>
                    <span className="flex items-center gap-1"><FaClock /> {dish.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 line-clamp-1">{dish.title}</h3>
                  <Link 
                    href={`/dishes/${i}`} 
                    className="w-full py-2.5 rounded-xl border border-stone-300 flex items-center justify-center gap-2 font-medium hover:bg-stone-50 transition-colors text-sm"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KRAVINGS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-amber-50/50 space-y-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl text-white bg-[#E73F1E]">
              <FaUtensils />
            </div>
            <h3 className="text-xl font-bold">Authentic Recipes</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Step-by-step guides straight from home cooks and experienced chefs across Africa.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-amber-50/50 space-y-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl text-black bg-[#FFDD9C]">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold">Global Community</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Connect with African cuisine enthusiasts worldwide. Share tips, tweaks, and traditions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-amber-50/50 space-y-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto text-2xl text-white bg-[#E73F1E]">
              <FaHeart />
            </div>
            <h3 className="text-xl font-bold">Save Your Favorites</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Bookmark recipes, create personalized meal plans, and share your own kitchen creations.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden bg-[#E73F1E]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold">Have a special African recipe to share?</h2>
            <p className="text-white/90">
              Join thousands of creators and food lovers showcasing their heritage through cooking.
            </p>
            <Link 
              href="/share" 
              className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-stone-100 transition-colors shadow-lg"
            >
              Share Your Dish Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-black tracking-wider text-white">KRAVINGS</span>
            <p className="text-xs text-stone-500 mt-1">Celebrating African Culinary Culture.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-white transition">Dishes</Link>
            <Link href="#" className="hover:text-white transition">Chefs</Link>
            <Link href="#" className="hover:text-white transition">About Us</Link>
            <Link href="#" className="hover:text-white transition">Contact</Link>
          </div>
          <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}