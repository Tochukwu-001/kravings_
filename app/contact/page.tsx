import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaClock, 
  FaPaperPlane,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: "hello@kravings.com",
    subtext: "We respond within 24 hours"
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: "+234 (0) 800 KRAVINGS",
    subtext: "Mon-Fri from 9am to 6pm WAT"
  },
  {
    icon: FaLocationDot,
    title: "Our Headquarters",
    details: "Lagos, Nigeria",
    subtext: "Serving food lovers globally"
  },
  {
    icon: FaClock,
    title: "Support Hours",
    details: "24/7 Digital Community",
    subtext: "Always open for recipe submissions"
  }
];

const FAQS = [
  {
    q: "How can I submit my own recipe?",
    a: "Create a free Kravings account, click 'Submit a Dish' in your profile menu, and fill out our guided recipe form with your ingredients, instructions, and photos."
  },
  {
    q: "Are recipe submissions reviewed before going live?",
    a: "Yes! Our culinary community managers review every recipe within 24 hours to ensure formatting and measurements are clear for all home cooks."
  },
  {
    q: "How can I partner with Kravings?",
    a: "We love collaborating with food brands, chefs, and content creators. Send us a message via the form with the subject 'Partnership Inquiry'."
  }
];

export default function Contact() {
  return (
    <main className="min-h-dvh font-sans text-neutral-800 bg-white">
      
    
      {/* HERO SECTION */}
      <section className="min-h-[60vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="min-h-[60vh] bg-black/75 text-white flex flex-col justify-center items-center px-6 pt-20">
          <blockquote className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-4 flex flex-col items-center">
            <span className="text-[#E73F1E] uppercase tracking-widest text-xs md:text-sm font-bold bg-[#FFDD9C]/20 px-4 py-1 rounded-full">
              Reach Out
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight">
              We'd Love to <span className="text-[#FFDD9C]">Connect</span>
            </h1>
            <p className="tracking-wider text-base md:text-lg text-center text-gray-200 leading-relaxed font-light">
              Have a question, feedback, or a traditional recipe story to share? Get in touch with our team today.
            </p>
          </blockquote>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-[#E73F1E] font-bold tracking-widest uppercase text-sm">Get in Touch</p>
              <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
                Let's Talk About Food, Culture & Recipes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're experiencing technical issues, interested in corporate partnerships, or just want to tell us how much you loved a recipe, we're here.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-5 border border-gray-100 bg-stone-50 rounded-2xl space-y-2 hover:border-[#FFDD9C] transition-colors">
                    <div className="w-10 h-10 bg-[#FFDD9C]/40 rounded-xl flex items-center justify-center text-[#E73F1E]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-base">{item.title}</h3>
                    <p className="text-sm font-semibold text-[#E73F1E]">{item.details}</p>
                    <p className="text-xs text-gray-500">{item.subtext}</p>
                  </div>
                );
              })}
            </div>

            {/* Social Connect Box */}
            <div className="p-8 bg-neutral-900 text-white rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-[#FFDD9C]">Follow Our Community</h3>
              <p className="text-neutral-400 text-sm">
                Join our vibrant social channels for daily recipe highlights, kitchen tips, and live cooking sessions.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-[#FFDD9C] hover:bg-[#E73F1E] hover:text-white transition-all">
                  <FaInstagram />
                </Link>
                <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-[#FFDD9C] hover:bg-[#E73F1E] hover:text-white transition-all">
                  <FaTwitter />
                </Link>
                <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-[#FFDD9C] hover:bg-[#E73F1E] hover:text-white transition-all">
                  <FaFacebook />
                </Link>
                <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-[#FFDD9C] hover:bg-[#E73F1E] hover:text-white transition-all">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-neutral-900">Send Us a Message</h3>
              <p className="text-sm text-gray-500">Fill out the form below and our team will get back to you shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">First Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Amara"
                    className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Okafor"
                    className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="amara@example.com"
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Subject</label>
                <select className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#E73F1E] focus:bg-white transition-all text-neutral-600">
                  <option value="">Select a topic</option>
                  <option value="recipe">Recipe Inquiry or Feedback</option>
                  <option value="account">Account Support</option>
                  <option value="partnership">Partnership & Business</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#E73F1E] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-4 bg-[#E73F1E] text-white rounded-full font-bold text-base hover:bg-[#c93619] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#E73F1E]/20 hover:scale-[1.01]"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-stone-50 py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#E73F1E] font-bold tracking-widest uppercase text-sm">Quick Answers</p>
            <h2 className="text-4xl font-bold text-neutral-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2 shadow-sm">
                <h3 className="font-bold text-lg text-neutral-900">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-12 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-bold tracking-tight text-[#FFDD9C]">
              Kravings.
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed mt-2">
              The ultimate platform to discover, celebrate, and share the rich and diverse culinary heritage of the African continent.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">All Recipes</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Top Chefs</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Submit a Dish</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-neutral-400 hover:text-[#FFDD9C] transition">About Us</Link></li>
              <li><Link href="/contact" className="text-[#FFDD9C] transition">Contact Us</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:text-left text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Kravings. All rights reserved.
        </div>
      </footer>
    </main>
  );
}