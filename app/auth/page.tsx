"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaGoogle, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaEye, 
  FaEyeSlash, 
  FaArrowLeft,
  FaCheck
} from "react-icons/fa6";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate backend auth authentication
    setTimeout(() => {
      setIsLoading(false);
      alert(`${isSignUp ? "Account created" : "Signed in"} successfully!`);
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Replace with actual next-auth / supabase / firebase Google handler
    setTimeout(() => {
      setIsLoading(false);
      alert("Redirecting to Google Authentication...");
    }, 800);
  };

  return (
    <main className="min-h-dvh flex flex-col justify-center items-center bg-slate-50 text-slate-800 p-4 md:p-6 relative font-sans">
      
      {/* Top Navigation Back Link */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#E73F1E] transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden my-12">
        
        {/* Header Header */}
        <div className="bg-slate-900 text-white p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 space-y-2">
            <Link href="/" className="text-3xl font-bold tracking-wider inline-block">
              Kravings<span className="text-[#E73F1E]">.</span>
            </Link>
            <p className="text-slate-300 text-xs md:text-sm">
              {isSignUp 
                ? "Join our global community of African food lovers" 
                : "Welcome back! Access your favorite saved recipes"}
            </p>
          </div>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/50 p-1.5">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
              !isSignUp 
                ? "bg-white text-[#E73F1E] shadow-sm" 
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
              isSignUp 
                ? "bg-white text-[#E73F1E] shadow-sm" 
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Create Account
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          
          {/* Google OAuth Option */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition-all shadow-sm active:scale-[0.99] disabled:opacity-70"
          >
            <FaGoogle className="text-red-500 text-base" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs font-semibold text-slate-400 uppercase tracking-widest absolute">
              Or with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            {/* Full Name Input (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required={isSignUp}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Amina Bello"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. amina@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Password
                </label>
                {!isSignUp && (
                  <a href="#" className="text-xs font-semibold text-[#E73F1E] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-11 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] focus:bg-white transition"
                />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded text-[#E73F1E] focus:ring-[#E73F1E] border-slate-300"
                />
                <span className="text-xs text-slate-600 font-medium">
                  {isSignUp ? "I agree to the Terms & Privacy" : "Remember me"}
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-4 rounded-xl bg-[#E73F1E] hover:bg-orange-700 text-white font-bold text-xs md:text-sm uppercase tracking-wider transition shadow-lg active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                "Processing..."
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer Text Toggle */}
          <p className="text-center text-xs text-slate-500 pt-2">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="font-bold text-[#E73F1E] hover:underline"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don't have an account yet?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="font-bold text-[#E73F1E] hover:underline"
                >
                  Sign Up for Free
                </button>
              </>
            )}
          </p>

        </div>
      </div>
    </main>
  );
}