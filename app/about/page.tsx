import Image from "next/image";
import Link from "next/link";
import { 
  FaUtensils, 
  FaEarthAfrica, 
  FaHeart, 
  FaBullseye, 
  FaLightbulb, 
  FaUsers, 
  FaHandshake, 
  FaArrowRight,
  FaQuoteLeft
} from "react-icons/fa6";

// Core Values Data
const coreValues = [
  {
    icon: <FaHeart className="text-2xl text-[#E73F1E]" />,
    title: "Cultural Pride",
    description: "We honor the rich heritage, traditions, and diverse flavors that define cuisine across all regions of Africa."
  },
  {
    icon: <FaUsers className="text-2xl text-[#E73F1E]" />,
    title: "Community First",
    description: "Every home cook, chef, and food enthusiast has a seat at our table. We grow by sharing and connecting."
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#E73F1E]" />,
    title: "Authenticity & Discovery",
    description: "We encourage real recipes passed down through generations while empowering modern twists and fusion."
  },
  {
    icon: <FaHandshake className="text-2xl text-[#E73F1E]" />,
    title: "Global Inclusivity",
    description: "Whether you are learning to cook Jollof for the first time or sharing a family Tagine, Kravings is open to all."
  }
];

// Team Members Data
const teamMembers = [
  {
    name: "Amara Okonkwo",
    role: "Co-Founder & Culinary Lead",
    bio: "Passionate about documenting West African food history and connecting diaspora home cooks.",
    image: "/team/amara.jpg"
  },
  {
    name: "Tariq Mansour",
    role: "Co-Founder & Head of Tech",
    bio: "Software engineer and street food fanatic dedicated to building tech for global food communities.",
    image: "/team/tariq.jpg"
  },
  {
    name: "Zola Ndlovu",
    role: "Head of Community",
    bio: "Food photographer and community builder amplifying home cooks across Southern Africa.",
    image: "/team/zola.jpg"
  }
];

export default function About() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800 font-sans">
      


      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-slate-900 bg-[#FFDD9C]">
            Our Story & Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 max-w-4xl mx-auto leading-tight">
            Connecting the World Through <span className="text-[#E73F1E]">African Cuisine</span>
          </h1>
          <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Kravings was born out of a simple desire: to create a dedicated space where African recipes, culinary heritage, and passionate cooks unite across continents.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm relative">
            <div className="w-14 h-14 rounded-2xl bg-[#FFDD9C] flex items-center justify-center mb-6">
              <FaBullseye className="text-3xl text-[#E73F1E]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To preserve, celebrate, and make accessible every unique flavor across Africa. We empower home cooks and professional chefs to share their heritage while helping food lovers everywhere discover authentic recipes.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm relative">
            <div className="w-14 h-14 rounded-2xl bg-[#FFDD9C] flex items-center justify-center mb-6">
              <FaEarthAfrica className="text-3xl text-[#E73F1E]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To become the definitive global destination for African food culture—a thriving digital kitchen where stories, technique, and appreciation cross all geographical borders.
            </p>
          </div>
        </div>
      </section>

      {/* THE STORY / ORIGIN */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E73F1E]">
              Why We Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              From Homemade Cravings to a Global Movement
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Finding authentic African recipes online used to require digging through fragmented blogs or asking family over phone calls. Great recipes were lost or kept within small circles.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We started Kravings to solve this. Whether it’s perfect Smokey Jollof, aromatic Tagines, rich Egusi, or South African Bobotie—Kravings gives everyday cooks a stage to publish their mastery and connect with a hungry world community.
            </p>
            
            <div className="p-6 bg-white rounded-2xl border-l-4 border-[#E73F1E] shadow-sm">
              <FaQuoteLeft className="text-[#FFDD9C] text-2xl mb-2" />
              <p className="text-slate-700 italic text-sm font-medium">
                &quot;Food is the ultimate storytelling medium. Every spice has a journey, every dish carries a history.&quot;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="w-full h-96 bg-slate-300 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center text-slate-500 font-semibold">
              <span>Image Placeholder: Cultural Cooking Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-slate-800 bg-[#FFDD9C]">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-900">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Meet the Creators Behind Kravings
            </h2>
            <p className="text-slate-600 mt-3 text-sm md:text-base">
              A passionate group of developers, food lovers, and storytellers building the future of culinary connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
                <div className="h-64 bg-slate-300 w-full flex items-center justify-center text-slate-500 font-semibold text-xs">
                  Photo: {member.name}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#E73F1E] mt-1">{member.role}</p>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-6 max-w-7xl lg:mx-auto my-16 rounded-3xl bg-slate-900 text-white overflow-hidden relative">
        <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to Share Your Culinary Heritage?
            </h2>
            <p className="text-slate-300 mt-4 text-sm leading-relaxed">
              Join thousands of food lovers sharing their authentic recipes and discovering timeless flavors daily.
            </p>
          </div>
          <div>
            <Link 
              href="/signup" 
              className="bg-[#E73F1E] text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-xl text-sm"
            >
              <span>Get Started Free</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Kravings Inc. All rights reserved.
        </div>
      </footer>

    </main>
  );
}