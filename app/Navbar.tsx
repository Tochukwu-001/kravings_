"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu, IoMdRestaurant } from "react-icons/io";
import { Theme } from "../components/Theme";

interface NavLink {
  label: string;
  url: string;
}

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "FAQs", url: "/faqs" },
  ];

  return (
    <header className="flex items-center justify-between lg:px-20 px-6 py-2 shadow-md relative bg-white z-50">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 z-50">
        <Image
          src="/logo.jpg"
          alt="Kravings Logo"
          width={60}
          height={60}
          className="w-12 h-12 object-contain"
        />
        <p className="text-xl font-bold tracking-tight text-slate-800">Kravings</p>
      </Link>

      {/* Desktop Links */}
      <nav className="ml-auto flex items-center gap-6 max-lg:hidden">
        {navLinks.map((item, i) => (
          <article key={i} className="group">
            <Link href={item.url} className="text-lg font-medium text-slate-700 hover:text-black">
              {item.label}
            </Link>
            <div className="h-0.5 w-full bg-transparent group-hover:bg-[#E73F1E] transition-all duration-300"></div>
          </article>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="flex items-center gap-4 ml-8 max-lg:hidden">
        <Link 
          href="/auth" 
          className="flex items-center border gap-2 px-5 py-1.5 rounded-full border-gray-700 text-base font-medium hover:bg-slate-50 transition-colors"
        >
          Account <FaRegCircleUser />
        </Link>
        <Link 
          href="/add-recipe" 
          style={{ backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor }} 
          className="px-5 py-1.5 rounded-full text-white border text-base font-medium hover:opacity-90 transition-opacity"
        >
          Add Recipe
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setNavOpen(!navOpen)} 
        className="lg:hidden z-50 text-3xl focus:outline-none text-slate-800"
        aria-label="Toggle Navigation"
      >
        {navOpen ? <IoMdRestaurant /> : <IoIosMenu />}
      </button>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-dvh bg-white flex flex-col justify-between pt-24 pb-12 px-8 transition-all duration-300 z-40 ${
          navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 items-center text-center">
          {navLinks.map((item, i) => (
            <Link 
              key={i} 
              href={item.url} 
              onClick={() => setNavOpen(false)} 
              className="text-2xl font-medium text-slate-800 hover:text-[#E73F1E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 w-full">
          <Link 
            href="/account" 
            onClick={() => setNavOpen(false)} 
            className="flex items-center justify-center border gap-2 w-full py-3 rounded-full border-gray-700 text-lg font-medium"
          >
            Account <FaRegCircleUser />
          </Link>
          <Link 
            href="/add-recipe" 
            onClick={() => setNavOpen(false)} 
            style={{ backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor }} 
            className="w-full text-center py-3 rounded-full text-white border text-lg font-medium"
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </header>
  );
}