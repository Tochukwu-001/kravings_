import Image from "next/image";
import Link from "next/link";
import { FaUtensils, FaGlobe, FaUsers, FaHeart, FaAward, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-dvh flex flex-col font-sans bg-white text-gray-900">
    

      {/* HERO SECTION FOR ABOUT */}
      <section className="relative min-h-[60vh] bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop')] bg-no-repeat bg-center bg-cover flex flex-col">
        <div className="flex-1 flex flex-col justify-center min-h-[60vh] bg-black/70 text-white px-4 pt-20">
          <div className="lg:w-3/5 mx-auto space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Our Story & <span className="text-[#E73F1E]">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Connecting food lovers worldwide through the rich, diverse, and vibrant culinary traditions of Africa.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFDD9C] text-[#E73F1E] font-bold text-sm">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Celebrating Africa's Culinary Heritage One Recipe at a Time
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Kravings was born out of a deep passion for African cuisine and a desire to bring homemade, authentic flavors to a global stage. Whether it's the smoky depths of West African Jollof, the rich spices of North African Tagines, or the hearty comfort foods of Southern Africa, we believe every recipe tells a story of culture, family, and heritage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform empowers home cooks, food bloggers, and culinary enthusiasts to preserve their traditions, share secret techniques, and connect with a community that shares their cravings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-3xl bg-[url('https://images.unsplash.com/photo-1541832676-9b763b022144?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-md"></div>
              <div className="h-64 rounded-3xl bg-[url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-md"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-3xl bg-[url('https://images.unsplash.com/photo-1598511796318-7b82ef4b4700?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-md"></div>
              <div className="h-48 rounded-3xl bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Drives Us</h2>
            <p className="text-gray-600">The core values that shape our platform and community interactions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDD9C] flex items-center justify-center text-[#E73F1E] text-2xl font-bold">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-bold">Authenticity First</h3>
              <p className="text-gray-600">We respect traditional roots. Every recipe celebrates true regional ingredients and genuine cooking methods.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDD9C] flex items-center justify-center text-[#E73F1E] text-2xl font-bold">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold">Inclusive Community</h3>
              <p className="text-gray-600">A welcoming space for everyone—from seasoned kitchen masters to absolute beginners exploring food for the first time.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDD9C] flex items-center justify-center text-[#E73F1E] text-2xl font-bold">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold">Passion for Flavor</h3>
              <p className="text-gray-600">We are fueled by a deep love for bold spices, aromatic herbs, and the joy of sharing a warm meal with loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#E73F1E] text-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-ext5xl font-extrabold">5,000+</h4>
            <p className="text-white/80 font-medium">Authentic Recipes</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-extrabold">54+</h4>
            <p className="text-white/80 font-medium">African Countries</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-extrabold">25K+</h4>
            <p className="text-white/80 font-medium">Active Food Lovers</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-extrabold">120K+</h4>
            <p className="text-white/80 font-medium">Dishes Shared</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Share Your Kitchen Secrets?</h2>
          <p className="text-gray-600 text-lg">Join thousands of others celebrating Africa's finest dishes today.</p>
          <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-[#E73F1E] hover:opacity-90 transition shadow-lg">
            Get Started Now <FaArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}