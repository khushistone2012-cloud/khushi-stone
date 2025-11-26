export default function ProductShowcase() {
  const products = [
    {
      name: "Sadahalli Grey",
      image: "/product showcase/sadahalli.jpg", // replace with your images
    },
    {
      name: "Adgal Grey",
      image: "/product showcase/adgal.jpg",
    },
    {
      name: "Sira Grey",
      image: "/product showcase/sira.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* h1 smaller and normal */}
        <h1 className="text-lg sm:text-xl text-gray-900 mb-4">
          What we do
        </h1>

        {/* h2 smaller, bold */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Natural Granite
        </h2>

        {/* Responsive grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full max-w-xs sm:max-w-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-4 text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}