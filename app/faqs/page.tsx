"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaUtensils, 
  FaMagnifyingGlass,  
  FaChevronDown, 
  FaChevronUp, 
  FaBookOpen, 
  FaUserCheck, 
  FaHandshake, 
  FaComments,
  FaArrowRight,
  FaLightbulb
} from "react-icons/fa6";

// FAQ Categories
const categories = [
  { id: "all", label: "All Questions", },
  { id: "general", label: "General & Platform", icon: <FaUtensils /> },
  { id: "recipes", label: "Recipes & Cooking", icon: <FaBookOpen /> },
  { id: "account", label: "Account & Community", icon: <FaUserCheck /> },
  { id: "partnerships", label: "Chefs & Partnerships", icon: <FaHandshake /> },
];

// FAQ Data
const faqData = [
  {
    id: 1,
    category: "general",
    question: "What is Kravings?",
    answer: "Kravings is a global community platform dedicated to celebrating, preserving, and sharing authentic African dishes and culinary stories. From traditional home recipes to modern fusion creations, Kravings connects food lovers around the world."
  },
  {
    id: 2,
    category: "general",
    question: "Is Kravings free to use?",
    answer: "Yes, 100%! Exploring recipes, saving favorites, interacting with community members, and publishing your own dishes on Kravings is completely free."
  },
  {
    id: 3,
    category: "general",
    question: "Which African regions and cuisines are featured?",
    answer: "We cover all 5 major regions: West, East, North, Southern, and Central Africa. You will find dishes ranging from Nigerian Jollof and Senegalese Thieboudienne to Ethiopian Doro Wat, Moroccan Tagine, South African Bobotie, and many regional street food favorites."
  },
  {
    id: 4,
    category: "recipes",
    question: "How do I publish my own recipe on Kravings?",
    answer: "Once you create a free account, click on 'Publish Your Dish' or go to your creator dashboard. You can upload photo guides, list ingredients with regional substitutions, prep times, and step-by-step cooking instructions."
  },
  {
    id: 5,
    category: "recipes",
    question: "What if I can't find traditional ingredients locally?",
    answer: "Every recipe on Kravings includes an 'Ingredient Substitutes' section created by our community and chefs, making it easy to adapt recipes using locally available produce anywhere in the world."
  },
  {
    id: 6,
    category: "recipes",
    question: "Can I edit or delete a recipe after publishing?",
    answer: "Yes, you can edit your recipes anytime from your profile dashboard under 'My Published Dishes' to update steps, refine ingredients, or add better photos."
  },
  {
    id: 7,
    category: "account",
    question: "How do I save recipes for later?",
    answer: "Simply click the heart or bookmark icon on any dish card. All your saved dishes will be organized in your personal profile under 'Saved Recipes'."
  },
  {
    id: 8,
    category: "account",
    question: "How do community badges work?",
    answer: "Badges are earned by engaging with the platform—such as sharing your first 5 recipes, posting photo reviews, or receiving top ratings from other foodies."
  },
  {
    id: 9,
    category: "partnerships",
    question: "How can professional chefs get verified?",
    answer: "Chefs, caterers, and culinary creators can apply for a Verified Creator badge in their account settings. Verification unlocks special profiling, priority recipe placement, and access to creator workshops."
  },
  {
    id: 10,
    category: "partnerships",
    question: "How do brand sponsorships and restaurant features work?",
    answer: "Food brands, spice companies, and restaurants can partner with Kravings to feature sponsored recipes, ingredient spotlights, or community challenges. Head over to our Contact page to get in touch with our team."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Open first FAQ by default

  // Toggle Accordion
  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Filter FAQs based on category & search query
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800 font-sans">
      

      {/* HERO & SEARCH SECTION */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-950"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 text-[#FFDD9C] border border-white/10 inline-flex items-center gap-2">
          
            <span>Help Center</span>
          </span>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            How can we <span className="text-[#E73F1E]">help you?</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Find quick answers to common questions about recipes, account settings, publishing your dishes, and community guidelines.
          </p>

          {/* SEARCH INPUT BAR */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers (e.g. 'submitting recipe', 'badges')..."
                className="w-full bg-white text-slate-900 placeholder-slate-400 rounded-full py-4 pl-12 pr-6 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
              />
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        
        {/* CATEGORY TABS */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? "bg-[#E73F1E] text-white border-[#E73F1E] shadow-lg shadow-[#E73F1E]/20"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className={activeCategory === cat.id ? "text-white" : "text-[#E73F1E]"}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#E73F1E] shadow-md" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 bg-white hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base md:text-lg">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#FFDD9C] text-slate-900" : "bg-slate-100 text-slate-500"
                    }`}>
                      {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <FaLightbulb className="text-4xl text-[#FFDD9C] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try refining your search term or selecting a different category.</p>
              <button 
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="mt-4 text-xs font-bold text-[#E73F1E] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="mx-6 max-w-5xl lg:mx-auto my-16 rounded-3xl bg-slate-900 text-white overflow-hidden relative shadow-2xl">
        <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFDD9C]">Still have questions?</span>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              We&apos;re here to help you anytime
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Can&apos;t find the answer you are looking for? Reach out to our community support team and we will reply within 24 hours.
            </p>
          </div>
          <div>
            <Link 
              href="/contact" 
              className="bg-[#E73F1E] text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:opacity-90 transition-all shadow-xl text-sm"
            >
              <FaComments />
              <span>Contact Support</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}