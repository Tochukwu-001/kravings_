import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaGlobe, 
  FaUtensils, 
  FaUsers, 
  FaHeart, 
  FaBookOpen,
  FaQuoteLeft 
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

const STATS = [
  { label: "Authentic Recipes", value: "5,000+" },
  { label: "African Countries", value: "54" },
  { label: "Active Home Chefs", value: "120K+" },
  { label: "Global Community", value: "1M+" },
];

const VALUES = [
  {
    icon: FaBookOpen,
    title: "Preserving Culinary Heritage",
    description: "Every recipe carries a story. We archive traditional cooking methods and family secrets before they are lost to time."
  },
  {
    icon: FaGlobe,
    title: "Bridging the Diaspora",
    description: "Whether you are in Lagos, London, or Los Angeles, Kravings brings the taste of home straight to your kitchen."
  },
  {
    icon: FaUsers,
    title: "Empowering Home Cooks",
    description: "We give grandmothers, home chefs, and culinary enthusiasts a global stage to share their passion and talent."
  },
  {
    icon: FaHeart,
    title: "Unity Through Flavor",
    description: "Food is the ultimate universal language. We unite people across borders through shared appreciation for rich spices and dishes."
  }
];

export default function About() {
  return (
    <main className="min-h-dvh font-sans text-neutral-800 bg-white">
      
    

      {/* ABOUT HERO SECTION */}
      <section className="min-h-[80vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="min-h-[80vh] bg-black/70 text-white flex flex-col justify-center items-center px-6 pt-20">
          <blockquote className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-6 flex flex-col items-center">
            <span className="text-[#E73F1E] uppercase tracking-widest text-sm font-bold bg-[#FFDD9C]/20 px-4 py-1 rounded-full">
              Our Story & Mission
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
              Celebrating <span className="text-[#FFDD9C]">African</span> Culinary Excellence
            </h1>
            <p className="tracking-wider text-base md:text-lg text-center text-gray-200 leading-relaxed font-light">
              Kravings was born out of a deep passion to elevate African food culture globally. We are building the home for every recipe, story, and flavor that defines the continent.
            </p>
            <Link href="#our-story" className="bg-white text-black flex items-center w-fit py-2 px-3 rounded-full gap-3 hover:scale-105 transition-transform mt-4">
              <span className="pl-3 font-semibold">Explore Our Journey</span>
              <button className="text-white w-9 h-9 rounded-full flex items-center justify-center bg-[#E73F1E]">
                <FaArrowRightLong />
              </button>
            </Link>
          </blockquote>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section id="our-story" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[#E73F1E] font-bold tracking-widest uppercase text-sm">Where It All Began</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              From Local Kitchens to a Global Movement
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              For generations, Africa’s most cherished recipes existed only in hand-written notebooks or passed down orally from mother to child. Kravings was created to ensure these legendary flavors are never forgotten.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From the smoky aroma of West African Jollof to the fragrant spices of Ethiopian Berberé and North African Tagines, Kravings offers a platform where creators and food enthusiasts alike can connect, teach, and taste history.
            </p>

            <div className="p-6 bg-[#FFDD9C]/30 border-l-4 border-[#E73F1E] rounded-r-2xl space-y-3">
              <FaQuoteLeft className="text-[#E73F1E] text-2xl" />
              <p className="italic font-medium text-neutral-800">
                "We don't just share food recipes; we preserve memories, culture, and love cooked into every meal."
              </p>
              <p className="text-sm font-bold text-[#E73F1E]">— The Kravings Team</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#FFDD9C] rounded-3xl p-8 transform rotate-2">
              <div className="bg-neutral-900 rounded-2xl p-8 text-white space-y-6 -rotate-2 transform hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="w-12 h-12 bg-[#E73F1E] rounded-full flex items-center justify-center">
                  <FaUtensils className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#FFDD9C]">What Drives Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe African cuisine deserves equal representation on the world stage. By empowering home chefs to document their unique processes, Kravings makes authentic recipes accessible to anyone, anywhere.
                </p>
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Join the movement</span>
                  <span className="text-[#FFDD9C] font-bold">#KravingsAfrica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-neutral-900 text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#FFDD9C]">{stat.value}</h3>
              <p className="text-neutral-400 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-[#E73F1E] font-bold tracking-widest uppercase text-sm">Guided By Culture</p>
          <h2 className="text-4xl font-bold text-neutral-900">Our Core Pillars</h2>
          <p className="text-gray-600">The values that power our platform and community every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all group hover:-translate-y-2 border-t-4 border-t-[#E73F1E]"
              >
                <div className="w-14 h-14 bg-[#FFDD9C]/40 rounded-2xl flex items-center justify-center text-[#E73F1E] group-hover:bg-[#E73F1E] group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="bg-[#FFDD9C] py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <FaUsers className="text-[#E73F1E] text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Be Part of the Journey</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Whether you want to discover delicious meals or share your grandmother's secret stew recipe, Kravings welcome you open-armed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link 
              href="#" 
              className="px-8 py-4 bg-[#E73F1E] text-white rounded-full font-bold text-lg hover:bg-[#c93619] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Share Your First Recipe
            </Link>
            <Link 
              href="#" 
              className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors"
            >
              Explore Recipes
            </Link>
          </div>
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
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#FFDD9C] transition">About Us</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Privacy Policy</Link></li>
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