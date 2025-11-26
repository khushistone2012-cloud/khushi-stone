
import { Award, Hammer, CheckCircle, Truck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Premium Quality",
      desc: "Each stone is handpicked from best-class quarries, ensuring timeless elegance and enduring quality.",
      icon: <Award className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Expert Craftsmanship",
      desc: "Our artisans bring decades of experience, combining traditional methods with modern precision.",
      icon: <Hammer className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Trusted Experience",
      desc: "With over 30 years in the industry, we are trusted by leading architects and luxury builders.",
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Reliable Delivery",
      desc: "We ensure every order reaches on time with meticulous care in transport and packaging.",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Discover the values that make us a trusted name in natural stone —
          precision, passion, and perfection.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-gray-50 transition"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
