"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaPlus, 
  FaMinus, 
  FaCircleQuestion, 
  FaEnvelope, 
  FaMagnifyingGlass 
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

const faqData = [
  {
    question: "What is Kravings?",
    answer: "Kravings is a global culinary community dedicated to discovering, sharing, and celebrating the rich and diverse flavors of African cuisine. Whether you're a professional chef or a home cook, Kravings is your digital cookbook for authentic African dishes."
  },
  {
    question: "Is it free to join and submit recipes?",
    answer: "Yes, absolutely! Creating an account, browsing recipes, and sharing your own culinary masterpieces on Kravings is 100% free. We believe food is meant to be shared with everyone."
  },
  {
    question: "Can I post modern twists on traditional recipes?",
    answer: "Definitely! While we heavily emphasize preserving authentic, traditional recipes, we also love seeing how culinary traditions evolve. Whether it's a centuries-old family secret or a modern fusion dish, there's a place for it here."
  },
  {
    question: "How do I save my favorite recipes?",
    answer: "Once you create a free account and log in, you can click the 'Heart' icon on any recipe card to save it to your personal 'Favorites' dashboard for quick access later."
  },
  {
    question: "How are dietary restrictions handled?",
    answer: "When submitting a recipe, creators can add tags such as Vegan, Gluten-Free, Halal, or Nut-Free. As a user, you can easily use our search filters to find meals that fit your specific dietary needs."
  },
  {
    question: "Can I connect with other chefs and home cooks?",
    answer: "Yes! You can leave reviews, ask questions in the comments section of any recipe, and follow your favorite creators to get notified whenever they post a new dish."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqData.filter(
    (faq) => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 font-sans pb-24">
      
      {/* 1. HEADER & SEARCH SECTION */}
      <section className="bg-neutral-950 text-white pt-24 pb-20 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative background blur */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" 
          style={{ backgroundColor: Theme.primaryColor }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <div className="flex justify-center mb-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20"
              style={{ backgroundColor: Theme.primaryColor }}
            >
              <FaCircleQuestion size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            How can we help you?
          </h1>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about navigating Kravings, sharing recipes, and joining our community.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-8">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
              <FaMagnifyingGlass />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E73F1E] focus:ring-1 focus:ring-[#E73F1E] transition-all"
            />
          </div>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="px-6 md:px-12 -mt-10 relative z-20">
        <div className="max-w-3xl mx-auto space-y-4">
          
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div 
                  key={idx} 
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "shadow-md border-transparent" : "shadow-sm border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <h3 className={`text-lg font-bold pr-8 transition-colors ${isOpen ? "text-[#E73F1E]" : "text-neutral-800"}`}>
                      {faq.question}
                    </h3>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      style={{ 
                        backgroundColor: isOpen ? Theme.primaryColor : "#f5f5f5",
                        color: isOpen ? "white" : "#525252"
                      }}
                    >
                      {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                    </div>
                  </button>
                  
                  {/* Tailwind trick for smooth accordion animation */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-50 pt-4 mt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white p-12 rounded-2xl text-center shadow-sm border border-neutral-200">
              <p className="text-neutral-500 text-lg">No questions found matching "<span className="font-semibold text-neutral-900">{searchQuery}</span>".</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS (CTA) */}
      <section className="px-6 md:px-12 mt-20">
        <div 
          className="max-w-3xl mx-auto rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-lg"
          style={{ backgroundColor: Theme.secondaryColor }}
        >
          {/* Subtle background circles for design flair */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-extrabold text-neutral-900">Still have questions?</h2>
            <p className="text-neutral-800 max-w-md mx-auto text-lg">
              Can't find the answer you're looking for? Our community team is here to help you out.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: Theme.primaryColor }}
            >
              <FaEnvelope /> Contact Support
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}