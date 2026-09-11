import Link from "next/link";
import { FaChevronDown, FaHeadset, FaArrowRightLong } from "react-icons/fa6";

export default function FAQs() {
  const generalFaqs = [
    {
      question: "What exactly is Kravings?",
      answer: "Kravings is a global platform built to discover, document, and share authentic African dishes. We connect food lovers, home cooks, and chefs to celebrate the rich culinary heritage of Africa."
    },
    {
      question: "Is Kravings free to use?",
      answer: "Absolutely! Browsing recipes, creating an account, and sharing your own dishes with the Kravings community is 100% free."
    },
    {
      question: "Do I need an account to view recipes?",
      answer: "No, you can browse and explore all recipes as a guest. However, creating a free account allows you to save your favorite dishes, leave reviews, and share your own recipes."
    }
  ];

  const recipeFaqs = [
    {
      question: "How do I submit my own family recipe?",
      answer: "Once you create an account, simply log in, navigate to your dashboard, and click on 'Share a Recipe'. You can upload images, list ingredients, and provide step-by-step instructions."
    },
    {
      question: "Are the recipes on Kravings authentic?",
      answer: "Yes! Our recipes are crowdsourced from actual home cooks, mothers, and chefs across the African continent and the diaspora. We encourage traditional preparation methods alongside modern twists."
    },
    {
      question: "Can I adjust the serving sizes for recipes?",
      answer: "Yes, our dynamic recipe pages allow you to adjust the serving size, and the ingredient quantities will automatically scale up or down for your convenience."
    },
    {
      question: "How do I save a recipe for later?",
      answer: "When logged in, you will see a heart/bookmark icon on every recipe card. Clicking it will save the dish to your personal 'Kravings Cookbook' in your profile."
    }
  ];

  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gray-900 text-white py-20 px-5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-1/4 -mt-20 w-72 h-72 bg-[#FFDD9C] rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 -mb-20 w-72 h-72 bg-[#E73F1E] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">
            Frequently Asked <span className="text-[#E73F1E]">Questions</span>
          </h1>
          <p className="md:text-lg text-gray-300">
            Everything you need to know about joining the community, sharing recipes, 
            and exploring the flavors of Africa.
          </p>
        </div>
      </section>

      {/* 2. FAQ CONTENT SECTION */}
      <section className="py-20 px-5 max-w-4xl mx-auto w-full flex-grow">
        
        {/* General Questions Category */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center text-sm">1</span>
            General Information
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {generalFaqs.map((faq, index) => (
              <details 
                key={index} 
                className="group border-b border-gray-100 last:border-none"
              >
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-800 hover:text-[#E73F1E] transition-colors text-lg [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-[#E73F1E]">
                    <FaChevronDown />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base animate-[fadeIn_0.3s_ease-in-out]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Recipes & Cooking Category */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#FFDD9C] text-[#E73F1E] flex items-center justify-center text-sm">2</span>
            Recipes & Cooking
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {recipeFaqs.map((faq, index) => (
              <details 
                key={index} 
                className="group border-b border-gray-100 last:border-none"
              >
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-800 hover:text-[#E73F1E] transition-colors text-lg [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-[#E73F1E]">
                    <FaChevronDown />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

      </section>

      {/* 3. STILL NEED HELP CTA */}
      <section className="py-16 px-5 bg-[#FFDD9C]/30 border-t border-[#FFDD9C]/50 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#E73F1E] mx-auto mb-6 shadow-sm border border-[#FFDD9C]">
            <FaHeadset size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Can't find the answer you're looking for? Our friendly team is here to help you out.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#E73F1E] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c93518] transition-colors shadow-lg shadow-[#E73F1E]/30"
          >
            Contact Support <FaArrowRightLong />
          </Link>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-2xl font-bold tracking-widest">KRAVINGS</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}