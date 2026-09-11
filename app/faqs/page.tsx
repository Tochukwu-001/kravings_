"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaChevronDown, 
  FaMagnifyingGlass, 
  FaArrowRightLong, 
  FaCircleQuestion, 
  FaUtensils, 
  FaUser, 
  FaShieldHalved 
} from "react-icons/fa6";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is Kravings?",
    answer: "Kravings is a global community platform dedicated to discovering, sharing, and preserving authentic African recipes and culinary heritage. Whether you are an experienced chef or a home cook, Kravings helps you share your favorite dishes with food lovers worldwide.",
  },
  {
    category: "General",
    question: "Is Kravings free to use?",
    answer: "Yes! Creating an account, browsing recipes, interacting with community members, and publishing your own dishes are completely free.",
  },
  {
    category: "General",
    question: "Can non-African dishes be shared on Kravings?",
    answer: "While our core focus is celebrating African and diaspora cuisines, we welcome fusion dishes and recipes inspired by regional flavors across the continent.",
  },

  // Recipes & Cooking
  {
    category: "Recipes",
    question: "How do I submit my own recipe?",
    answer: "Once logged in, click the 'Share Your Recipe' button in your account dashboard. Fill out the step-by-step form with your ingredients, preparation instructions, cook time, and photos of your finished dish.",
  },
  {
    category: "Recipes",
    question: "Can I save recipes to cook later?",
    answer: "Yes, logged-in users can click the heart icon on any recipe card to save it directly to their personal bookmarked collection.",
  },
  {
    category: "Recipes",
    question: "What if I can't find specific African ingredients locally?",
    answer: "Many of our contributors include common substitute options in their recipe descriptions. You can also ask questions in the comment section of any recipe to get recommendations from the community.",
  },

  // Account & Community
  {
    category: "Account",
    question: "How do I edit or delete a recipe I published?",
    answer: "Go to your Profile page, select the recipe you wish to modify, and click 'Edit' or 'Delete' from the options menu on the recipe card.",
  },
  {
    category: "Account",
    question: "How do community guidelines work?",
    answer: "We strive to keep Kravings a welcoming space. Respectful comments, genuine reviews, and original recipe contributions are expected from all members. Unfriendly behavior or plagiarism will result in account moderation.",
  },
];

const CATEGORIES = [
  { name: "All", icon: FaCircleQuestion },
  { name: "General", icon: FaShieldHalved },
  { name: "Recipes", icon: FaUtensils },
  { name: "Account", icon: FaUser },
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-dvh flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E73F1E] text-white">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-[#FFDD9C]">Questions</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Have questions about Kravings? Find answers to commonly asked questions about recipes, account settings, and our community guidelines.
          </p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto mt-6">
            <input 
              type="text" 
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-slate-900 shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E] placeholder:text-slate-400"
            />
            <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          </div>
        </div>
      </section>

      {/* 2. Category Filters & Accordion List */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full flex-grow">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  isActive 
                    ? "bg-[#E73F1E] text-white shadow-md" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                <Icon className={isActive ? "text-white" : "text-slate-400"} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 md:text-lg">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#FFDD9C] text-[#E73F1E]" : "bg-slate-100 text-slate-500"}`}>
                      <FaChevronDown className="text-xs" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 p-8">
            <p className="text-slate-500 text-base font-medium">No questions found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-[#E73F1E] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. Still Have Questions CTA */}
      <section className="py-16 px-6 bg-white border-t border-slate-200/60 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Still Have Questions?</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Can’t find what you are looking for? Reach out to our support team and we’ll get back to you shortly.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#E73F1E] text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-700 transition shadow-lg text-sm uppercase tracking-wide"
            >
              Contact Support <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}