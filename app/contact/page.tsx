import Link from "next/link";
import { 
  FaLocationDot, 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane,
  FaInstagram,
  FaXTwitter,
  FaFacebookF
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C",
};

export default function Contact() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 font-sans antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#E73F1E] blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#FFDD9C] blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm font-extrabold tracking-wider uppercase text-[#FFDD9C]">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            We&apos;d Love to Hear <span className="text-[#E73F1E]">From You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about a recipe, want to partner with us, 
            or simply want to share your latest culinary masterpiece, our team is here.
          </p>
        </div>
      </section>

      {/* ================= CONTACT LAYOUT ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* ----- LEFT: CONTACT INFORMATION ----- */}
          <div className="lg:w-2/5 bg-[#FFDD9C] p-10 md:p-14 flex flex-col justify-between text-slate-900">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Information</h2>
              <p className="text-slate-700 mb-10 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. 
                You can also reach us directly via email or phone.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-[#E73F1E] shrink-0 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="font-semibold text-lg hover:text-[#E73F1E] transition-colors cursor-pointer">
                      hello@kravings.app
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-[#E73F1E] shrink-0 text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-semibold text-lg hover:text-[#E73F1E] transition-colors cursor-pointer">
                      +234 (0) 800 KRAVINGS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-[#E73F1E] shrink-0 text-xl">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="font-semibold text-lg leading-snug">
                      14 Culinary Avenue,<br />
                      Victoria Island, Lagos,<br />
                      Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 pt-8 border-t border-amber-300/50">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#E73F1E] hover:text-white transition-all shadow-sm">
                  <FaInstagram />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#E73F1E] hover:text-white transition-all shadow-sm">
                  <FaXTwitter />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#E73F1E] hover:text-white transition-all shadow-sm">
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>

          {/* ----- RIGHT: CONTACT FORM ----- */}
          <div className="lg:w-3/5 p-10 md:p-14 bg-white">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="e.g. Kwame"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="e.g. Mensah"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="kwame@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all appearance-none text-slate-700"
                >
                  <option value="">Select a topic...</option>
                  <option value="support">General Support</option>
                  <option value="recipe">Recipe Submission Issue</option>
                  <option value="partnership">Partnership & Media</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/20 focus:border-[#E73F1E] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 rounded-full text-white font-bold text-base bg-[#E73F1E] hover:bg-[#d23516] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 mt-4"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight text-[#E73F1E]">
              Kravings
            </span>
            <span className="text-xs text-gray-400">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="/recipes" className="hover:text-slate-900 transition-colors">Recipes</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}