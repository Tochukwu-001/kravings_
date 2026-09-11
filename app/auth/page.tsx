"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa6";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#E73F1E]">
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-neutral-900">
            {isSignUp ? "Create an Account" : "Sign In to Kravings"}
          </h1>
          <p className="text-sm text-gray-500">Access and share your favorite dishes.</p>
        </div>

        <button
          type="button"
          onClick={() => alert("Google Auth Triggered")}
          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-full text-sm font-bold hover:bg-stone-50"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-bold text-[#E73F1E] hover:underline"
          >
            {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
          </button>
        </div>
      </div>
    </main>
  );
}