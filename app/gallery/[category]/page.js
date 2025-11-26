// app/gallery/[category]/page.jsx (or .js)
"use client";

import { use, useEffect } from "react"; // 👈 import `use` from react
import { useGalleryStore } from "../../../store/galleryStore";
import Link from "next/link";

// Valid categories and descriptions
const VALID_CATEGORIES = ["adgal", "sira", "sadahalli", "factory"];
const DESCRIPTIONS = {
  adgal: "Adgal grey granite, high-quality slabs from Khushi Stone.",
  sira: "Sira grey granite, perfect for flooring and countertops.",
  sadahalli: "Sadahalli grey granite, premium selection from our factory.",
  factory:
    "Where innovation meets tradition — see how Khushi Stone Factory brings life to stone",
};

// NotFound component for invalid category
function CategoryNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
        Category Not Found
      </h1>
      <p className="text-gray-700 mb-8 text-center max-w-lg text-lg md:text-xl leading-relaxed">
        The category you are looking for does not exist in our gallery. Please
        return to the main gallery page to explore available categories.
      </p>

      <Link
        href="/gallery"
        className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
      >
        ← Back to Gallery
      </Link>
    </div>
  );
}

export default function CategoryPage({ params }) {
  // ⬇️ unwrap the Promise using React.use
  const { category } = use(params); // ✅ no warning, no crash

  const { setCategory, images } = useGalleryStore();

  // Update store when category changes
  useEffect(() => {
    if (VALID_CATEGORIES.includes(category)) {
      setCategory(category);
    }
  }, [category, setCategory]);

  // Render NotFound for invalid category
  if (!VALID_CATEGORIES.includes(category)) {
    return <CategoryNotFound />;
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/gallery"
            className="text-blue-900 hover:text-white border border-blue-900 hover:bg-blue-900 px-4 py-2 rounded-lg transition"
          >
            ← Back to Gallery
          </Link>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
          {category.toUpperCase()}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          {DESCRIPTIONS[category]}
        </p>

        {/* Images Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images[category]?.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg bg-gray-50"
            >
              <img
              src={img}
              alt={`${category} grey granite polished slab from Khushi Stone, Bangalore – Image ${idx + 1}`}
              className="w-full h-80 object-cover"


              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
