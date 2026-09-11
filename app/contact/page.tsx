import Link from "next/link";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaPaperPlane, 
  FaClock, 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube,
  FaCircleQuestion
} from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-900 font-sans">
      {/* 1. HERO HEADER */}
      <section className="relative bg-stone-900 text-white py-20 px-6 md:py-28 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E73F1E]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FFDD9C]/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[#FFDD9C]">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            We&apos;d Love to <span className="text-[#E73F1E]">Hear From You</span>
          </h1>
          <p className="text-stone-300 md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a question about a recipe, feedback on the platform, or partnership inquiries? Reach out to the Kravings team below.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS & FORM CONTAINER */}
      <section className="py-16 px-6 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: INFO & DETAILS */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Contact Information</h2>
                <p className="text-stone-500 text-sm">
                  Fill out the form or reach out directly using any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] flex items-center justify-center flex-shrink-0 text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider">Email Us</h3>
                    <p className="text-stone-800 font-semibold text-sm">hello@kravings.com</p>
                    <p className="text-stone-800 font-semibold text-sm">support@kravings.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFDD9C] text-black flex items-center justify-center flex-shrink-0 text-lg">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider">Call Us</h3>
                    <p className="text-stone-800 font-semibold text-sm">+234 (0) 800 KRAVINGS</p>
                    <p className="text-stone-500 text-xs mt-0.5">Mon - Fri, 9am - 6pm WAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] flex items-center justify-center flex-shrink-0 text-lg">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider">Our HQ</h3>
                    <p className="text-stone-800 font-semibold text-sm">Lagos & London Hubs</p>
                    <p className="text-stone-500 text-xs">Connecting African food globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0 text-lg">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider">Response Time</h3>
                    <p className="text-stone-800 font-semibold text-sm">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-4">Follow Our Kitchen</h3>
                <div className="flex gap-3 text-stone-600">
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center hover:bg-[#E73F1E] hover:text-white transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center hover:bg-[#E73F1E] hover:text-white transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center hover:bg-[#E73F1E] hover:text-white transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center hover:bg-[#E73F1E] hover:text-white transition-colors">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Send Us a Message</h2>
            <p className="text-stone-500 text-sm mb-8">
              Got a question, suggestion, or dish request? Drop your details below and we&apos;ll get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">First Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Amara" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Okafor" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="amara@example.com" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Inquiry Topic</label>
                  <select className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors text-stone-700">
                    <option>General Question</option>
                    <option>Recipe Submission Help</option>
                    <option>Creator / Chef Partnerships</option>
                    <option>Press & Media</option>
                    <option>Technical Issue</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us what's on your mind or ask about a specific dish..."
                  className="w-full p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-4 rounded-full bg-[#E73F1E] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#d03517] transition-colors shadow-md hover:shadow-lg"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#E73F1E]">
            <FaCircleQuestion /> Got Questions?
          </span>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-2">
            <h3 className="font-bold text-stone-900">How do I submit my own recipe?</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Click on the &quot;Share Your Dish&quot; button in the main menu, fill out the recipe submission form with ingredients, instructions, and high-quality photos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-2">
            <h3 className="font-bold text-stone-900">Can I publish traditional family recipes?</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Absolutely! We celebrate authentic home-cooked meals and traditional heritage dishes passed down across generations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-2">
            <h3 className="font-bold text-stone-900">Is Kravings free to use?</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Yes, browsing, saving, and sharing recipes on Kravings is 100% free for all food lovers worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-2">
            <h3 className="font-bold text-stone-900">How do creator partnerships work?</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Food bloggers and professional chefs can apply for verified status to showcase their brand, link their channels, and gain featured placements.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}