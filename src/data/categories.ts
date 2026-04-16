
// data/categories.ts

export interface Category {
  key: string;
  label: string;
  image: string;
  products?: string[]; // Optional, as some categories might not have products
}
export const categories: Category[] = [
  { key: "Temple Jewellery", label: "Temple Jewellery", image: "/images/categories/gallery_item_9.jpg", products: ["temple-jewellery"]},
  { key: "gold", label: "Gold Collection", image: "/images/categories/gallery_item_14.jpg",  },
  { key: "Silver", label: "Silverware",image: "/images/categories/gallery_item_15.webp", products: ["silver"] },
  { key: "Gift Articles", label: "Gift Articles" ,image: "/images/categories/gallery_item_16.png", products: ["gift-articles"]},
  { key: "birthstone", label: "BirthStone",image: "/images/categories/gallery_item_12.jpg", products: ["Birthstone"] },
  { key: "Antique Jewellery", label: "Antique Jewellery",image: "/images/categories/gallery_item_17.webp", products: ["antique-jewellery"] },
];