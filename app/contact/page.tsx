"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaEnvelope, 
  FaLocationDot, 
  FaPhone, 
  FaPaperPlane, 
  FaCheck,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaArrowRightLong
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 font-sans pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-neutral-950 text-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative background blur */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3" 
          style={{ backgroundColor: Theme.primaryColor }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span 
            className="text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20 inline-block mb-6"
            style={{ color: Theme.secondaryColor }}
          >
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            We'd love to hear from you.
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a question about a recipe, want to partner with us, or just want to debate who makes the best Jollof rice? Drop us a line.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-6"
                style={{ backgroundColor: Theme.primaryColor }}
              >
                <FaEnvelope size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Chat with us</h3>
              <p className="text-neutral-500 mb-4 text-sm">Our friendly team is here to help.</p>
              <a href="mailto:hello@kravings.com" className="font-semibold text-lg hover:underline" style={{ color: Theme.primaryColor }}>
                hello@kravings.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-neutral-900"
                style={{ backgroundColor: Theme.secondaryColor }}
              >
                <FaLocationDot size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit our HQs</h3>
              <p className="text-neutral-500 mb-4 text-sm">Come say hello at our community hubs.</p>
              <div className="space-y-3 font-medium text-neutral-800">
                <p>📍 Lagos, Nigeria <span className="text-neutral-400 text-sm font-normal block">12 Culinary Way, Victoria Island</span></p>
                <p>📍 Nairobi, Kenya <span className="text-neutral-400 text-sm font-normal block">45 Heritage Hub, Westlands</span></p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-700">
                <FaPhone size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call us</h3>
              <p className="text-neutral-500 mb-4 text-sm">Mon-Fri from 8am to 5pm.</p>
              <p className="font-semibold text-lg text-neutral-800">+234 (0) 800 123 4567</p>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#E73F1E] hover:border-[#E73F1E] transition-all shadow-sm">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#E73F1E] hover:border-[#E73F1E] transition-all shadow-sm">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#E73F1E] hover:border-[#E73F1E] transition-all shadow-sm">
                <FaFacebookF size={20} />
              </Link>
            </div>
            
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100 h-full">
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fadeIn">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl shadow-lg"
                    style={{ backgroundColor: Theme.primaryColor }}
                  >
                    <FaCheck />
                  </div>
                  <h2 className="text-3xl font-bold">Message Sent!</h2>
                  <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name.split(' ')[0] || 'friend'}. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-8 py-3 rounded-full font-bold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                        style={{ focusVisible: { outlineColor: Theme.primaryColor } }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-neutral-700 mb-2">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all appearance-none"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnerships & Collabs</option>
                      <option value="feedback">Feedback / Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you today?"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: Theme.primaryColor }}
                  >
                    Send Message <FaPaperPlane />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. FAQ PROMPT */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 mt-20 text-center">
        <p className="text-neutral-500 mb-4">Looking for a quick answer?</p>
        <Link 
          href="/faq" 
          className="inline-flex items-center gap-2 font-bold hover:underline"
          style={{ color: Theme.primaryColor }}
        >
          Check out our Frequently Asked Questions <FaArrowRightLong />
        </Link>
      </section>

    </main>
  );
}