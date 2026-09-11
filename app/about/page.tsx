import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";
import { 
  FaEarthAfrica, 
  FaUtensils, 
  FaHeart, 
  FaUsers, 
  FaArrowRightLong, 
  FaQuoteLeft 
} from "react-icons/fa6";

export default function About() {
  const stats = [
    { number: "50+", label: "African Nations Represented" },
    { number: "10K+", label: "Authentic Recipes Shared" },
    { number: "100K+", label: "Active Food Lovers" },
    { number: "1M+", label: "Monthly Recipe Views" },
  ];

  const values = [
    {
      icon: <FaEarthAfrica size={28} />,
      title: "Cultural Preservation",
      description: "We document and safeguard centuries of culinary tradition, ensuring ancestral recipes and stories are preserved for future generations."
    },
    {
      icon: <FaUsers size={28} />,
      title: "Community First",
      description: "Kravings is built by home cooks, mothers, grandmothers, and passionate foodies who share their kitchen secrets with the world."
    },
    {
      icon: <FaUtensils size={28} />,
      title: "Authenticity & Flavor",
      description: "We celebrate true African cooking—from the rich palm oil stews of West Africa to the aromatic spices of North and East Africa."
    },
    {
      icon: <FaHeart size={28} />,
      title: "Uniting Through Food",
      description: "Food is the ultimate universal language. We break barriers and bring people together around shared tables and homemade meals."
    }
  ];

  const team = [
    {
      name: "Amina Okonkwo",
      role: "Founder & Executive Chef",
      image: "/team-1.jpg",
      bio: "Passionate about elevating West African culinary arts to global acclaim."
    },
    {
      name: "Kwame Mensah",
      role: "Head of Community",
      image: "/team-2.jpg",
      bio: "Connecting home cooks across 30+ countries to share their local heritage."
    },
    {
      name: "Tariq El-Mansouri",
      role: "Culinary Historian",
      image: "/team-3.jpg",
      bio: "Archiving native spices, traditional cooking techniques, and regional recipes."
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-neutral-950 text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* Subtle background glow accent */}
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" 
          style={{ backgroundColor: Theme.primaryColor }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span 
            className="text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20 inline-block"
            style={{ color: Theme.secondaryCOlor }}
          >
            Our Story & Mission
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Connecting the World to <br />
            <span style={{ color: Theme.primaryColor }}>Africa's Rich Flavors</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Kravings was born out of a simple desire: to create a dedicated home for the vibrant, diverse, and mouthwatering culinary traditions across the African continent.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl md:text-5xl font-black" style={{ color: Theme.primaryColor }}>
                  {stat.number}
                </div>
                <p className="text-sm md:text-base font-medium text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / ORIGIN SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative">
            <div className="relative h-96 md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-200">
              {/* Fallback image container - replace src with your actual asset */}
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                [Image: African Feast & Cooking]
              </div>
            </div>
            
            {/* Floating Highlight Card */}
            <div 
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block"
              style={{ backgroundColor: Theme.secondaryCOlor }}
            >
              <FaQuoteLeft size={24} className="mb-2 text-neutral-800 opacity-60" />
              <p className="text-sm font-semibold text-neutral-900 leading-snug">
                "Every recipe carries a story of family, culture, and celebration."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-bold uppercase tracking-wider text-sm" style={{ color: Theme.primaryColor }}>
              How It All Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A Global Kitchen for African Gastronomy
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              African cuisine is one of the richest, most diverse, and flavor-packed food cultures in the world, yet many authentic dishes remain undocumented or difficult to discover globally.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We started Kravings to give food enthusiasts, home cooks, and professional chefs a dedicated platform to showcase their heritage, share secret spice blends, and celebrate the heartwarming dishes that bring people together.
            </p>
            <div className="pt-2">
              <Link 
                href="/explore" 
                className="inline-flex items-center gap-3 font-bold px-6 py-3 rounded-full text-white transition-transform hover:scale-105"
                style={{ backgroundColor: Theme.primaryColor }}
              >
                Explore Recipes <FaArrowRightLong />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR CORE VALUES */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              The core principles behind our community and platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                    style={{ backgroundColor: Theme.primaryColor }}
                  >
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM / COMMUNITY LEADERS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">People Behind Kravings</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            A passionate team dedicated to building Africa's largest culinary community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="h-64 bg-neutral-200 relative">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500">
                  [Photo: {member.name}]
                </div>
              </div>
              <div className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-semibold" style={{ color: Theme.primaryColor }}>
                  {member.role}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-20 px-6 md:px-12 text-center" style={{ backgroundColor: Theme.secondaryCOlor }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Have a traditional recipe to share with the world?
          </h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
            Join thousands of home cooks and professional chefs today. Your dish could inspire someone's dinner tonight!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="px-8 py-4 rounded-full font-bold text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ backgroundColor: Theme.primaryColor }}
            >
              Share Your Recipe
            </Link>
            <Link 
              href="/recipes" 
              className="px-8 py-4 rounded-full font-bold text-neutral-900 bg-white hover:bg-neutral-100 transition-colors"
            >
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}