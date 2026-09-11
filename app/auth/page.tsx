"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaGoogle, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaArrowRightLong 
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Standard Email/Password Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API authentication call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Successfully ${isLogin ? "logged in" : "registered"}!`);
    }, 1500);
  };

  // Google OAuth Route Trigger
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // NOTE: If using next-auth, you would call: signIn('google', { callbackUrl: '/' })
    console.log("Routing to Google Auth...");
    setTimeout(() => {
      setIsLoading(false);
      alert("Redirecting to Google OAuth...");
    }, 1000);
  };

  return (
    <main className="min-h-screen flex font-sans bg-white">
      
      {/* LEFT HALF: VISUAL BRANDING (Hidden on smaller screens) */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-neutral-900 overflow-hidden">
        {/* Placeholder for an amazing African food image background */}
        <div 
          className="absolute inset-0 bg-[url('/auth-bg.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"
        />
        
        {/* Abstract gradient overlay for brand feel */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" 
        />

        <div className="relative z-10 flex flex-col justify-between p-16 w-full text-white">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter flex items-center gap-1">
            <span style={{ color: Theme.primaryColor }}>K</span>ravings
          </Link>

          <div className="space-y-6 max-w-lg">
            <h2 className="text-5xl font-extrabold leading-tight">
              {isLogin ? "Welcome back to the kitchen." : "Join the global table."}
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {isLogin 
                ? "Discover new recipes, save your favorites, and share your culinary journey with thousands of food lovers."
                : "Create an account to start sharing your family recipes and discovering authentic African dishes from around the world."}
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {/* Simulated Avatars of community members */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-xs">
                    🧑‍🍳
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-400 font-medium">Over 100k+ cooks joined</p>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT HALF: AUTHENTICATION FORM */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 xl:p-24 relative">
        
        {/* Mobile Header (Shows only on small screens) */}
        <div className="absolute top-8 left-6 lg:hidden">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter flex items-center gap-1 text-neutral-900">
            <span style={{ color: Theme.primaryColor }}>K</span>ravings
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {isLogin ? "Sign In" : "Create Account"}
            </h1>
            <p className="text-neutral-500 mt-3">
              {isLogin ? "Enter your details to access your account." : "Let's get you set up with a free account."}
            </p>
          </div>

          {/* GOOGLE AUTH BUTTON */}
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-neutral-700 font-bold hover:bg-neutral-50 hover:border-neutral-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGoogle className="text-red-500" size={18} />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-neutral-200"></div>
            <span className="text-sm font-medium text-neutral-400 uppercase tracking-wider">or email</span>
            <div className="flex-1 h-px bg-neutral-200"></div>
          </div>

          {/* EMAIL/PASSWORD FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
            
            {/* Name Field (Only for Sign Up) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
                    <FaUser />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    required={!isLogin}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Kwame Mensah"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
                  <FaEnvelope />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-neutral-700">Password</label>
                {isLogin && (
                  <Link href="/forgot-password" className="text-sm font-semibold hover:underline" style={{ color: Theme.primaryColor }}>
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
                  <FaLock />
                </div>
                <input 
                  type="password" 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              style={{ backgroundColor: Theme.primaryColor }}
            >
              {isLoading ? "Please wait..." : (isLogin ? "Sign In" : "Create Account")}
              {!isLoading && <FaArrowRightLong />}
            </button>
          </form>

          {/* TOGGLE LOGIN / SIGNUP */}
          <div className="text-center pt-4">
            <p className="text-neutral-600 font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold hover:underline ml-1"
                style={{ color: Theme.primaryColor }}
              >
                {isLogin ? "Sign up for free" : "Log in here"}
              </button>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}