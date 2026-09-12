import Link from "next/link";
import { 
  FaMagnifyingGlass, 
  FaCircleQuestion, 
  FaChevronDown, 
  FaUtensils, 
  FaUser, 
  FaBookOpen, 
  FaShieldHalved, 
  FaHeadset 
} from "react-icons/fa6";

export default function FAQ() {
  return (
    <main className="min-h-dvh bg-stone-50 text-stone-900 font-sans">
      {/* 1. HERO & SEARCH BANNER */}
      <section className="relative bg-stone-900 text-white py-20 px-6 md:py-28 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E73F1E]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FFDD9C]/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-[#FFDD9C]">
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-[#E73F1E]">Questions</span>
          </h1>
          <p className="text-stone-300 md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to know about exploring, sharing, and cooking African delicacies on Kravings.
          </p>

          {/* Quick Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Search for questions, topics, or keywords..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-stone-800/80 border border-stone-700 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#E73F1E] focus:bg-stone-800 transition-colors shadow-lg"
              />
              <FaMagnifyingGlass className="absolute left-4 text-stone-400 text-lg ml-2" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY QUICK LINKS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <a href="#general" className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-[#E73F1E] transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] group-hover:bg-[#E73F1E] group-hover:text-white transition-colors flex items-center justify-center text-xl">
              <FaCircleQuestion />
            </div>
            <span className="font-bold text-sm text-stone-800">General Info</span>
          </a>

          <a href="#recipes" className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-[#E73F1E] transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#FFDD9C] text-black group-hover:bg-[#E73F1E] group-hover:text-white transition-colors flex items-center justify-center text-xl">
              <FaUtensils />
            </div>
            <span className="font-bold text-sm text-stone-800">Recipe Sharing</span>
          </a>

          <a href="#creators" className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-[#E73F1E] transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#E73F1E]/10 text-[#E73F1E] group-hover:bg-[#E73F1E] group-hover:text-white transition-colors flex items-center justify-center text-xl">
              <FaUser />
            </div>
            <span className="font-bold text-sm text-stone-800">Account & Chefs</span>
          </a>

          <a href="#safety" className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-[#E73F1E] transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 group-hover:bg-[#E73F1E] group-hover:text-white transition-colors flex items-center justify-center text-xl">
              <FaShieldHalved />
            </div>
            <span className="font-bold text-sm text-stone-800">Platform Policies</span>
          </a>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTIONS */}
      <section className="pb-20 px-6 max-w-4xl mx-auto space-y-16">
        
        {/* CATEGORY 1: GENERAL */}
        <div id="general" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="w-8 h-8 rounded-xl bg-[#E73F1E] text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-stone-900">General Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>What is Kravings?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Kravings is a global culinary discovery and social platform dedicated to celebrating African food culture. It allows food lovers, home cooks, and professional chefs to explore, publish, save, and discuss authentic African recipes from across all regions of the continent.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>Is Kravings free to use?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Yes! Kravings is completely free for all users. You can browse thousands of recipes, save your favorite dishes, and share your own cooking creations without any subscription fees.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>Do I need an account to view recipes?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                No, you can browse and view all public recipes freely without an account. However, creating a free account allows you to bookmark recipes, post comments, rate dishes, and share your own recipes with the community.
              </p>
            </details>
          </div>
        </div>

        {/* CATEGORY 2: RECIPE SUBMISSIONS */}
        <div id="recipes" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="w-8 h-8 rounded-xl bg-[#E73F1E] text-white flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold text-stone-900">Recipe Sharing & Submissions</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>How do I submit my own dish or recipe?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Once logged in, click on the &quot;Share Your Dish&quot; button located in the main navigation or CTA banners. You can upload photo(s), add step-by-step instructions, list ingredients, select preparation time, and tag the country or region of origin.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>Can I submit fusion or modern African recipes?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Absolutely! We welcome traditional generational recipes, quick weeknight adaptations, as well as creative African fusion dishes. Just make sure to properly describe your ingredients and inspiration!
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>What photo requirements are needed for submitted dishes?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                We recommend uploading clear, high-resolution original photos (JPEG or PNG) taken in good lighting. Stock photography or images taken from other creators without permission are strictly prohibited.
              </p>
            </details>
          </div>
        </div>

        {/* CATEGORY 3: CREATORS & ACCOUNTS */}
        <div id="creators" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="w-8 h-8 rounded-xl bg-[#E73F1E] text-white flex items-center justify-center text-sm font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-stone-900">Account & Creator Badges</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>How do I get a Verified Creator badge?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Food bloggers, cookbook authors, and professional culinary creators can apply for verification through their profile settings. Once verified, you gain priority placement in search results, custom profile badges, and direct external social linking.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-stone-900 text-lg">
                <span>How do I reset my account password?</span>
                <span className="text-[#E73F1E] transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <p className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                Click on &quot;Sign In&quot; at the top of the page, select &quot;Forgot Password?&quot;, and enter your registered email address. You will receive a password reset link in your inbox within a few minutes.
              </p>
            </details>
          </div>
        </div>

      </section>

      {/* 4. STILL HAVE QUESTIONS CTA */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="rounded-3xl p-10 md:p-14 bg-[#FFDD9C] text-stone-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-white/70 px-3 py-1 rounded-full">
              <FaHeadset /> We&apos;re Here To Help
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold">Still can&apos;t find your answer?</h3>
            <p className="text-stone-800 text-sm md:text-base font-medium">
              Our support team and culinary community managers are just a message away.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="bg-[#E73F1E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#d03517] transition-all shadow-md flex-shrink-0 text-sm md:text-base"
          >
            Contact Customer Support
          </Link>
        </div>
      </section>

    </main>
  );
}