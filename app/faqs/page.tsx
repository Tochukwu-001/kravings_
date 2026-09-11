import { FaChevronDown } from "react-icons/fa6";

const FAQS = [
  {
    question: "Is Kravings free to use?",
    answer: "Yes! Browsing recipes, joining the community, and uploading your own dishes is completely free. We want to make African cuisine accessible to everyone."
  },
  {
    question: "Can anyone upload a recipe?",
    answer: "Absolutely. Whether you are a professional chef, a street food vendor, or a home cook sharing your grandmother's secret recipe, you are welcome to publish on Kravings. All recipes go through a quick community review to ensure ingredients are clear."
  },
  {
    question: "I don't live in Africa. Can I still find these ingredients?",
    answer: "Yes! Many of our recipes include a 'Substitutions' section designed specifically for international cooks. We also have community forums where you can ask what local ingredients work best in your specific country."
  },
  {
    question: "How do I save recipes I like?",
    answer: "Once you create a free account, you can click the 'Heart' icon on any recipe to save it to your personal cookbook profile for easy access later."
  },
  {
    question: "Can I adjust the serving sizes on recipes?",
    answer: "Yes, all verified recipes on Kravings feature an interactive portion calculator. Just type in how many people you want to serve, and the ingredient amounts will automatically adjust."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-[#E73F1E]">Questions</span>
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about the Kravings platform and community.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer marker:content-['']"
            >
              <summary className="flex justify-between items-center font-bold text-lg list-none">
                {faq.question}
                <FaChevronDown className="text-[#E73F1E] transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        
        {/* Support CTA */}
        <div className="mt-16 text-center bg-[#FFDD9C]/30 p-8 rounded-2xl border border-[#FFDD9C]/50">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-slate-700 mb-6">If you couldn't find the answer you're looking for, our team is happy to help.</p>
          <a href="/contact" className="inline-block bg-[#E73F1E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d23517] transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}