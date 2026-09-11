import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaEarthAfrica, FaBowlFood } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our <span className="text-[#E73F1E]">Story</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kravings was born out of a simple desire: to make the rich, diverse, and vibrant flavors of Africa accessible to every kitchen in the world.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
              alt="People cooking together" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">More than just recipes.</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Africa is a continent of 54 countries, each with its own unique culinary heritage, spices, and cooking techniques. From the spicy Jollof of the West to the aromatic tagines of the North, our food tells the story of our people.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              We created Kravings to be a digital dining table. A place where home cooks, professional chefs, and food enthusiasts can connect, share, and preserve these incredible recipes for generations to come.
            </p>
          </div>
        </div>

        {/* Mission/Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <FaEarthAfrica />
            </div>
            <h3 className="text-xl font-bold mb-2">Preserve Culture</h3>
            <p className="text-slate-600">Documenting traditional recipes before they are lost to time.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <FaHeart />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Community</h3>
            <p className="text-slate-600">Connecting food lovers across borders through a shared passion.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-14 h-14 bg-[#FFDD9C]/40 text-[#E73F1E] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <FaBowlFood />
            </div>
            <h3 className="text-xl font-bold mb-2">Inspire Kitchens</h3>
            <p className="text-slate-600">Encouraging people to try new flavors and ingredients at home.</p>
          </div>
        </div>
      </div>
    </main>
  );
}