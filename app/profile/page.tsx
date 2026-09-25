import Link from "next/link";
import { FaUser, FaArrowRightFromBracket, FaCheck } from "react-icons/fa6";

export default function ProfileUpdatePage() {
  // Mock user data for server rendering
  const user = {
    name: "Chef Tobi",
    email: "tobi@kravings.africa",
    imageUrl: "", // Leave blank to show the fallback initial avatar
  };

  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      
      {/* 1. HEADER / NAVBAR */}
      <header className="bg-gray-900 text-white py-6 px-5 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-widest text-white">
            KRAVINGS
          </Link>
          
          {/* Server-safe Log Out Button (e.g., pointing to an auth logout API route or action) */}
          <form action="/api/auth/logout" method="POST">
            <button 
              type="submit" 
              className="flex items-center gap-2 bg-white/10 hover:bg-[#E73F1E] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <FaArrowRightFromBracket /> Log Out
            </button>
          </form>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-16 px-5 max-w-4xl mx-auto w-full flex-grow">
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">
          
          {/* USER INFO DISPLAY CARD */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-gray-100 text-center sm:text-left">
            
            {/* Image / Avatar Display */}
            <div className="relative">
              {user.imageUrl ? (
                <img 
                  src={user.imageUrl} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#FFDD9C] shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#FFDD9C] text-[#E73F1E] font-bold text-3xl flex items-center justify-center border-4 border-gray-100 shadow-md">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Name & Email Details */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 font-medium">{user.email}</p>
              <span className="inline-block bg-[#FFDD9C]/30 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mt-1">
                Verified Community Chef
              </span>
            </div>

          </div>

          {/* FORM TO UPDATE NAME ONLY */}
          <div className="max-w-xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">Profile Settings</h2>
              <p className="text-gray-500 text-sm mt-1">Update your display name shown across your recipes and comments.</p>
            </div>

            {/* Note: In a pure Server Component setup, this form submits to a Next.js Server Action */}
            <form action="/api/user/update-name" method="POST" className="space-y-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium text-gray-700">Display Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  defaultValue={user.name} 
                  className="p-3.5 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-[#E73F1E] focus:ring-4 focus:ring-[#E73F1E]/10 transition-all font-medium text-gray-800"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="bg-[#E73F1E] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#c93518] transition-colors shadow-lg shadow-[#E73F1E]/20 flex items-center justify-center gap-2"
              >
                <FaCheck /> Update Name
              </button>

            </form>
          </div>

        </div>

      </section>

      {/* 3. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-sm">© {new Date().getFullYear()} Kravings. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}