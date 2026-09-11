import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaEarthAfrica, 
  FaHeart, 
  FaBowlFood, 
  FaUsersViewfinder 
} from "react-icons/fa6";

const STATS = [
  { value: "10K+", label: "Authentic Recipes" },
  { value: "54", label: "Countries Represented" },
  { value: "100K+", label: "Food Enthusiasts" },
  { value: "4.9 ★", label: "Community Rating" },
];

const VALUES = [
  {
    icon: FaBowlFood,
    title: "Culinary Heritage",
    description: "We preserve generational recipes, ensuring traditional African cooking methods and rich stories are passed down intact.",
  },
  {
    icon: FaEarthAfrica,
    title: "Global Connection",
    description: "Food transcends borders. We bring together Africans in the diaspora and global foodies through shared kitchen experiences.",
  },
  {
    icon: FaHeart,
    title: "Community First",
    description: "Every dish tells a story. We champion local home cooks, empowering everyone to share their unique kitchen creations.",
  },
];

const TEAM = [
  {
    name: "Amina Bello",
    role: "Founder & Head of Culinary",
    location: "Lagos, Nigeria",
    bio: "Passionate about documenting undocumented home recipes across West Africa.",
  },
  {
    name: "Kofi Mensah",
    role: "Community Lead",
    location: "Accra, Ghana",
    bio: "Connecting food lovers and organizing virtual masterclasses with local chefs.",
  },
  {
    name: "Zewde Haile",
    role: "Product Designer",
    location: "Addis Ababa, Ethiopia",
    bio: "Crafting intuitive digital experiences that celebrate food and culture.",
  },
];

export default function About() {
  return (
    <main className="min-h-dvh flex flex-col bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-25" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E73F1E] text-white">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Preserving <span className="text-[#FFDD9C]">African Flavors</span> for the World
          </h1>
          <p className="text-slate-300 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Kravings was born out of a passion to showcase the depth, diversity, and richness of African cuisine—connecting food lovers across the continent and beyond.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E73F1E]">Why We Exist</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Uniting Food Enthusiasts Through Authentic Dishes
            </h2>
            <p className="text-slate-600 leading-relaxed">
              African cuisine is one of the most vibrant yet underrepresented culinary traditions on the global digital stage. At Kravings, we believe that every recipe holds history, memory, and love.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our platform allows home cooks, seasoned chefs, and curious foodies to share authentic step-by-step guides, exchange secret spice blends, and celebrate heritage through cooking.
            </p>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-[#E73F1E]">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 px-6 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Drives Us</h2>
            <p className="text-slate-600 mt-2 max-w-xl mx-auto">
              The core principles behind our platform and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-[#FFDD9C] text-[#E73F1E]">
                  <val.icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet The Team */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E73F1E]">People Behind Kravings</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">Meet Our Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 flex items-center justify-center text-slate-400">
                <FaUsersViewfinder className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs font-semibold text-[#E73F1E] mt-0.5">{member.role}</p>
              <p className="text-xs text-slate-400 mt-1">{member.location}</p>
              <p className="text-slate-600 text-xs mt-4 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 px-6 text-white text-center bg-[#E73F1E] mt-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Join the Community?</h2>
          <p className="text-white/90 leading-relaxed">
            Whether you want to discover authentic recipes or share your family's culinary secrets, there is a place for you on Kravings.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform text-sm uppercase tracking-wide">
            Get Started Today <FaArrowRightLong className="text-[#E73F1E]" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white tracking-wider">
            Kravings<span className="text-[#E73F1E]">.</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Kravings. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}