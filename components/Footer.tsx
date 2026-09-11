import Link from "next/link";
import { 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaYoutube 
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-8 px-6 md:px-12 font-sans border-t-[6px]" style={{ borderColor: Theme.primaryColor }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-white flex items-center gap-1">
              <span style={{ color: Theme.primaryColor }}>K</span>ravings
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Discover, share, and celebrate Africa's finest dishes. Join our global community of food lovers and bring authentic flavors to your kitchen.
            </p>
          </div>

          <div className="md:col-span-7 bg-neutral-900 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Join our Newsletter</h3>
              <p className="text-sm text-neutral-400">Get weekly recipes and cooking tips straight to your inbox.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E73F1E] w-full md:w-64 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 rounded-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: Theme.primaryColor }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-neutral-800 pb-16">
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Trending Recipes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Top Chefs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Regional Dishes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Quick Meals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Community</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Submit a Recipe</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Forums</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Cooking Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Partner with us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Kravings. All rights reserved. Built for food lovers.
          </p>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#E73F1E] transition-all duration-300">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#E73F1E] transition-all duration-300">
              <FaXTwitter size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#E73F1E] transition-all duration-300">
              <FaFacebookF size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#E73F1E] transition-all duration-300">
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}