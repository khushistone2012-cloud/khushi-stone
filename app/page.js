export const metadata = {
  title: "Top Grey Granite Supplier in India | Best Granite Exporter Bangalore | Khushi Stone",
  description:
    "Khushi Stone is among the top grey granite suppliers in India, manufacturing and exporting Adgal Grey, Sira Grey and Sadahalli Grey granite slabs from Bangalore to customers worldwide.",
  keywords: [
    "top grey granite supplier india",
    "top 10 granite manufacturers bangalore",
    "best granite exporter india",
    "grey granite slabs supplier",
    "adgal grey granite",
    "sira grey granite",
    "sadahalli grey granite",
    "granite factory bangalore"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Top Granite Manufacturer in India | Khushi Stone",
    description:
     "Trusted supplier of premium grey granite slabs with global export from Bangalore, India.",
     url: "https://khushistone.com",
     siteName: "Khushi Stone",
  }
};

import ProductShowcase from "@/components/ProductShowcase";
import AboutTeaser from "../components/AboutTeaser";
import Slideshow from "../components/Slideshow";
import Testimonials from "../components/Testimonials";

import WhyChooseUs from "../components/WhyChooseUs";
import PageHeader from "@/components/PageHeader";



export default function HomePage() {
  return (
    <>
      
      <Slideshow />
      <AboutTeaser />
      <WhyChooseUs />
      <ProductShowcase/>
      <Testimonials/>
      
    </>
  );
}
