"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaEnvelope, 
  FaArrowRight, 
  FaLocationDot, 
  FaPhone 
} from "react-icons/fa6";
import { Theme } from "../components/Theme";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* TOP SECTION: Newsletter Banner */}
        <div 
          className="rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl"
          style={{ backgroundColor: Theme.primaryColor }}
        >
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold">Stay hungry for new recipes!</h3>
            <p className="text-white/80 text-sm md:text-base">
              Subscribe to our weekly newsletter to get trending African dishes delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-72 pl-11 pr-4 py-3 rounded-full bg-white text-slate-900 placeholder-slate-400 focus:outline-none text-sm"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.jpg" 
                alt="Kravings Logo" 
                width={48} 
                height={48} 
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Kravings<span style={{ color: Theme.primaryColor }}>.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting a global community of food lovers through the rich, authentic, and diverse flavors of African cuisine.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-all">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-all">
                <FaXTwitter size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-all">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/add-recipe" className="hover:text-white transition-colors">Submit a Recipe</Link></li>
            </ul>
          </div>

          {/* Column 3: Cuisine Regions */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Explore Cuisines</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#dishes" className="hover:text-white transition-colors">West African Jollof</Link></li>
              <li><Link href="/#dishes" className="hover:text-white transition-colors">North African Tagines</Link></li>
              <li><Link href="/#dishes" className="hover:text-white transition-colors">East African Nyama Choma</Link></li>
              <li><Link href="/#dishes" className="hover:text-white transition-colors">Southern African Braai</Link></li>
              <li><Link href="/#dishes" className="hover:text-white transition-colors">Central African Stews</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-[#E73F1E] mt-1 shrink-0" />
                <span>Lagos, Nigeria &amp; Worldwide Community</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#E73F1E] shrink-0" />
                <span>+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#E73F1E] shrink-0" />
                <span>support@kravings.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kravings. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-400 transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}