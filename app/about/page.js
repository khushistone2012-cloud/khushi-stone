// app/about/page.js
"use client";



import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const partners = [
    {
      name: "Kamal Baldwa",
      role: "Co-founder & Partner",
      desc: "Passionate about stone craftsmanship and maintaining global quality standards.",
      img: "/partners/kamal.JPG",
    },
    {
      name: "Dinesh Bhandari",
      role: "Co-founder & Partner",
      desc: "Focused on innovation, client satisfaction, and building long-term industry relationships.",
      img: "/partners/dinesh.JPG",
    },
  ];

  return (
    <div className="bg-white text-gray-700"> {/* 👈 Added wrapper with white background */}
      <PageHeader title="About Us" />

      <section className="max-w-6xl mx-auto px-6 py-12 leading-relaxed">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Journey in Stone Excellence
            </h2>
            <p className="mb-4">
              Khushi Stone Factory is a trusted name in the granite industry. Our roots go back to 2004,
              when our founders began their work at <strong>Asian Granite</strong>. After building experience
              and relationships in the stone trade, we established <strong>Khushi Stone</strong> in 2012.
            </p>
            <p className="mb-4">
              We cut blocks into high-quality slabs and tiles, specializing in grey granites such as
              <strong> Adgal</strong>, <strong> Sira</strong>, and <strong> Sadahalli</strong>. Our combination
              of modern machinery and seasoned craftsmanship ensures consistent finish, color, and edge precision.
            </p>
            <p>
              Today, Khushi Stone stands for reliability, precision and a deep respect for natural stone.
              We partner with architects, builders and designers to deliver products that last and delight.
            </p>
          </div>

          <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about us factory/1.jpg"
              alt="Khushi Stone Factory"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12"> {/* 👈 light gray for contrast */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision & Core Values</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            We blend tradition with technology to produce granite that enhances architecture — while adhering to sustainable practices.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality First",
                text: "Every stone is hand-inspected to ensure consistent quality and finish.",
              },
              {
                title: "Integrity",
                text: "Client relationships built on trust and clear communication.",
              },
              {
                title: "Innovation",
                text: "We continually invest in machinery and processes for superior precision.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Meet Our Partners</h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{p.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
