import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <SearchX size={80} className="text-blue-900 mb-6" />
      <h1 className="text-4xl font-bold text-blue-900 mb-2">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
