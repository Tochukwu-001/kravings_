"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaPlus, 
  FaTrash, 
  FaCloudArrowUp, 
  FaCheck, 
  FaUtensils, 
  FaListCheck, 
  FaImage,
  FaFire
} from "react-icons/fa6";

export const Theme = {
  primaryColor: "#E73F1E",
  secondaryColor: "#FFDD9C"
};

export default function SubmitRecipe() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    origin: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "Medium",
    ingredients: [{ amount: "", name: "" }],
    instructions: [""],
    tags: [] as string[],
    spiciness: "Medium",
    image: null as File | null,
  });

  // African Nations List for Origin Select
  const africanNations = [
    "Nigeria", "Ghana", "Senegal", "Ethiopia", "Kenya", "South Africa", 
    "Morocco", "Cameroon", "Ivory Coast", "Jamaica / Caribbean Diaspora", "Other"
  ];

  // Helper Functions
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Ingredient Handlers
  const handleIngredientChange = (index: number, field: "amount" | "name", value: string) => {
    const updated = [...formData.ingredients];
    updated[index][field] = value;
    handleInputChange("ingredients", updated);
  };

  const addIngredient = () => {
    handleInputChange("ingredients", [...formData.ingredients, { amount: "", name: "" }]);
  };

  const removeIngredient = (index: number) => {
    if (formData.ingredients.length > 1) {
      handleInputChange("ingredients", formData.ingredients.filter((_, i) => i !== index));
    }
  };

  // Instruction Handlers
  const handleInstructionChange = (index: number, value: string) => {
    const updated = [...formData.instructions];
    updated[index] = value;
    handleInputChange("instructions", updated);
  };

  const addInstruction = () => {
    handleInputChange("instructions", [...formData.instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    if (formData.instructions.length > 1) {
      handleInputChange("instructions", formData.instructions.filter((_, i) => i !== index));
    }
  };

  // Tag Handlers
  const toggleTag = (tag: string) => {
    const currentTags = formData.tags;
    if (currentTags.includes(tag)) {
      handleInputChange("tags", currentTags.filter((t) => t !== tag));
    } else {
      handleInputChange("tags", [...currentTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span 
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-orange-100 mb-3 inline-block"
            style={{ color: Theme.primaryColor }}
          >
            Share Your Culinary Art
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Submit a Recipe</h1>
          <p className="text-neutral-500 mt-2 text-sm md:text-base">
            Help us preserve and celebrate Africa's finest flavors with the global community.
          </p>
        </div>

        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-100 text-center space-y-6">
            <div 
              className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white text-3xl shadow-lg"
              style={{ backgroundColor: Theme.primaryColor }}
            >
              <FaCheck />
            </div>
            <h2 className="text-3xl font-bold">Recipe Submitted!</h2>
            <p className="text-neutral-600 max-w-md mx-auto">
              Thank you for contributing to Kravings! Your recipe <span className="font-semibold text-neutral-900">"{formData.title || "Untitled Dish"}"</span> is being reviewed and will be live shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    title: "", description: "", origin: "", prepTime: "", cookTime: "", servings: "", difficulty: "Medium",
                    ingredients: [{ amount: "", name: "" }], instructions: [""], tags: [], spiciness: "Medium", image: null
                  });
                }}
                className="px-6 py-3 rounded-full font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                Submit Another Recipe
              </button>
              <Link 
                href="/" 
                className="px-6 py-3 rounded-full font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: Theme.primaryColor }}
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          /* FORM CONTAINER */
          <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
            
            {/* PROGRESS BAR */}
            <div className="bg-neutral-900 px-6 py-4 text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-neutral-400">Step {currentStep} of 3</span>
                <span className="text-xs font-semibold" style={{ color: Theme.secondaryColor }}>
                  {currentStep === 1 && "Basic Info"}
                  {currentStep === 2 && "Ingredients & Steps"}
                  {currentStep === 3 && "Media & Details"}
                </span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${(currentStep / 3) * 100}%`,
                    backgroundColor: Theme.primaryColor 
                  }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* STEP 1: BASIC INFORMATION */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 border-b pb-3 border-neutral-100">
                    <FaUtensils style={{ color: Theme.primaryColor }} />
                    <h2 className="text-xl font-bold">Recipe Overview</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Recipe Title *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Smoky West African Jollof Rice"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Country / Region of Origin *</label>
                      <select 
                        required
                        value={formData.origin}
                        onChange={(e) => handleInputChange("origin", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E] bg-white"
                      >
                        <option value="">Select Region</option>
                        {africanNations.map((nation) => (
                          <option key={nation} value={nation}>{nation}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Difficulty Level</label>
                      <select 
                        value={formData.difficulty}
                        onChange={(e) => handleInputChange("difficulty", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E] bg-white"
                      >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Expert">Expert / Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Short Story or Description *</label>
                    <textarea 
                      rows={3}
                      required
                      placeholder="Share a brief introduction, memories, or what makes this dish special..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-2">Prep Time (mins)</label>
                      <input 
                        type="number" 
                        placeholder="15"
                        value={formData.prepTime}
                        onChange={(e) => handleInputChange("prepTime", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-2">Cook Time (mins)</label>
                      <input 
                        type="number" 
                        placeholder="45"
                        value={formData.cookTime}
                        onChange={(e) => handleInputChange("cookTime", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-2">Servings</label>
                      <input 
                        type="number" 
                        placeholder="4"
                        value={formData.servings}
                        onChange={(e) => handleInputChange("servings", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: INGREDIENTS & INSTRUCTIONS */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* Ingredients Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3 border-neutral-100">
                      <div className="flex items-center gap-3">
                        <FaListCheck style={{ color: Theme.primaryColor }} />
                        <h2 className="text-xl font-bold">Ingredients</h2>
                      </div>
                      <span className="text-xs text-neutral-500">Amount & Name</span>
                    </div>

                    {formData.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex gap-3 items-center">
                        <input 
                          type="text" 
                          placeholder="e.g. 2 cups / 500g"
                          value={ing.amount}
                          onChange={(e) => handleIngredientChange(idx, "amount", e.target.value)}
                          className="w-1/3 px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                        />
                        <input 
                          type="text" 
                          placeholder="e.g. Long-grain parboiled rice"
                          value={ing.name}
                          onChange={(e) => handleIngredientChange(idx, "name", e.target.value)}
                          className="w-2/3 px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                        />
                        <button 
                          type="button" 
                          onClick={() => removeIngredient(idx)}
                          className="text-neutral-400 hover:text-red-500 p-2 transition-colors"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    ))}

                    <button 
                      type="button" 
                      onClick={addIngredient}
                      className="flex items-center gap-2 text-sm font-bold mt-2 hover:underline"
                      style={{ color: Theme.primaryColor }}
                    >
                      <FaPlus size={12} /> Add Another Ingredient
                    </button>
                  </div>

                  {/* Instructions Section */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 border-b pb-3 border-neutral-100">
                      <FaUtensils style={{ color: Theme.primaryColor }} />
                      <h2 className="text-xl font-bold">Preparation Steps</h2>
                    </div>

                    {formData.instructions.map((step, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span 
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-2"
                          style={{ backgroundColor: Theme.primaryColor }}
                        >
                          {idx + 1}
                        </span>
                        <textarea 
                          rows={2}
                          placeholder={`Step ${idx + 1} instructions...`}
                          value={step}
                          onChange={(e) => handleInstructionChange(idx, e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E73F1E]"
                        />
                        <button 
                          type="button" 
                          onClick={() => removeInstruction(idx)}
                          className="text-neutral-400 hover:text-red-500 p-2 mt-2 transition-colors"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    ))}

                    <button 
                      type="button" 
                      onClick={addInstruction}
                      className="flex items-center gap-2 text-sm font-bold mt-2 hover:underline"
                      style={{ color: Theme.primaryColor }}
                    >
                      <FaPlus size={12} /> Add Next Step
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: MEDIA & TAGS */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* Photo Upload */}
                  <div>
                    <div className="flex items-center gap-3 border-b pb-3 border-neutral-100 mb-4">
                      <FaImage style={{ color: Theme.primaryColor }} />
                      <h2 className="text-xl font-bold">Dish Image</h2>
                    </div>

                    <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer">
                      <FaCloudArrowUp className="mx-auto text-3xl mb-3 text-neutral-400" />
                      <p className="text-sm font-bold text-neutral-700">Click to upload or drag & drop</p>
                      <p className="text-xs text-neutral-500 mt-1">High-quality JPG, PNG up to 10MB</p>
                      <input 
                        type="file" 
                        accept="image/*"
                        className="hidden" 
                        id="recipe-image"
                        onChange={(e) => e.target.files && handleInputChange("image", e.target.files[0])}
                      />
                      <label htmlFor="recipe-image" className="absolute inset-0 cursor-pointer" />
                    </div>
                  </div>

                  {/* Spiciness Level */}
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2">
                      <FaFire className="text-red-500" /> Spiciness Level
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {["Mild", "Medium", "Spicy", "Extra Hot"].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleInputChange("spiciness", level)}
                          className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            formData.spiciness === level 
                              ? "border-transparent text-white shadow-md" 
                              : "border-neutral-200 text-neutral-600 bg-white"
                          }`}
                          style={{
                            backgroundColor: formData.spiciness === level ? Theme.primaryColor : undefined
                          }}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Tags */}
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-3">Dietary & Cooking Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Halal", "Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free", 
                        "Nut-Free", "One-Pot", "Street Food", "Traditional", "Quick & Easy"
                      ].map((tag) => {
                        const isSelected = formData.tags.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleTag(tag)}
                            className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                              isSelected 
                                ? "bg-neutral-900 text-white border-neutral-900" 
                                : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                            }`}
                          >
                            {isSelected && "✓ "} {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center pt-6 border-t border-neutral-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 text-sm transition-colors"
                  >
                    <FaArrowLeft /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-transform hover:scale-105"
                    style={{ backgroundColor: Theme.primaryColor }}
                  >
                    Next Step <FaArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                    style={{ backgroundColor: Theme.primaryColor }}
                  >
                    Submit Recipe <FaCheck />
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </div>
    </main>
  );
}