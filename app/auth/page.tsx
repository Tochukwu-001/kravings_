import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function AccountAuth() {
  return (
    <main className="min-h-dvh flex bg-white">
      
      {/* LEFT SIDE - Brand/Image Area (Hidden on mobile) */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-[url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center overflow-hidden">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        {/* Brand Theme Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#E73F1E] rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFDD9C] rounded-full blur-[120px] opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full h-full text-white">
          <Link href="/" className="text-3xl font-bold tracking-widest hover:text-[#FFDD9C] transition-colors w-fit">
            KRAVINGS
          </Link>
          
          <div className="space-y-6 max-w-lg">
            <h1 className="text-5xl font-bold leading-tight">
              Your passport to <span className="text-[#FFDD9C]">Africa's</span> finest dishes.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sign in to save your favorite recipes, share your own kitchen magic, and connect with a global community of food lovers.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Kravings.</p>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE - Auth Form Area */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-gray-50 lg:bg-white relative">
        
        {/* Mobile Back to Home */}
        <Link href="/" className="absolute top-8 left-6 lg:hidden flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#E73F1E] transition-colors">
          <FaArrowLeftLong /> Home
        </Link>

        <div className="w-full max-w-md space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Welcome back</h2>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          {/* Form */}
          <form className="space-y-6 mt-8">
            
            {/* GOOGLE AUTH BUTTON */}
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all focus:outline-none focus:ring-4 focus:ring-gray-100 shadow-sm"
            >
              <FcGoogle size={24} />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <p className="text-sm font-medium text-gray-400">OR CONTINUE WITH EMAIL</p>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="p-3.5 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-[#E73F1E] focus:ring-4 focus:ring-[#E73F1E]/10 transition-all"
                placeholder="chef@example.com"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-sm font-semibold text-[#E73F1E] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input 
                type="password" 
                id="password" 
                className="p-3.5 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-[#E73F1E] focus:ring-4 focus:ring-[#E73F1E]/10 transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#E73F1E] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#c93518] active:scale-[0.98] transition-all shadow-lg shadow-[#E73F1E]/30 mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8 font-medium">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#E73F1E] font-bold hover:underline">
              Create an account
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}