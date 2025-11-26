import Image from "next/image";

export default function PageHeader({ title }) {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pageheader background/4.jpg"
          alt="background image"
          fill
          priority
          className="object-cover object-center brightness-50"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h1>
        
      </div>
    </section>
  );
}
