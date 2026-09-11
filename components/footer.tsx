import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaEnvelope, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaYoutube, 
  FaHeart 
} from "react-icons/fa6";

export default function footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* 1. Newsletter Callout Section */}
      <div className="border-b border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Get Weekly <span className="text-[#FFDD9C]">Recipes & Spices</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Subscribe to our newsletter to receive curated African dishes, cooking tips, and popular community recipes directly in your inbox.
            </p>
          </div>

          <div className="md:col-span-6">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] placeholder:text-slate-500"
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              </div>
              <button
                type="submit"
                className="bg-[#E73F1E] hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shrink-0 shadow-lg"
              >
                Subscribe <FaArrowRightLong className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Links Section */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-extrabold tracking-wider text-white inline-block">
              Kravings<span className="text-[#E73F1E]">.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Connecting a global community of food enthusiasts to discover, celebrate, and preserve authentic African culinary heritage.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaYoutube, href: "#", label: "YouTube" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:bg-[#E73F1E] hover:text-white hover:border-[#E73F1E] transition-all"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFDD9C]">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#explore" className="text-slate-400 hover:text-white transition-colors">Trending Dishes</Link>
              </li>
              <li>
                <Link href="/faqs" className="text-slate-400 hover:text-white transition-colors">Help & FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFDD9C]">Regions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">West Africa</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">East Africa</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">North Africa</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">Southern Africa</Link>
              </li>
            </ul>
          </div>

          {/* Community & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFDD9C]">Community</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link href="/auth" className="text-slate-400 hover:text-white transition-colors">Sign In / Register</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal Sub-Footer */}
      <div className="border-t border-slate-800/80 py-6 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kravings Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FaHeart className="text-[#E73F1E]" /> for African cuisine lovers worldwide.
          </p>
        </div>
      </div>

    </footer>
  );
}