import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
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
=======
import { 
  FaHeart, 
  FaGlobe, 
  FaBowlFood 
} from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh flex flex-col font-sans bg-gray-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="md:text-6xl text-4xl font-bold leading-tight">
            Our Mission to Share <br />
            <span className="text-[#FFDD9C]">African Flavors</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Kravings is more than just a recipe platform. It’s a global movement celebrating the rich, diverse, and vibrant culinary heritage of the African continent.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">The Story Behind Kravings</h2>
            <div className="w-20 h-1 bg-[#E73F1E] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We started Kravings with a simple realization: the world needed to experience the true depth of African cuisine. From the spicy stews of West Africa to the aromatic tagines of the North, our food tells a story of culture, history, and community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our platform was built to give home cooks, professional chefs, and food enthusiasts a dedicated space to document their family recipes, exchange techniques, and unite over a shared passion for cooking. Whether you're miles away from home or simply curious about new flavors, Kravings is your kitchen away from home.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
              [About Us Image / Kitchen Scene]
>>>>>>> db1e7335a4d1c9dc34cf296db9a2059fa4a593dd
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Core Values */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do and build for our community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-white bg-[#E73F1E] rotate-3">
                <FaBowlFood className="-rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize genuine, homemade recipes passed down through generations. We want the real ingredients, the real methods, and the real stories.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-gray-900 bg-[#FFDD9C] -rotate-3">
                <FaHeart className="rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                Food tastes better when shared. We foster a positive, supportive, and engaging environment where every cook feels valued and celebrated.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 text-3xl text-white bg-[#E73F1E] rotate-3">
                <FaGlobe className="-rotate-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between continents, bringing the diaspora closer to home and introducing the rest of the world to the magic of African dining.
              </p>
>>>>>>> db1e7335a4d1c9dc34cf296db9a2059fa4a593dd
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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

=======
      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">Join the Kravings Family</h2>
            <p className="mb-10 text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you're here to discover your next favorite meal or share a secret family recipe, there's a place for you at our table.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform bg-[#E73F1E] text-white">
                Create an Account
              </Link>
              <Link href="/recipes" className="px-8 py-4 rounded-full font-bold border border-gray-500 hover:border-white text-white transition-all">
                Explore Recipes
              </Link>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#E73F1E] opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#FFDD9C] opacity-20 blur-3xl"></div>
        </div>
      </section>
>>>>>>> db1e7335a4d1c9dc34cf296db9a2059fa4a593dd
    </main>
  );
}