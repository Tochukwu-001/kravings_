import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in <span className="text-[#E73F1E]">Touch</span>
          </h1>
          <p className="text-lg text-slate-600">
            Have a question about a recipe, want to partner with us, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Contact Info (Left) */}
          <div className="md:col-span-2 bg-[#E73F1E] text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-white/80 mb-10">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#FFDD9C] text-xl" />
                  <span>hello@kravings.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-[#FFDD9C] text-xl" />
                  <span>+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-[#FFDD9C] text-xl" />
                  <span>Lagos, Nigeria (Global HQ)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="md:col-span-3 p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all bg-slate-50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all bg-slate-50" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all bg-slate-50" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all bg-slate-50" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-[#E73F1E] hover:bg-[#d23517] text-white font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}