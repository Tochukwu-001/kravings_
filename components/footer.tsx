import Link from "next/link";
import { 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaYoutube,
  FaArrowRightLong
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="text-white text-3xl font-bold tracking-widest inline-block mb-2">
              KRAVINGS
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover, document, and share the rich, diverse, and deeply flavorful culinary traditions of Africa with a global community of food lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#E73F1E] transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-[#E73F1E] transition-colors inline-block">All Recipes</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E73F1E] transition-colors inline-block">Our Story</Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-[#E73F1E] transition-colors inline-block">Share a Recipe</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="hover:text-[#E73F1E] transition-colors inline-block">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E73F1E] transition-colors inline-block">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#E73F1E] transition-colors inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#E73F1E] transition-colors inline-block">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Stay Hungry</h3>
            <p className="text-sm mb-4">
              Get weekly roundups of the top trending African dishes directly in your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#E73F1E] focus:ring-1 focus:ring-[#E73F1E] transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#E73F1E] text-white font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c93518] transition-colors"
              >
                Subscribe <FaArrowRightLong />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Kravings. All rights reserved. Made with love in Abuja.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E73F1E] hover:text-white transition-all">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E73F1E] hover:text-white transition-all">
              <FaXTwitter size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E73F1E] hover:text-white transition-all">
              <FaFacebookF size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E73F1E] hover:text-white transition-all">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}