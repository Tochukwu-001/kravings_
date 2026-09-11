import Link from "next/link";
import { 
  FaUtensils, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaPaperPlane, 
  FaClock, 
  FaComments, 
  FaHandshake,
  FaCircleInfo
} from "react-icons/fa6";

const contactMethods = [
  {
    icon: <FaEnvelope className="text-2xl text-[#E73F1E]" />,
    title: "Email Us",
    detail: "support@kravings.com",
    subtext: "We respond within 24 hours.",
    action: "mailto:support@kravings.com"
  },
  {
    icon: <FaPhone className="text-2xl text-[#E73F1E]" />,
    title: "Call / WhatsApp",
    detail: "+234 (0) 800 KRAVINGS",
    subtext: "Mon-Fri from 9am to 6pm WAT.",
    action: "tel:+23480057284647"
  },
  {
    icon: <FaLocationDot className="text-2xl text-[#E73F1E]" />,
    title: "Headquarters",
    detail: "Lagos & Nairobi Hubs",
    subtext: "Victoria Island, Lagos, Nigeria.",
    action: "#"
  }
];

const faqs = [
  {
    q: "How can I submit my own recipe?",
    a: "Create a free account, click on 'Publish Your Dish' in your user dashboard, and fill in your step-by-step cooking guide!"
  },
  {
    q: "Are the recipes on Kravings free to view?",
    a: "Yes! All public recipes shared by our global community of chefs and home cooks are 100% free to access."
  },
  {
    q: "How can I feature my brand or restaurant?",
    a: "Select 'Brand Partnership' in the contact form inquiry dropdown below or email our partnerships team directly."
  }
];

export default function Contact() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800 font-sans">
      
      {/* NAVBAR */}


      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-950"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 text-[#FFDD9C] border border-white/10 inline-flex items-center gap-2">
            <FaComments className="text-[#E73F1E]" />
            <span>We&apos;re Here To Help</span>
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Get in Touch with <span className="text-[#E73F1E]">Kravings</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about a recipe, feedback on our platform, or media partnerships? Send us a message and our team will get right back to you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <a 
              key={idx} 
              href={method.action}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#FFDD9C]/60 group-hover:bg-[#FFDD9C] transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{method.title}</h3>
                <p className="text-[#E73F1E] font-semibold text-sm mt-1">{method.detail}</p>
              </div>
              <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">
                {method.subtext}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* FORM & DIRECTORY SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: INFORMATION & SUPPORT */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-slate-800 bg-[#FFDD9C]">
                Reach Out
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-900 leading-tight">
                Let&apos;s build the future of food culture together.
              </h2>
              <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                Whether you are a chef looking to preserve heritage recipes or a brand interested in reaching food enthusiasts, we are excited to connect.
              </p>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-3 text-slate-900 font-bold text-sm">
                <FaClock className="text-[#E73F1E]" />
                <span>Support Hours</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-slate-800">8:00 AM – 6:00 PM (WAT)</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-slate-800">10:00 AM – 2:00 PM (WAT)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-slate-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Partnership Note */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#FFDD9C] font-bold text-sm">
                <FaHandshake />
                <span>Media & Partnerships</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                For press inquiries, brand sponsorships, and event partnerships, please select &quot;Partnerships&quot; in the form inquiry dropdown or reach out to <span className="text-[#FFDD9C] font-medium">partners@kravings.com</span>.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
            <p className="text-slate-500 text-xs mb-8">Fill out the fields below and we&apos;ll respond promptly.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input 
                    id="full-name"
                    type="text" 
                    placeholder="e.g. Amara Okonkwo" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email-address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input 
                    id="email-address"
                    type="email" 
                    placeholder="amara@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input 
                    id="phone-number"
                    type="tel" 
                    placeholder="+234 ..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Type *
                  </label>
                  <select 
                    id="inquiry-type"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                    required
                  >
                    <option value="general">General Support</option>
                    <option value="recipe">Recipe Submission Help</option>
                    <option value="partnership">Brand Partnership / Sponsor</option>
                    <option value="press">Press & Media</option>
                    <option value="feedback">Product Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea 
                  id="message"
                  rows={5} 
                  placeholder="Tell us how we can help..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#E73F1E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-95 transition-opacity shadow-lg shadow-[#E73F1E]/20"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-slate-800 bg-[#FFDD9C] inline-flex items-center gap-1.5">
              <span>Got Questions?</span>
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FaCircleInfo className="text-[#E73F1E] text-sm shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}