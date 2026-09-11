"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaUtensils, 
  FaGoogle, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaArrowRight,  
} from "react-icons/fa6";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className="min-h-dvh bg-slate-950 text-slate-800 font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E73F1E]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FFDD9C]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* TOP HEADER / LOGO */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="text-2xl md:text-3xl font-black text-white tracking-wider flex items-center gap-2">
          <FaUtensils className="text-[#E73F1E]" />
          <span>KRAVINGS</span>
        </Link>
        <Link href="/" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">
          Back to Home
        </Link>
      </header>

      {/* AUTH CARD CONTAINER */}
      <section className="w-full max-w-md mx-auto px-6 py-8 relative z-10 my-auto">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100">
          
          {/* TITLE & TOGGLE HEADER */}
          <div className="text-center space-y-2 mb-8">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFDD9C]/60 text-slate-900 inline-block">
              {isSignUp ? "Join the Community" : "Welcome Back"}
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">
              {isSignUp ? "Create an Account" : "Sign in to Kravings"}
            </h1>
            <p className="text-xs text-slate-500">
              {isSignUp 
                ? "Discover authentic African dishes and share your own recipes." 
                : "Access your saved recipes, bookmarks, and chef profile."}
            </p>
          </div>

          {/* GOOGLE AUTHENTICATION BUTTON */}
          <button 
            type="button" 
            onClick={() => alert("Google Auth simulation clicked")}
            className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs py-3.5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-sm mb-6 group"
          >
            <FaGoogle className="text-red-500 text-sm group-hover:scale-110 transition-transform" />
            <span>Continue with Google</span>
          </button>

          {/* DIVIDER */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative bg-white px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Or continue with email
            </div>
          </div>

          {/* EMAIL FORM */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {isSignUp && (
              <div>
                <label htmlFor="fullname" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <input 
                    id="fullname"
                    type="text" 
                    placeholder="Amara Okonkwo" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                    required
                  />
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="auth-email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input 
                  id="auth-email"
                  type="email" 
                  placeholder="amara@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  required
                />
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="auth-password" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                {!isSignUp && (
                  <a href="#" className="text-[11px] font-bold text-[#E73F1E] hover:underline">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <input 
                  id="auth-password"
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-all"
                  required
                />
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#E73F1E] text-white font-bold text-xs py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#E73F1E]/20 mt-2"
            >
              <span>{isSignUp ? "Create Account" : "Sign In"}</span>
              <FaArrowRight className="text-[10px]" />
            </button>

          </form>

          {/* SWITCH BETWEEN SIGN IN AND SIGN UP */}
          <div className="text-center pt-6 mt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              {isSignUp ? "Already have an account?" : "Don't have an account yet?"}{" "}
              <button 
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-bold text-[#E73F1E] hover:underline ml-1"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER TEXT */}
      <footer className="w-full py-6 text-center text-[11px] text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Kravings Inc. All rights reserved.</p>
      </footer>

    </main>
  );
}