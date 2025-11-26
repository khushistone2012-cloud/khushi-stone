// app/gallery/[category]/layout.js

export async function generateMetadata({ params }) {
  // In Next.js 15, `params` is a Promise in server components
  const { category } = await params;

  const key = String(category).toLowerCase();

  const titles = {
    adgal: "Adgal Grey Granite | Top Granite Supplier in Bangalore | Khushi Stone",
    sira: "Sira Grey Granite Slabs | Best Granite Manufacturer India | Khushi Stone",
    sadahalli: "Sadahalli Grey Granite | Top Stone Exporter in India | Khushi Stone",
    factory: "Granite Factory in Bangalore | Khushi Stone Gallery"
  };

  const descriptions = {
    adgal:
      "Adgal Grey Granite slabs supplied by one of the top granite manufacturers in Bangalore, India. Export quality finishing and global delivery.",
    sira:
      "High quality Sira Grey Granite from a leading grey granite supplier in India. Best for commercial flooring and large-scale projects.",
    sadahalli:
      "Sadahalli Grey Granite slabs and tiles from the top-rated granite factory near Bangalore. Worldwide shipping available.",
    factory:
      "Explore Khushi Stone granite cutting factory near Bangalore, Karnataka. Trusted global granite exporter."
  };

  return {
    title: titles[key] ?? "Grey Granite Products Gallery | Khushi Stone",
    description:
      descriptions[key] ??
      "Grey granite slabs and tiles including Adgal, Sira and Sadahalli grey granite from Khushi Stone near Bangalore, India.",
    alternates: {
    canonical: `https://khushistone.com/gallery/${key}`
  },
    robots: "index,follow"
  };
}

// This layout just renders children – no visual change at all
export default function GalleryCategoryLayout({ children }) {
  return children;
}
