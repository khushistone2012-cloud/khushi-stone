export const metadata = {
  title: "Khushi Stone — Grey Granite Supplier, Bangalore",
  description:
    "Khushi Stone supplies premium grey granite (Sira, Adgal, Sadahalli) from our Bangalore factory. Exporters of high-quality slabs for contractors and wholesalers.",
  keywords: [
    "top grey granite supplier india",
    "marbel" ,"granite ","tiles",
    "top 10 granite manufacturers bangalore",
    "best granite suppliers in india",
    "best granite exporter india",
    "best granite dealer in world",
    "grey granite slabs supplier",
     "grey granite tiles supplier",
    "adgal grey granite",
    "sira grey granite",
    "sadahalli grey granite",
    "granite factory bangalore"
  ],
  robots: "index, follow",
  alternates: { canonical: "https://khushistone.com/" },
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
      
      <ProductShowcase/>
      <WhyChooseUs />
      <Testimonials/>
      
    </>
  );
}
