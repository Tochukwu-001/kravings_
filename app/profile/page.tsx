import Image from "next/image";
import Link from "next/link";
import { 
  FaLocationDot, 
  FaCalendarDays, 
  FaUtensils, 
  FaBookmark, 
  FaHeart, 
  FaGear,
  FaClock,
  FaShareNodes,
  FaPlus
} from "react-icons/fa6";

export default function ProfilePage({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab = searchParams?.tab || "published";

  // Mock server data (Replace with your database query or server session)
  const user = {
    name: "Chef Amina Bello",
    username: "@aminacooks",
    role: "Culinary Enthusiast & Recipe Creator",
    avatar: "/logo.jpg", // replace with actual avatar image
    coverImage: "/bg.jpg", // replace with cover image
    bio: "Passionate about preserving and modernizing West African heritage recipes. Sharing family dishes passed down through generations.",
    location: "Lagos, Nigeria",
    joinedDate: "Joined March 2024",
    stats: {
      recipes: 18,
      saved: 124,
      followers: "2.4k",
      following: 310,
    },
  };

  const sampleRecipes = [
    {
      id: "1",
      title: "Authentic Smoky Jollof Rice",
      time: "45 mins",
      likes: 342,
      category: "Main Dish",
      image: "/bg.jpg",
    },
    {
      id: "2",
      title: "Slow-Cooked Egusi Soup",
      time: "1 hr 10 mins",
      likes: 289,
      category: "Soups",
      image: "/bg.jpg",
    },
    {
      id: "3",
      title: "Crispy Plantain Dodo & Sauce",
      time: "20 mins",
      likes: 512,
      category: "Appetizers",
      image: "/bg.jpg",
    },
  ];

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 pb-16 font-sans">
      {/* Cover Header */}
      <div className="relative h-48 md:h-64 w-full bg-slate-800">
        <Image
          src={user.coverImage}
          alt="Cover Image"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Profile Info Card Header */}
        <div className="relative -mt-20 bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Avatar & User Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full ring-4 ring-white shadow-md overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {user.name}
                  </h1>
                  <span className="bg-[#FFDD9C] text-slate-900 font-bold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    PRO CHEF
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500">{user.username}</p>
                <p className="text-sm text-slate-700 font-medium pt-1 max-w-xl">
                  {user.bio}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <FaLocationDot className="text-[#E73F1E]" />
                    {user.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCalendarDays className="text-slate-400" />
                    {user.joinedDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                href="/recipe/create"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#E73F1E] hover:bg-[#c93518] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md shadow-[#E73F1E]/20"
              >
                <FaPlus className="text-xs" /> Add Recipe
              </Link>
              <Link
                href="/settings"
                className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                title="Account Settings"
              >
                <FaGear className="text-base" />
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-center">
            <div className="p-2">
              <p className="text-xl font-black text-slate-900">{user.stats.recipes}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">Published</p>
            </div>
            <div className="p-2">
              <p className="text-xl font-black text-slate-900">{user.stats.saved}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">Saved Recipes</p>
            </div>
            <div className="p-2">
              <p className="text-xl font-black text-slate-900">{user.stats.followers}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">Followers</p>
            </div>
            <div className="p-2">
              <p className="text-xl font-black text-slate-900">{user.stats.following}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-0.5">Following</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Server Routing) */}
        <div className="flex items-center border-b border-slate-200 mb-8 gap-8">
          <Link
            href="?tab=published"
            className={`flex items-center gap-2 pb-4 font-bold text-sm transition-all border-b-2 ${
              activeTab === "published"
                ? "border-[#E73F1E] text-[#E73F1E]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <FaUtensils /> Published Recipes ({user.stats.recipes})
          </Link>

          <Link
            href="?tab=saved"
            className={`flex items-center gap-2 pb-4 font-bold text-sm transition-all border-b-2 ${
              activeTab === "saved"
                ? "border-[#E73F1E] text-[#E73F1E]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <FaBookmark /> Bookmarks ({user.stats.saved})
          </Link>
        </div>

        {/* Tab Content Display */}
        {activeTab === "published" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleRecipes.map((recipe) => (
              <div 
                key={recipe.id} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#E73F1E] transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-slate-400" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <FaHeart className="text-[#E73F1E]" />
                      {recipe.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 text-xl">
              <FaBookmark />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Saved Recipes Collection</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Your bookmarked items appear here. Explore popular recipes to add to your personal digital cookbook.
            </p>
            <Link
              href="/"
              className="inline-block pt-2 text-sm font-bold text-[#E73F1E] hover:underline"
            >
              Browse Community Recipes &rarr;
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}