 import Link from "next/link";
import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube, 
  FaTiktok, 
  FaPaperPlane, 
  FaHeart 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 font-sans border-t border-stone-800">
      {/* NEWSLETTER BANNER */}
      <div className="border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFDD9C]">
              Join Our Culinary Tribe
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Get authentic recipes delivered weekly
            </h3>
            <p className="text-sm text-stone-400">
              No spam. Just fresh African recipes, cooking techniques, and creator spotlights.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address..."
              className="px-5 py-3.5 rounded-full bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#E73F1E] flex-1 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-7 py-3.5 rounded-full bg-[#E73F1E] text-white font-semibold text-sm hover:bg-[#d03517] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg flex-shrink-0"
            >
              <span>Subscribe</span>
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      </div>

      {/* MAIN FOOTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* BRAND COLUMN */}
        <div className="col-span-2 space-y-4">
          <Link href="/" className="inline-block text-2xl font-black tracking-wider text-white">
            KRAVINGS<span className="text-[#E73F1E]">.</span>
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
            Connecting a global community of food lovers through the authentic flavors, rich history, and diverse recipes of African cuisine.
          </p>

          <div className="flex gap-3 pt-2">
            {[
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
              { icon: <FaTiktok />, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-[#E73F1E] hover:border-[#E73F1E] transition-all text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* REGIONS */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Cuisines</p>
          <ul className="space-y-2.5 text-sm text-stone-400">
            <li><Link href="/dishes" className="hover:text-white transition-colors">West Africa</Link></li>
            <li><Link href="/dishes" className="hover:text-white transition-colors">East Africa</Link></li>
            <li><Link href="/dishes" className="hover:text-white transition-colors">North Africa</Link></li>
            <li><Link href="/dishes" className="hover:text-white transition-colors">Southern Africa</Link></li>
            <li><Link href="/dishes" className="hover:text-white transition-colors">Central Africa</Link></li>
          </ul>
        </div>

        {/* PLATFORM LINKS */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Platform</p>
          <ul className="space-y-2.5 text-sm text-stone-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/share" className="hover:text-white transition-colors">Submit Recipe</Link></li>
            <li><Link href="/creators" className="hover:text-white transition-colors">Featured Chefs</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors">Help & FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Legal</p>
          <ul className="space-y-2.5 text-sm text-stone-400">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/guidelines" className="hover:text-white transition-colors">Community Rules</Link></li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="border-t border-stone-900 bg-stone-950/80 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Kravings. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FaHeart className="text-[#E73F1E]" /> for African cuisine lovers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}