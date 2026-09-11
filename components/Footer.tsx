import Link from "next/link";
import { 
  FaUtensils, 
  FaFacebookF, 
  FaXTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaPaperPlane
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* BRAND & MISSION */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="text-2xl font-black text-white tracking-wider flex items-center gap-2">
            <FaUtensils className="text-[#E73F1E]" />
            <span>KRAVINGS</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Uniting food lovers worldwide through authentic African cuisine, shared culinary traditions, and delicious homemade recipes.
          </p>
          
          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-colors"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-colors"
            >
              <FaXTwitter className="text-sm" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-colors"
            >
              <FaYoutube className="text-sm" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:bg-[#E73F1E] hover:text-white transition-colors"
            >
              <FaTiktok className="text-sm" />
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/recipes" className="hover:text-white transition-colors">Explore Dishes</Link></li>
            <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Food Stories</Link></li>
          </ul>
        </div>

        {/* REGIONAL CUISINES */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Regions</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/region/west-africa" className="hover:text-white transition-colors">West Africa</Link></li>
            <li><Link href="/region/east-africa" className="hover:text-white transition-colors">East Africa</Link></li>
            <li><Link href="/region/north-africa" className="hover:text-white transition-colors">North Africa</Link></li>
            <li><Link href="/region/southern-africa" className="hover:text-white transition-colors">Southern Africa</Link></li>
            <li><Link href="/region/central-africa" className="hover:text-white transition-colors">Central Africa</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Stay Connected</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Get weekly trending recipes and African food stories delivered straight to your inbox.
          </p>
          <form className="space-y-2">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E73F1E] transition-colors"
                required
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#E73F1E] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-opacity"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-slate-900 bg-slate-950/50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kravings Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-400 transition-colors">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}