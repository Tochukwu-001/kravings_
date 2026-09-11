"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { 
  FaArrowRightLong, 
  FaChevronDown, 
  FaMagnifyingGlass, 
  FaCircleQuestion,
  FaUtensils,
  FaUser,
  FaBookOpen,
  FaShieldHalved,
  FaMessage,
  FaXmark
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

const CATEGORIES = [
  { id: "all", name: "All Questions", icon: FaCircleQuestion },
  { id: "recipes", name: "Recipes & Ingredients", icon: FaUtensils },
  { id: "submissions", name: "Publishing & Community", icon: FaBookOpen },
  { id: "account", name: "Account & Profile", icon: FaUser },
  { id: "safety", name: "Guidelines & Privacy", icon: FaShieldHalved },
];

const FAQ_DATA = [
  {
    id: 1,
    category: "recipes",
    question: "How are recipe ingredient quantities standardized on Kravings?",
    answer: "Recipes specify metric (grams/milliliters) and imperial (cups/ounces) units. For traditional African seasonings or specialty ingredients, creators include local names alongside global substitutions."
  },
  {
    id: 2,
    category: "recipes",
    question: "Can I adjust serving sizes automatically for a recipe?",
    answer: "Yes. When viewing any individual recipe page, click the 'Serving Adjuster' tool to scale ingredient proportions up or down based on your party size."
  },
  {
    id: 3,
    category: "submissions",
    question: "What happens after I submit a recipe to Kravings?",
    answer: "Submissions enter our moderation queue. Our culinary team reviews photos and formatting within 24 hours to ensure step-by-step clarity before publishing it to the public feed."
  },
  {
    id: 4,
    category: "submissions",
    question: "Can I publish traditional family recipes without exact measurements?",
    answer: "Absolutely! Traditional cooking often relies on intuition and taste. You can note approximate measurements and add chef's notes describing key visual or texture cues (e.g., 'until the oil rises to the top')."
  },
  {
    id: 5,
    category: "account",
    question: "Is creating a Kravings account free?",
    answer: "Yes, Kravings is completely free for home cooks, food lovers, and creators. Creating an account lets you save recipes, follow creators, and publish your own dishes."
  },
  {
    id: 6,
    category: "account",
    question: "How do I save recipes for offline cooking?",
    answer: "Registered users can tap the bookmark icon on any recipe card to save it to their personal 'Saved Cookbook' tab for quick access anytime."
  },
  {
    id: 7,
    category: "safety",
    question: "How does Kravings handle dietary and allergen warnings?",
    answer: "Creators are required to tag common allergens (nuts, seafood, gluten, dairy). You can also filter recipes in search by specific dietary preferences like Vegetarian, Vegan, Halal, or Gluten-Free."
  },
  {
    id: 8,
    category: "safety",
    question: "How do I report plagiarized content or incorrect attribution?",
    answer: "If you spot a recipe copied without permission, click the 'Report' button on the recipe page or contact support directly. We respect culinary authorship and investigate reports within 12 hours."
  }
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Generate JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-dvh font-sans text-neutral-800 bg-white">
      {/* SEO Schema Injection */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
   
      {/* HERO SECTION WITH SEARCH */}
      <section className="min-h-[55vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div clas   
     sName="min-h-[55vh] bg-black/75 text-white flex flex-col justify-center items-center px-6 pt-20">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6 flex flex-col items-center">
            <span className="text-[#E73F1E] uppercase tracking-widest text-xs md:text-sm font-bold bg-[#FFDD9C]/20 px-4 py-1 rounded-full">
              Help Center & FAQs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
              How Can We <span className="text-[#FFDD9C]">Help You?</span>
            </h1>

            {/* SEARCH INPUT BAR */}
            <div className="w-full relative max-w-xl pt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions, ingredients, or account topics..."
                className="w-full pl-12 pr-10 py-4 rounded-full bg-white text-neutral-900 text-sm md:text-base outline-none shadow-xl focus:ring-2 focus:ring-[#E73F1E] transition-all placeholder:text-gray-400"
              />
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neutral-800"
                >
                  <FaXmark size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS & FAQS */}
      <section className="py-20 px-6 lg:px-16 max-w-6xl mx-auto space-y-12">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? "bg-[#E73F1E] text-white shadow-lg shadow-[#E73F1E]/20" 
                    : "bg-stone-100 text-neutral-700 hover:bg-stone-200"
                }`}
              >
                <Icon className={isActive ? "text-[#FFDD9C]" : "text-[#E73F1E]"} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#E73F1E] bg-stone-50/50 shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-neutral-900 text-base md:text-lg">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#E73F1E] text-white" : "bg-stone-100 text-neutral-600"
                    }`}>
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 space-y-3 bg-stone-50 rounded-3xl border border-dashed border-gray-300">
              <FaCircleQuestion className="text-4xl text-gray-300 mx-auto" />
              <h3 className="text-xl font-bold text-neutral-800">No matching questions found</h3>
              <p className="text-gray-500 text-sm">Try searching with a different keyword or browse all categories.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} 
                className="mt-2 px-4 py-2 bg-[#E73F1E] text-white rounded-full font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT BANNER */}
      <section className="bg-[#FFDD9C] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto shadow-md text-[#E73F1E]">
            <FaMessage size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-lg text-neutral-800 max-w-xl mx-auto">
            Can’t find what you're looking for? Reach out directly to our support team and culinary community managers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E73F1E] text-white rounded-full font-bold text-base hover:bg-[#c93619] transition-all shadow-lg hover:scale-105"
          >
            <span>Contact Support</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-12 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-bold tracking-tight text-[#FFDD9C]">
              Kravings.
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed mt-2">
              The ultimate platform to discover, celebrate, and share the rich and diverse culinary heritage of the African continent.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">All Recipes</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Top Chefs</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#FFDD9C] transition">Submit a Dish</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-neutral-400 hover:text-[#FFDD9C] transition">About Us</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-[#FFDD9C] transition">Contact Us</Link></li>
              <li><Link href="/faqs" className="text-[#FFDD9C] transition">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:text-left text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Kravings. All rights reserved.
        </div>
      </footer>
    </main>
  );
}