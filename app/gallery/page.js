"use client";



import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { useGalleryStore } from "../../store/galleryStore";

export default function GalleryPage() {
  const categories = ["adgal", "sira", "sadahalli", "factory"];
  const { images } = useGalleryStore();

  return (
    <div className="bg-white text-gray-800 min-h-screen"> {/* 👈 Added full white background */}
      <PageHeader title="Gallery" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Text */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Explore the Elegance of Grey Granite
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-900">Khushi Stone</span>, we
            have been shaping premium grey granite into exquisite slabs and tiles
            since 2012. Click on a category below to discover our{" "}
            <span className="text-gray-900 font-medium">Adgal</span>,{" "}
            <span className="text-gray-900 font-medium">Sira</span>, and{" "}
            <span className="text-gray-900 font-medium">Sadahalli</span>{" "}
            collections, or visit our factory to witness precision craftsmanship
            firsthand.
          </p>
          <div className="mt-4 w-20 h-1 mx-auto bg-blue-900 rounded-full"></div>
          {/* decorative underline */}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/gallery/${cat}`}
              className="flex flex-col items-center bg-gray-50 shadow-lg rounded-lg hover:shadow-2xl transition p-3 sm:p-4"
            >
             <img
             src={images[cat][0]}
             alt={`${cat} grey granite slabs by Khushi Stone`}
             className="w-full h-36 sm:h-48 object-cover rounded-lg mb-2 sm:mb-3"
/>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
                {cat.toUpperCase()}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
