import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaEarthAfrica, 
  FaUsers, 
  FaHeart, 
  FaLeaf,
  FaBowlFood
} from "react-icons/fa6";

// Reusing the theme colors for reference if needed
export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C",
};

// Core Values Data
const CORE_VALUES = [
  {
    icon: FaHeart,
    title: "Authenticity",
    description: "We believe in preserving the traditional methods, ingredients, and stories that make African cuisine so deeply special.",
  },
  {
    icon: FaUsers,
    title: "Community First",
    description: "Food tastes better when shared. We are building a global village of home cooks, chefs, and curious foodies.",
  },
  {
    icon: FaEarthAfrica,
    title: "Cultural Heritage",
    description: "From the bustling markets of Lagos to the spice routes of Marrakech, we celebrate every region's unique culinary identity.",
  },
  {
    icon: FaLeaf,
    title: "Fresh & Sustainable",
    description: "We encourage the use of fresh, local ingredients and offer substitution guides to make African cooking accessible anywhere.",
  },
];

export default function About() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#E73F1E] blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#FFDD9C] blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm font-extrabold tracking-wider uppercase text-[#FFDD9C]">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Connecting the World Through <span className="text-[#E73F1E]">African Flavors</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Kravings is more than just a recipe platform. We are a cultural bridge, 
            a digital kitchen, and a global community dedicated to celebrating the 
            richness of African gastronomy.
          </p>
        </div>
      </section>

      {/* ================= OUR MISSION SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Collage Placeholder */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <div className="bg-slate-200 rounded-3xl h-48 sm:h-64 flex items-center justify-center text-slate-400 font-medium shadow-sm border border-slate-100">
                [Cooking Image 1]
              </div>
              <div className="bg-amber-100/60 rounded-3xl h-32 sm:h-48 flex items-center justify-center text-amber-600/50 font-medium shadow-sm border border-amber-200/50">
                [Spices Image]
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#FFDD9C] rounded-3xl h-32 sm:h-48 flex items-center justify-center text-amber-700/50 font-medium shadow-sm border border-[#FFDD9C]/50">
                [Community Image]
              </div>
              <div className="bg-slate-800 rounded-3xl h-48 sm:h-64 flex items-center justify-center text-slate-500 font-medium shadow-sm">
                [Plated Dish Image]
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-xs md:text-sm font-extrabold tracking-wider uppercase text-[#E73F1E]">
              The Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
              Bringing generations of family secrets to your kitchen table.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For centuries, African recipes have been passed down orally—shared in bustling 
                kitchens, over open fires, and during festive gatherings. Kravings was born out 
                of a desire to preserve these stories and make them accessible to everyone, no 
                matter where they are in the world.
              </p>
              <p>
                Whether you are a diaspora child looking for a taste of home, a culinary explorer 
                wanting to try your first Egusi soup, or a master chef sharing your twist on Bobotie, 
                Kravings is your home.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 inline-flex">
                <div className="w-12 h-12 bg-amber-50 text-[#E73F1E] rounded-full flex items-center justify-center text-xl shrink-0">
                  <FaBowlFood />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Over 10,000 Recipes</p>
                  <p className="text-xs text-gray-500">Curated by our amazing community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="py-24 bg-amber-50/60 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs md:text-sm font-extrabold tracking-wider uppercase text-[#E73F1E]">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-gray-600">
              The principles that guide our community and everything we build at Kravings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 bg-slate-50 text-slate-400 group-hover:bg-[#FFDD9C] group-hover:text-[#E73F1E] transition-colors">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col items-center space-y-6 bg-slate-900 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-black text-white max-w-2xl leading-tight relative z-10">
            Ready to start your culinary journey?
          </h2>
          <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed relative z-10">
            Join thousands of food lovers today. Discover new recipes, share your own, and celebrate African culture with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
            <Link 
              href="/signup" 
              className="px-8 py-4 rounded-full text-white font-bold text-base bg-[#E73F1E] hover:bg-[#d23516] shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Join the Community <FaArrowRightLong />
            </Link>
            <Link 
              href="/recipes" 
              className="px-8 py-4 rounded-full text-slate-900 font-bold text-base bg-[#FFDD9C] hover:bg-[#ffcf73] shadow-xl hover:scale-105 transition-all flex items-center justify-center"
            >
              Explore Recipes
            </Link>
          </div>
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
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/recipes" className="hover:text-slate-900 transition-colors">Recipes</Link>
            <Link href="/community" className="hover:text-slate-900 transition-colors">Community</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}