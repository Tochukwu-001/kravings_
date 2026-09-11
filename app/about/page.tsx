import Image from "next/image";
import Link from "next/link";
import { FaEarthAfrica, FaHeart, FaUsers, FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gray-900 text-white py-24 px-5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-[#E73F1E] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-[#FFDD9C] rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-bold mb-6">
            More than just recipes. <br />
            <span className="text-[#FFDD9C]">It's our heritage.</span>
          </h1>
          <p className="md:text-xl text-lg text-gray-300 leading-relaxed">
            Kravings is a global community dedicated to documenting, sharing, and 
            celebrating the rich, diverse, and deeply flavorful culinary traditions of Africa.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-20 px-5 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              How <span className="text-[#E73F1E]">Kravings</span> Started
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We realized that while the world loves good food, the authentic recipes 
              of African mothers, grandmothers, and local chefs were often hidden in 
              kitchens rather than shared with the world. Kravings was born out of a 
              simple desire: to put Africa's finest dishes on the global map.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's the smoky aroma of Nigerian Party Jollof, the comforting warmth 
              of South African Chakalaka, or the spicy kick of Senegalese Yassa, we built 
              this platform to ensure these homemade flavors are never lost, but celebrated 
              and passed down.
            </p>
          </div>
          <div className="relative h-80 md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            {/* Using a placeholder div for the image. Replace with Next/Image when you have assets */}
            <div className="absolute inset-0 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-20 px-5 md:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Pillars</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Everything we do at Kravings is driven by our love for food and our dedication to the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#FFDD9C]/20 transition-colors border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center mb-6 text-2xl">
                <FaEarthAfrica />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We prioritize genuine, traditional recipes straight from the source. 
                No watered-down flavors, just the real deal.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#FFDD9C]/20 transition-colors border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center mb-6 text-2xl">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                Food brings people together. We are building a global family of home cooks, 
                chefs, and food lovers who learn from one another.
              </p>
            </div>
            {/* Value 3 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#FFDD9C]/20 transition-colors border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center mb-6 text-2xl">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Preservation</h3>
              <p className="text-gray-600">
                By documenting these recipes, we are preserving African culture and history 
                for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM / COMMUNITY HIGHLIGHT */}
      <section className="py-20 px-5 md:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Built for You, By You</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
          Kravings isn't just run by a small team; it is powered by thousands of contributors 
          across the continent and the diaspora. Every recipe you see is a piece of someone's 
          home shared with you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-700 border border-gray-200">500+ Recipes</div>
          <div className="bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-700 border border-gray-200">50+ African Countries</div>
          <div className="bg-gray-100 px-6 py-3 rounded-full font-semibold text-gray-700 border border-gray-200">10k+ Community Members</div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 px-5 bg-[#E73F1E] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Have a family recipe to share?</h2>
          <p className="text-[#FFDD9C] text-lg md:text-xl">
            Don't let that secret spice blend stay hidden. Join Kravings today and share your kitchen magic with the world.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-[#E73F1E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Join the Community <FaArrowRightLong />
          </Link>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-2xl font-bold tracking-widest">KRAVINGS</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/recipes" className="hover:text-white transition-colors">Recipes</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
        
    
