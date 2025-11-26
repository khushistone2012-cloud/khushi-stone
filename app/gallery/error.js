"use client";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GalleryError({ error, reset }) {
  useEffect(() => {
    console.error("Gallery Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <AlertTriangle className="text-red-500 w-14 h-14 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-6">
          We couldn’t load the gallery right now. Please try again in a moment.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
}
