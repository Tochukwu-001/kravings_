import { auth, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaArrowRightLong, 
  FaUtensils, 
  FaStar 
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default async function AccountAuth({ searchParams }: { searchParams?: { mode?: string } }) {
  // Determine state via URL search parameters instead of React state for server-side rendering
  const isSignUp = searchParams?.mode === "register";

  const session = await auth();
  console.log(session);
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-900 font-sans flex flex-col justify-between">
      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-wider text-stone-900">
          KRAVINGS<span className="text-[#E73F1E]">.</span>
        </Link>
        <Link 
          href="/" 
          className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-[#E73F1E] transition-colors"
        >
          &larr; Back to Home
        </Link>
      </header>

      {/* MAIN AUTH SECTION */}
      <section className="py-8 px-6 max-w-7xl mx-auto w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-stone-200/80 shadow-xl overflow-hidden">
          
          {/* LEFT COLUMN: BRAND PROMO PANEL (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 relative bg-stone-900 text-white min-h-[640px] p-12 flex-col justify-between overflow-hidden">
            {/* Background Overlay Image & Blurs */}
            <Image 
              src="/bg.jpg" 
              alt="African culinary backdrop" 
              fill 
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E73F1E]/30 blur-3xl z-10 pointer-events-none" />

            {/* Top Brand Pill */}
            <div className="relative z-20">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[#FFDD9C]">
                <FaUtensils /> Global Food Community
              </span>
            </div>

            {/* Middle Quote / Headline */}
            <div className="relative z-20 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <blockquote className="text-2xl font-bold leading-snug">
                &ldquo;Kravings re-connected me to the traditional home-cooked recipes of my childhood. Sharing my mother&apos;s Egusi recipe with foodies globally has been magical!&rdquo;
              </blockquote>
              <div className="pt-2">
                <p className="font-bold text-sm text-white">Chef Ngozi E.</p>
                <p className="text-xs text-stone-400">Verified Creator & Food Enthusiast</p>
              </div>
            </div>

            {/* Bottom Footer note */}
            <div className="relative z-20 pt-6 border-t border-stone-800 flex justify-between items-center text-xs text-stone-400">
              <span>Join over 85,000+ food lovers</span>
              <span className="text-[#FFDD9C] font-semibold">100% Free Access</span>
            </div>
          </div>

          {/* RIGHT COLUMN: AUTHENTICATION FORM */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12">
            
            {/* TAB SWITCHER */}
            <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {isSignUp ? "Create Your Account" : "Welcome Back"}
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  {isSignUp 
                    ? "Join Kravings to publish recipes, save favorites, and connect." 
                    : "Sign in to access your saved dishes and recipe book."}
                </p>
              </div>

              {/* Mode Toggle Pills replaced with Next.js Links routing to URL queries */}
              <div className="bg-stone-100 p-1 rounded-full flex gap-1 flex-shrink-0">
                <Link
                  href="?mode=login"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    !isSignUp 
                      ? "bg-white text-stone-900 shadow-sm" 
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="?mode=register"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isSignUp 
                      ? "bg-[#E73F1E] text-white shadow-sm" 
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  Register
                </Link>
              </div>
            </div>

            {/* 1. GOOGLE AUTH BUTTON ROUTE */}
            <div className="space-y-4">
                <form
                    action={async () => {
                        "use server"
                    await signIn("google")
                }}
                >
              <button
                className="w-full py-3.5 px-6 rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 transition-all font-semibold text-stone-700 text-sm flex items-center justify-center gap-3 shadow-sm hover:shadow"
              >
                <FcGoogle className="text-xl" />
                <span>Continue with Google</span>
              </button>
    </form>

              {/* DIVIDER */}
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-stone-200 w-full" />
                <span className="bg-white px-4 text-xs uppercase font-bold text-stone-400 tracking-wider absolute">
                  or email
                </span>
              </div>
            </div>

            {/* 2. EMAIL / PASSWORD FORM (Using Native HTML Action Method) */}
            <form action="/api/auth/submit" method="POST" className="space-y-5">
              
              {/* Name Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Full Name</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Amara Okafor"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                      required
                    />
                    <FaUser className="absolute left-4 text-stone-400 text-sm" />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Email Address</label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="amara@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                    required
                  />
                  <FaEnvelope className="absolute left-4 text-stone-400 text-sm" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600">Password</label>
                  {!isSignUp && (
                    <Link href="/forgot-password" className="text-xs font-semibold text-[#E73F1E] hover:underline">
                      Forgot Password?
                    </Link>
                  )}
                </div>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#E73F1E] focus:bg-white transition-colors"
                    required
                  />
                  <FaLock className="absolute left-4 text-stone-400 text-sm" />
                </div>
              </div>

              {/* Terms Checkbox (Sign Up Only) */}
              {isSignUp && (
                <div className="flex items-start gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    name="terms"
                    id="terms" 
                    className="mt-1 rounded border-stone-300 text-[#E73F1E] focus:ring-[#E73F1E]" 
                    required 
                  />
                  <label htmlFor="terms" className="text-xs text-stone-500 leading-snug">
                    I agree to the <Link href="/terms" className="underline text-stone-800">Terms of Service</Link> and <Link href="/privacy" className="underline text-stone-800">Privacy Policy</Link>.
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#E73F1E] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#d03517] transition-all shadow-md hover:shadow-lg text-sm mt-4"
              >
                <span>{isSignUp ? "Create Free Account" : "Sign In to Kravings"}</span>
                <FaArrowRightLong />
              </button>
            </form>

            {/* BOTTOM SWITCH FOOTER */}
            <div className="text-center mt-8 text-xs text-stone-500">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <Link 
                    href="?mode=login" 
                    className="font-bold text-[#E73F1E] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account yet?{" "}
                  <Link 
                    href="?mode=register" 
                    className="font-bold text-[#E73F1E] hover:underline"
                  >
                    Register for Free
                  </Link>
                </p>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="py-6 px-6 text-center text-xs text-stone-500 border-t border-stone-200/60 bg-white/50">
        <p>&copy; {new Date().getFullYear()} Kravings. All rights reserved.</p>
      </footer>
    </main>
  );
}