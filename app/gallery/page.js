"use client";

import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { useGalleryStore } from "../../store/galleryStore";

export default function GalleryPage() {
  const categories = ["adgal", "sira", "sadahalli", "factory"];
  const { images } = useGalleryStore();

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <PageHeader title="Gallery" />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header text */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Explore the Elegance of Grey Granite
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-blue-900">Khushi Stone</span>, we
            have been shaping premium grey granite into exquisite slabs and tiles
            since 2012. Click on a category below to discover our{" "}
            <span className="font-medium text-gray-900">Adgal</span>,{" "}
            <span className="font-medium text-gray-900">Sira</span>, and{" "}
            <span className="font-medium text-gray-900">Sadahalli</span>{" "}
            collections, or visit our factory to witness precision craftsmanship
            firsthand.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/gallery/${cat}`}
              className="bg-gray-50 shadow rounded-lg p-3 hover:shadow-lg transition flex flex-col"
            >
              <img
                src={images[cat][0]}
                alt={`${cat} grey granite`}
                className="w-full h-40 object-cover rounded-md"
              />

              <h3 className="mt-3 text-center font-semibold text-gray-800">
                {cat.toUpperCase()}
              </h3>

              <p className="text-center text-sm text-blue-700 mt-1">
                Click to view photos →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
