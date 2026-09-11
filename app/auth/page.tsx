import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  return (
    <main className="min-h-dvh flex flex-col md:flex-row font-sans bg-white">
      
      {/* LEFT COLUMN: Visual / Branding Panel (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center flex-col justify-between p-12 text-white">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Top Logo */}
        <div className="relative z-10">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter">
            <span className="text-[#E73F1E]">Krav</span>ings.
          </Link>
        </div>

        {/* Center Quote/Text */}
        <div className="relative z-10 space-y-4 max-w-lg mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#FFDD9C] text-[#E73F1E] font-bold text-xs uppercase tracking-wider">
            Join the Community
          </span>
          <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight">
            Share your kitchen secrets with the world.
          </h1>
          <p className="text-gray-300 text-lg">
            Connect with thousands of food enthusiasts celebrating Africa's finest homemade flavors and authentic recipes.
          </p>
        </div>

        {/* Footer info inside image */}
        <div className="relative z-10 text-sm text-gray-400">
          © {new Date().getFullYear()} Kravings. All rights reserved.
        </div>
      </div>

      {/* RIGHT COLUMN: Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12 lg:py-0">
        
        {/* Back to home link */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#E73F1E] transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Home
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Create an account</h2>
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#E73F1E] hover:underline">
                Log in
              </Link>
            </p>
          </div>

          {/* GOOGLE SIGN-IN BUTTON */}
          <button 
            type="button" 
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-300 rounded-xl font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Or with email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* FORM FIELDS */}
          <form  className="space-y-5">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaUser />
                </span>
                <input 
                  type="text" 
                  placeholder="Amina Bello" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </span>
                <input 
                  type="email" 
                  placeholder="amina@example.com" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </span>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-white transition"
                  required
                />
              </div>
              <p className="text-xs text-gray-400 pt-1">Must be at least 8 characters long.</p>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 rounded border-gray-300 text-[#E73F1E] focus:ring-[#E73F1E]" 
                required 
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                I agree to Kravings's <Link href="#" className="text-gray-900 underline font-medium">Terms of Service</Link> and <Link href="#" className="text-gray-900 underline font-medium">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#E73F1E] hover:opacity-95 transition shadow-lg text-sm"
            >
              Create Account
            </button>

          </form>

        </div>
      </div>

    </main>
  );
}