"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html>
      <body className="h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center p-6">
        <div className="max-w-md">
          <AlertTriangle size={60} className="mx-auto mb-6 text-yellow-400" />
          <h1 className="text-3xl font-bold mb-2">Something Went Wrong</h1>
          <p className="text-gray-200 mb-6">
            We encountered an unexpected issue. Please try again later or return
            to the homepage.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Retry
            </button>
            <Link
              href="/"
              className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
