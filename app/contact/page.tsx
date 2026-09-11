"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaPaperPlane, 
  FaClock, 
  FaCheck,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-dvh flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. Hero Header */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E73F1E] text-white">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            We’d Love to Hear From <span className="text-[#FFDD9C]">You</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Have questions about a recipe, feedback on the platform, or partnership inquiries? Reach out to the Kravings team below.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Contact Information</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fill out the form or reach out to us directly through any of our channels. We aim to respond within 24 hours.
              </p>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFDD9C]/60 text-[#E73F1E] flex items-center justify-center shrink-0 text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email Us</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Our support team is always here to help.</p>
                  <a href="mailto:hello@kravings.com" className="text-sm font-semibold text-[#E73F1E] hover:underline mt-1 block">
                    support@kravings.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFDD9C]/60 text-[#E73F1E] flex items-center justify-center shrink-0 text-lg">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Call or WhatsApp</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Mon–Fri from 8:00 AM to 6:00 PM (WAT).</p>
                  <a href="tel:+2348005728464" className="text-sm font-semibold text-[#E73F1E] hover:underline mt-1 block">
                    +234 (0) 800 KRAVINGS
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFDD9C]/60 text-[#E73F1E] flex items-center justify-center shrink-0 text-lg">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Main Office</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Headquarters & Culinary Innovation Hub</p>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    14 Culinary Avenue, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFDD9C]/60 text-[#E73F1E] flex items-center justify-center shrink-0 text-lg">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Support availability</p>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    Monday – Friday: 8am – 6pm WAT
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                  { icon: FaFacebookF, href: "#" },
                  { icon: FaYoutube, href: "#" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-[#E73F1E] hover:text-white hover:border-[#E73F1E] transition-colors"
                    >
                      <Icon className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-600 text-sm mb-8">
              Got a specific recipe inquiry or bug report? Let us know and we'll get back to you.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-8">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl shadow-md">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Message Received!</h3>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Thank you for contacting Kravings. A member of our community support team will respond to your email shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-2 inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Amina Bello"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. amina@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Recipe Assistance">Recipe & Ingredients Help</option>
                    <option value="Account Issue">Account or Password Support</option>
                    <option value="Partnership">Brand & Chef Partnerships</option>
                    <option value="Feedback">Platform Feedback</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-[#E73F1E] text-white font-bold text-sm uppercase tracking-wider hover:bg-orange-700 transition flex items-center justify-center gap-3 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Quick FAQ Redirection Banner */}
      <section className="py-12 px-6 bg-slate-100 border-t border-slate-200/60 text-center">
        <p className="text-slate-600 text-sm">
          Looking for instant answers? Check out our{" "}
          <Link href="/faqs" className="font-bold text-[#E73F1E] hover:underline">
            Frequently Asked Questions
          </Link>{" "}
          page first.
        </p>
      </section>

    </main>
  );
}