import { create } from "zustand";

export const useGalleryStore = create((set) => ({
  category: "adgal",
  setCategory: (newCategory) => set({ category: newCategory }),
  images: {
    adgal: ["/adgal/1.jpg","/adgal/2.jpg","/adgal/3.jpg","/adgal/4.jpg","/adgal/5.jpg","/adgal/6.jpg"],
    sira: ["/sira/1.jpg","/sira/2.jpg","/sira/3.jpg","/sira/4.jpg","/sira/5.jpg","/sira/6.jpg"],
    sadahalli: ["/sadahalli/1.jpg","/sadahalli/2.jpg","/sadahalli/3.jpg","/sadahalli/4.jpg","/sadahalli/5.jpg","/sadahalli/6.jpg"],
    factory: ["/factory gallery/1.jpg","/factory gallery/2.jpg","/factory gallery/3.jpg","/factory gallery/4.jpg","/factory gallery/5.jpg","/factory gallery/6.jpg"],
  },
 descriptions: {
    adgal: "Adgal grey granite is known for its durability and elegance.",
    sira: "Sira grey granite adds a premium touch to any space.",
    sadahalli: "Sadahalli grey granite is perfect for flooring and slabs.",
    factory: "Our factory produces slabs and tiles with precision and care.",
  },
}));
