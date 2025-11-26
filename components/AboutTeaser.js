import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-gray-50 py-10 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-start gap-6">
        {/* Text */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-500 uppercase">ABOUT US</p>

          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">
            WE ARE SPECIALISTS IN THE FIELD OF NATURAL STONE
          </h3>
          
          <p className="mt-3 text-gray-600 leading-relaxed w-full md:max-w-3xl text-justify">


            Khushi Stone Factory is a trusted name in the granite industry. Our roots go back to 2004,
              when our founders began their work at <strong>Asian Granite</strong>. After building experience
              and relationships in the stone trade, we established <strong>Khushi Stone</strong> in 2012.
          </p>

          {/* Read More button always below paragraph */}
          <Link
            href="/about"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
            aria-label="Read more about us"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
