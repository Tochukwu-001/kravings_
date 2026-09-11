import Image from "next/image";
import Link from "next/link";
import { FaGlobeAfrica } from "react-icons/fa";
import { 
  FaArrowRightLong, 
  FaUtensils, 
  FaHeart, 
  FaUsers, 
  FaBookOpen, 
  FaAward 
} from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-900 font-sans">
      {/* 1. HERO BANNER */}
      <section className="relative bg-stone-900 text-white py-24 px-6 md:py-32 overflow-hidden">
        {/* Background Overlay Graphic */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10 bg-repeat" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E73F1E]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FFDD9C]/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[#FFDD9C]">
            Our Story & Vision
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Connecting the World Through <span className="text-[#E73F1E]">African Flavors</span>
          </h1>
          <p className="text-stone-300 md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Kravings was born out of a desire to preserve, celebrate, and share the rich, vibrant, and diverse culinary heritage of Africa with food lovers everywhere.
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION / THE STORY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest text-[#E73F1E]">
              Why We Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              More Than Just Food — It&apos;s Culture, Community & Tradition
            </h2>
            <p className="text-stone-600 leading-relaxed">
              African cuisine is as vast and varied as the continent itself. From the smoky aromatic Jollof of West Africa to the rich slow-cooked Tagines of the North, and the spicy stews of East and Central Africa, every dish carries a story of family, history, and home.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We noticed that many traditional recipes were passed down purely through word of mouth, often missing from mainstream recipe platforms. <strong className="text-stone-900 font-semibold">Kravings</strong> was created to give home cooks, professional chefs, and culinary enthusiasts a dedicated home to document and share these authentic dishes.
            </p>
            <div className="pt-2">
              <Link 
                href="/dishes" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#E73F1E] text-white font-medium hover:bg-[#d03517] transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Our Recipes</span>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/about-cooking.jpg" 
                alt="African cooking experience" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFDD9C] flex items-center justify-center text-black text-xl flex-shrink-0">
                <FaGlobeAfrica />
              </div>
              <div>
                <p className="font-bold text-lg text-stone-900">50+ Regions</p>
                <p className="text-xs text-stone-500">Recipes spanning across the entire continent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT NUMBERS */}
      <section className="bg-stone-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-extrabold text-[#FFDD9C]">1,200+</p>
            <p className="text-xs md:text-sm text-stone-400 font-medium uppercase tracking-wider">Authentic Recipes</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-extrabold text-[#E73F1E]">54</p>
            <p className="text-xs md:text-sm text-stone-400 font-medium uppercase tracking-wider">Countries Represented</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-extrabold text-[#FFDD9C]">85k+</p>
            <p className="text-xs md:text-sm text-stone-400 font-medium uppercase tracking-wider">Active Food Lovers</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-extrabold text-[#E73F1E]">350+</p>
            <p className="text-xs md:text-sm text-stone-400 font-medium uppercase tracking-wider">Featured Creators</p>
          </div>
        </div>
      </section>

      {/* 4. OUR CORE VALUES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold uppercase tracking-widest text-[#E73F1E]">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Guided by Culture & Taste</h2>
          <p className="text-stone-600">The core principles that power our global recipe platform every day.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] flex items-center justify-center text-2xl font-bold">
              <FaUtensils />
            </div>
            <h3 className="text-xl font-bold">Authenticity First</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We champion true homemade flavors, preserving traditional cooking methods and ingredients that define heritage cooking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFDD9C] text-black flex items-center justify-center text-2xl font-bold">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold">Global Inclusivity</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Whether you are a seasoned African grandmother or a curious home cook in Tokyo, Kravings is open to anyone with a love for good food.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] flex items-center justify-center text-2xl font-bold">
              <FaBookOpen />
            </div>
            <h3 className="text-xl font-bold">Cultural Preservation</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every shared recipe builds a digital archive of culinary knowledge, making sure generations to come won&apos;t lose their roots.
            </p>
          </div>
        </div>
      </section>

      {/* 5. JOIN THE MOVEMENT CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl p-10 md:p-16 text-black text-center relative overflow-hidden bg-[#FFDD9C]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block p-3 rounded-full bg-white/60 text-xl text-[#E73F1E]">
              <FaHeart />
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900">
              Be Part of the Kravings Family
            </h2>
            <p className="text-stone-800 font-medium">
              Have a family recipe passed down through generations? Share it with our community today and inspire food lovers around the world.
            </p>
            <div className="pt-2">
              <Link 
                href="/share" 
                className="inline-block bg-[#E73F1E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#d03517] transition-all shadow-md"
              >
                Submit Your Recipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}