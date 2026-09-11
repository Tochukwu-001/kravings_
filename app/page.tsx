import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaUtensils, 
  FaGlobe,
  FaHeart,
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaYoutube 
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C" // Fixed minor typo from your original object
};

export default function Home() {
  const featuredDishes = [
    { name: "Smoky Jollof Rice", origin: "West Africa", image: "/jollof.jpg", time: "45 mins" },
    { name: "Bunny Chow", origin: "South Africa", image: "/bunny-chow.jpg", time: "1 hr 10 mins" },
    { name: "Piri Piri Chicken", origin: "Mozambique", image: "/piri-piri.jpg", time: "50 mins" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* 2. HERO SECTION (Based on your provided code) */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-cover bg-center relative">
        <div className="min-h-dvh bg-black/60 text-white flex flex-col justify-center">
          <blockquote className="lg:w-1/2 mx-auto space-y-6 max-md:p-4 px-6">
            <h1 className="md:text-7xl text-4xl font-extrabold text-center leading-tight">
              Africa's <span style={{ color: Theme.primaryColor }}>Finest</span> Dishes
            </h1>
            <p className="tracking-wide md:text-xl text-center text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Discover and share your dishes with the world on a platform built to connect 
              a global community of food lovers. Celebrate every unique recipe, exchange homemade flavors, 
              and unite over a shared passion for cooking.
            </p>
            <div className="pt-4">
              <Link className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-3 mx-auto w-fit font-semibold hover:bg-gray-100 transition-colors" href="#recipes">
                See Our Dishes
                <button 
                  className="text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:translate-x-1" 
                  style={{ backgroundColor: Theme.primaryColor }}
                >
                  <FaArrowRightLong/>
                </button>
              </Link>
            </div>
          </blockquote>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-20 px-6 md:px-12 bg-white" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Kravings?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">More than just a recipe book, it's a cultural exchange through the language of food.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <FaGlobe size={24}/>, title: "Discover Heritage", desc: "Explore authentic recipes passed down through generations across the continent." },
              { icon: <FaUtensils size="{24}"/>, title: "Share Creations", desc: "Upload your own twists on classic dishes and build your personal digital cookbook." },
              { icon: <FaHeart size="{24}"/>, title: "Global Community", desc: "Connect with food lovers, review dishes, and exchange culinary tips worldwide." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div 
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: Theme.primaryColor }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRENDING DISHES SECTION */}
      <section className="py-20 px-6 md:px-12 bg-gray-50" id="recipes">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Right Now</h2>
              <p className="text-gray-600">The dishes our community can't get enough of.</p>
            </div>
            <Link
              className="font-semibold hidden md:flex items-center gap-2 hover:underline"
              href="/explore"
              style={{ color: Theme.primaryColor }}
            >
              View all <FaArrowRightLong/>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                {/* Placeholder for the Image - replace src with your actual assets */}
                <div className="h-64 w-full bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  {/* <Image alt="{dish.name}" className="object-cover group-hover:scale-105 transition-transform duration-500" fill src="{dish.image}"/> */}
                  
                  {/* Fallback visual since actual images aren't present yet */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                    [Image: {dish.name}]
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{dish.name}</h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100" style={{ color: Theme.primaryColor }}>
                      {dish.time}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">{dish.origin}</p>
                  <button className="w-full py-2 rounded-lg border-2 border-gray-100 font-semibold hover:border-gray-300 transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / FOOTER */}
      <blockquote className="bg-neutral-900 text-white pt-20 pb-10 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your culinary journey?</h2>
          <p className="text-gray-300 mb-8">Join our community of food lovers and discover amazing recipes.</p>
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
            Get Started
          </button>
        </div>
      </blockquote>

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
    </main>
  );
}