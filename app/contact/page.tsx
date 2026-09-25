import Link from "next/link";
<<<<<<< HEAD
import { 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF 
} from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/4 -mt-20 w-72 h-72 bg-[#E73F1E] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 -mb-20 w-72 h-72 bg-[#FFDD9C] rounded-full blur-[100px] opacity-10"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">
            Get in <span className="text-[#FFDD9C]">Touch</span>
          </h1>
          <p className="md:text-lg text-gray-300">
            Have a question, feedback, or a partnership inquiry? We'd love to hear from you. 
            Drop us a message and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-20 px-5 md:px-20 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Left Column: Contact Information */}
          <div className="md:col-span-2 bg-gray-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E73F1E] rounded-tl-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Contact Info</h2>
              <p className="text-gray-400 mb-10">
                Reach out to us directly through any of these channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FFDD9C] shrink-0">
                    <FaLocationDot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Kitchen (HQ)</h3>
                    <p className="text-gray-400 mt-1">Abuja, Federal Capital Territory<br/>Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FFDD9C] shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-400 mt-1">hello@kravings.africa</p>
                    <p className="text-gray-400">support@kravings.africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FFDD9C] shrink-0">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-400 mt-1">+234 (0) 800 KRAVINGS</p>
                    <p className="text-gray-400">Mon - Fri, 9am - 5pm WAT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <p className="font-semibold mb-4 text-gray-300">Follow our culinary journey</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E73F1E] transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E73F1E] transition-colors">
                  <FaXTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E73F1E] transition-colors">
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-3 p-10 md:p-14">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-medium text-gray-700">Subject</label>
                <select 
                  id="subject" 
                  className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all text-gray-700"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="recipe">Recipe Submission Issue</option>
                  <option value="partnership">Partnership & Collab</option>
                  <option value="feedback">App Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 focus:border-[#E73F1E] transition-all resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-[#E73F1E] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#c93518] transition-colors shadow-lg shadow-[#E73F1E]/30 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-2xl font-bold tracking-widest">KRAVINGS</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/recipes" className="hover:text-white transition-colors">Recipes</Link>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>

=======
import { FaEnvelope, FaLocationDot, FaPhone, FaArrowLeftLong } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="min-h-dvh bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Contact Information Side */}
        <div className="bg-[#E73F1E] text-white p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#FFDD9C] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white rounded-full opacity-10 blur-2xl"></div>

          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 transition-colors w-fit">
              <FaArrowLeftLong /> Back to Home
            </Link>
            
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/80 leading-relaxed mb-12">
              Have a question about a recipe, want to partner with us, or just want to say hello? We'd love to hear from you. Fill out the form and our team will get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <p className="text-white/80 mt-1">Abuja, Federal Capital Territory<br />Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80 mt-1">hello@kravings.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80 mt-1">+234 (0) 800 KRAVINGS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="p-12 lg:w-3/5 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Jane Doe"
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="How can we help you?"
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E73F1E]/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-[#E73F1E] hover:bg-[#c93518] text-white font-bold py-4 rounded-xl transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
>>>>>>> 8f401fbe91697ebd4d7951756ee53ba4a5dfd733
    </main>
  );
}