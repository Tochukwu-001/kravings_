import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter inline-block">
            <span className="text-[#E73F1E]">Krav</span>ings.
          </Link>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Connecting the world through the rich, diverse, and vibrant culinary traditions of Africa. Discover, cook, and share authentic homemade flavors.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#E73F1E] flex items-center justify-center transition-colors text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#E73F1E] flex items-center justify-center transition-colors text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#E73F1E] flex items-center justify-center transition-colors text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#E73F1E] flex items-center justify-center transition-colors text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-bold mb-2 text-white">Explore</h4>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Trending Dishes</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Latest Recipes</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Top Chefs</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Global Communities</Link>
        </div>

        {/* Company Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-bold mb-2 text-white">Company</h4>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Stay Hungry</h4>
          <p className="text-gray-400 text-sm">Get our weekly roundup of top African recipes straight to your inbox.</p>
          <form  className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-[#E73F1E] text-sm"
              required
            />
            <button 
              type="submit" 
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#E73F1E] hover:opacity-90 transition flex items-center justify-center gap-2 text-sm shadow-md"
            >
              Subscribe <FaArrowRight className="text-xs" />
            </button>
          </form>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}