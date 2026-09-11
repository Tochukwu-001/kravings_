import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaStar, 
  FaHeart, 
  FaUtensils, 
  FaEarthAfrica, 
  FaUsers, 
  FaBookOpen,
  FaClock,
  FaFire
} from "react-icons/fa6";

const featuredDishes = [
  {
    id: 1,
    name: "Smokey Nigerian Jollof",
    origin: "Nigeria",
    time: "45 mins",
    rating: "4.9",
    likes: "1.2k",
    image: "/dishes/jollof.jpg",
    chef: "Chef Amara"
  },
  {
    id: 2,
    name: "South African Bobotie",
    origin: "South Africa",
    time: "60 mins",
    rating: "4.8",
    likes: "850",
    image: "/dishes/bobotie.jpg",
    chef: "Zola N."
  },
  {
    id: 3,
    name: "Moroccan Lamb Tagine",
    origin: "Morocco",
    time: "90 mins",
    rating: "5.0",
    likes: "2.1k",
    image: "/dishes/tagine.jpg",
    chef: "Tariq K."
  },
  {
    id: 4,
    name: "Ghanaian Waakye Special",
    origin: "Ghana",
    time: "50 mins",
    rating: "4.9",
    likes: "980",
    image: "/dishes/waakye.jpg",
    chef: "Kofi B."
  }
];

const platformFeatures = [
  {
    icon: <FaEarthAfrica className="text-3xl text-[#E73F1E]" />,
    title: "Authentic Recipes",
    description: "Explore thousands of verified, traditional and fusion recipes across the African continent."
  },
  {
    icon: <FaUsers className="text-3xl text-[#E73F1E]" />,
    title: "Global Community",
    description: "Connect with passionate home cooks and professional chefs sharing regional cooking secrets."
  },
  {
    icon: <FaBookOpen className="text-3xl text-[#E73F1E]" />,
    title: "Step-by-Step Guides",
    description: "Follow detailed instructions, ingredient substitutes, and video guides tailored for all skill levels."
  }
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800 font-sans">
      
      {/* NAVBAR */}


      {/* HERO SECTION */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative flex items-center">
        <div className="min-h-dvh w-full bg-black/60 text-white flex items-center justify-center pt-1">
          <blockquote className="lg:w-1/2 mx-auto space-y-6 text-center px-3 md:px-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 mx-auto">
              <FaFire className="text-[#E73F1E]" />
              <span>Taste The Culture</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Africa&apos;s Finest Dishes
            </h1>
            
            <p className="tracking-wider md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Discover and share your dishes with the world on a platform 
              built to connect a global community of food lovers, allowing
              you to celebrate every unique recipe, exchange homemade flavors,
              and unite over a shared passion for cooking.
            </p>

            <div className="pt-6">
              <Link 
                href="#dishes" 
                className="bg-white text-slate-900 font-semibold flex items-center mx-auto w-fit px-6 py-2.5 rounded-full gap-3 transition-transform hover:scale-105 shadow-lg group"
              >
                <span>See Our Dishes</span>
                <span className="text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 bg-[#E73F1E]">
                  <FaArrowRight className="text-xs" />
                </span>
              </Link>
            </div>
          </blockquote>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#E73F1E]">1,500+</p>
            <p className="text-sm text-slate-500 font-medium mt-1">Authentic Recipes</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#E73F1E]">50k+</p>
            <p className="text-sm text-slate-500 font-medium mt-1">Active Foodies</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#E73F1E]">35+</p>
            <p className="text-sm text-slate-500 font-medium mt-1">Countries Represented</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#E73F1E]">4.9 ★</p>
            <p className="text-sm text-slate-500 font-medium mt-1">Community Rating</p>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section id="dishes" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-slate-800 bg-[#FFDD9C]">
              Explore Taste
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-900">
              Trending African Delicacies
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-2 md:mt-0 text-sm">
            Handpicked recipes loved by our community this week. From street food to holiday feasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-xs font-semibold">Image: {dish.name}</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1 text-xs font-bold flex items-center gap-1 shadow-sm">
                  <FaStar className="text-amber-400" />
                  <span>{dish.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 text-white rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {dish.origin}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#E73F1E] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">By {dish.chef}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 mt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-slate-400" />
                    {dish.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-red-500" />
                    {dish.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/recipes" 
            className="inline-flex items-center gap-2 font-semibold text-sm border-2 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all border-[#E73F1E] text-[#E73F1E]"
          >
            <span>Explore All Recipes</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

      {/* WHY KRAVINGS */}
      <section id="features" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Food Lovers Choose Kravings
            </h2>
            <p className="text-slate-600 mt-3 text-sm md:text-base">
              We bridge cultural divides through culinary storytelling, making authentic recipes accessible to everyone everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#FFDD9C]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-slate-800 bg-[#FFDD9C]">
            Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-900">
            How Kravings Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg bg-[#E73F1E]">
              1
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Find a Recipe</h3>
            <p className="text-slate-600 text-sm">Search by ingredients, country of origin, prep time, or dietary preferences.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg bg-[#E73F1E]">
              2
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Cook & Snap</h3>
            <p className="text-slate-600 text-sm">Follow step-by-step guides, prepare your meal, and snap photos of your dish.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg bg-[#E73F1E]">
              3
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Share & Connect</h3>
            <p className="text-slate-600 text-sm">Post your creations, earn badges, and exchange tips with cooks worldwide.</p>
          </div>
        </div>
      </section>

      {/* CHEF / COMMUNITY BANNER */}
      <section id="community" className="mx-6 max-w-7xl lg:mx-auto my-12 rounded-3xl bg-slate-900 text-white overflow-hidden relative">
        <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Have a secret family recipe?
            </h2>
            <p className="text-slate-300 mt-4 text-sm md:text-base leading-relaxed">
              Share your homemade dishes with thousands of food lovers. Inspire others, get feedback, and keep African culinary traditions alive.
            </p>
          </div>
          <div>
            <Link 
              href="/share-recipe" 
              className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-amber-100 transition-all shadow-xl"
            >
              <span>Publish Your Dish</span>
              <FaArrowRight className="text-[#E73F1E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      
    </main>
  );
}