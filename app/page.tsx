import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaEarthAfrica, 
  FaUtensils, 
  FaUsers, 
  FaStar, 
  FaHeart, 
  FaClock, 
  FaMagnifyingGlass,
  FaChevronRight
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C",
};

// Featured Dishes Mock Data
const FEATURED_DISHES = [
  {
    id: "1",
    title: "Smoky Nigerian Jollof Rice",
    origin: "West Africa",
    time: "45 mins",
    rating: 4.9,
    likes: "2.4k",
    author: "Chef Amina",
  },
  {
    id: "2",
    title: "Ethiopian Doro Wat & Injera",
    origin: "East Africa",
    time: "60 mins",
    rating: 4.8,
    likes: "1.8k",
    author: "Yonas B.",
  },
  {
    id: "3",
    title: "South African Bobotie",
    origin: "Southern Africa",
    time: "50 mins",
    rating: 4.7,
    likes: "1.2k",
    author: "Grace M.",
  },
  {
    id: "4",
    title: "Egusi Soup & Pounded Yam",
    origin: "West Africa",
    time: "55 mins",
    rating: 4.9,
    likes: "3.1k",
    author: "Nkechi's Kitchen",
  },
];

// Features Section Data
const FEATURES = [
  {
    icon: FaEarthAfrica,
    title: "Pan-African Heritage",
    description: "Discover thousands of authentic recipes across North, South, East, West, and Central African culinary cultures.",
  },
  {
    icon: FaUsers,
    title: "Global Foodie Community",
    description: "Connect with passionate home cooks, professional chefs, and African food lovers from all around the world.",
  },
  {
    icon: FaUtensils,
    title: "Guided Cooking",
    description: "Access easy-to-follow instructions, video guides, and local ingredient substitution tips tailored for every kitchen.",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center items-center px-4">
          <blockquote className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto pt-20 space-y-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight leading-tight">
              Africa&apos;s Finest Dishes
            </h1>
            <p className="tracking-wider text-base md:text-lg text-center text-gray-200 leading-relaxed max-w-xl">
              Discover and share your dishes with the world on a platform built to connect a global 
              community of food lovers, allowing you to celebrate every unique recipe, exchange homemade 
              flavors, and unite over a shared passion for cooking.
            </p>
            <Link 
              href="#dishes" 
              className="bg-white text-black flex items-center w-fit p-2 rounded-full gap-2 px-4 shadow-xl hover:bg-gray-100 transition-colors"
            >
              <p className="font-medium text-sm md:text-base">See Our Dishes</p>
              <button 
                type="button"
                aria-label="See Our Dishes"
                className="text-white w-7 h-7 rounded-full flex items-center justify-center bg-[#E73F1E] shrink-0"
              >
                <FaArrowRightLong />
              </button>
            </Link>
          </blockquote>

          {/* Search Bar */}
          <div className="mt-12 w-11/12 md:w-2/3 lg:w-1/2 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-3 px-3 w-full text-gray-400">
              <FaMagnifyingGlass className="text-base text-gray-500" />
              <input 
                type="text" 
                placeholder="Search recipes (e.g. Jollof, Suya, Injera...)" 
                className="w-full bg-transparent text-slate-800 placeholder-gray-400 focus:outline-none text-sm md:text-base py-2"
              />
            </div>
            <button className="w-full sm:w-auto px-7 py-3 rounded-xl text-white font-bold text-sm bg-[#E73F1E] hover:bg-[#d23516] transition-colors shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-extrabold tracking-wider uppercase text-[#E73F1E]">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Food Lovers Choose Kravings</h2>
          <p className="text-gray-600">A dedicated home for rich culinary traditions, community recipe exchanges, and vibrant food culture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-[#FFDD9C] text-[#E73F1E]">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED DISHES SECTION ================= */}
      <section id="dishes" className="py-24 bg-amber-50/60 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs md:text-sm font-extrabold tracking-wider uppercase text-[#E73F1E]">
                Popular Dishes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-1">Explore Trending Recipes</h2>
            </div>
            <Link 
              href="#all-recipes" 
              className="flex items-center gap-2 font-bold text-sm text-[#E73F1E] hover:underline"
            >
              Explore All Recipes <FaChevronRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_DISHES.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 hover:shadow-xl transition-all group flex flex-col">
                <div className="relative h-48 w-full bg-slate-800 flex items-center justify-center text-slate-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/40 to-transparent z-10" />
                  <span className="z-10 text-xs text-slate-400 font-medium">[Dish Image Placeholder]</span>
                  
                  <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 text-slate-900 shadow-sm">
                    <FaStar className="text-amber-400" />
                    <span>{dish.rating}</span>
                  </div>
                  <span className="absolute bottom-3 left-3 z-20 text-white text-xs font-semibold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md">
                    {dish.origin}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-[#E73F1E] transition-colors leading-snug">
                      {dish.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">By {dish.author}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-slate-100 font-medium">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-gray-400" />
                      {dish.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaHeart className="text-red-500" />
                      {dish.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY STATS SECTION ================= */}
      <section id="community" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-[#FFDD9C]">10k+</p>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Shared Recipes</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-[#FFDD9C]">50+</p>
            <p className="text-xs md:text-sm text-gray-400 font-medium">African Regions</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-[#FFDD9C]">120k+</p>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Active Foodies</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-[#FFDD9C]">4.9 ★</p>
            <p className="text-xs md:text-sm text-gray-400 font-medium">Community Rating</p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section id="share" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col items-center space-y-6 bg-[#FFDD9C] shadow-lg">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 max-w-xl leading-tight">
            Have a secret African recipe to share?
          </h2>
          <p className="text-slate-700 max-w-md text-sm md:text-base leading-relaxed">
            Join thousands of home cooks across the globe sharing authentic African recipes, traditional secrets, and food culture.
          </p>
          <Link 
            href="#join" 
            className="px-8 py-4 rounded-full text-white font-bold text-base bg-[#E73F1E] hover:bg-[#d23516] shadow-xl hover:scale-105 transition-all"
          >
            Share Your Dish Now
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-[#E73F1E]">
              Kravings
            </span>
            <span className="text-xs text-gray-400">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href="#dishes" className="hover:text-slate-900 transition-colors">Recipes</Link>
            <Link href="#features" className="hover:text-slate-900 transition-colors">Features</Link>
            <Link href="#community" className="hover:text-slate-900 transition-colors">Community</Link>
            <Link href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}