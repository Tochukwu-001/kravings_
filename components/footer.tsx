"use client"
import Link from "next/link";
import Image from "next/image";
import { 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaYoutube,
  FaArrowRightLong
} from "react-icons/fa6";
import { Theme } from "./Theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ----- BRAND & ABOUT ----- */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Kravings Logo"
                width={800}
                height={800}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-black tracking-tight italic text-slate-900">
                Kravings
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed pr-4">
              A global culinary platform dedicated to sharing, discovering, and celebrating authentic African recipes. Connect with food lovers and preserve our rich food culture.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E73F1E] hover:text-white transition-all border border-slate-200 hover:border-[#E73F1E]">
                <FaInstagram className="text-lg" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E73F1E] hover:text-white transition-all border border-slate-200 hover:border-[#E73F1E]">
                <FaXTwitter className="text-lg" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E73F1E] hover:text-white transition-all border border-slate-200 hover:border-[#E73F1E]">
                <FaFacebookF className="text-lg" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#E73F1E] hover:text-white transition-all border border-slate-200 hover:border-[#E73F1E]">
                <FaYoutube className="text-lg" />
              </Link>
            </div>
          </div>

          {/* ----- QUICK LINKS ----- */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* ----- SUPPORT & LEGAL ----- */}
          <div>
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li>
                <Link href="/faqs" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#E73F1E] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#E73F1E] transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* ----- NEWSLETTER ----- */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Join Our Newsletter</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Get weekly roundups of our most popular African recipes, cooking tips, and community news.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all text-slate-800"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 rounded-xl text-white font-bold text-sm bg-[#E73F1E] hover:bg-[#d23516] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Subscribe <FaArrowRightLong />
              </button>
            </form>
          </div>

        </div>

        {/* ================= COPYRIGHT BAR ================= */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © {currentYear} Kravings. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <Link href="/privacy" className="hover:text-[#E73F1E] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#E73F1E] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#E73F1E] transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}