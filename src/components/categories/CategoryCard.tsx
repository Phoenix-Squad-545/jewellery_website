// components/categories/CategoryCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  label: string;
  image: string;
  slug: string;
  products?: string[];
}

export default function CategoryCard({
  label,
  image,
  slug,
  products,
}: CategoryCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
if(products && products.length > 0){

  navigate(`/gallery/${products}/${slug}`);
} else{
  navigate(`/gallery/${slug}`);
}

  };

  return (
    <div
      className="group cursor-pointer p-4 rounded-lg transition-all duration-300"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="w-full aspect-[1/1.1] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      {/* Label → Button */}
      <div className="flex justify-center mt-4">
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase px-6 py-2 text-charcoal border border-transparent transition-all duration-300 group-hover:bg-[#f6efe5] group-hover:text-black group-hover:border-[#f6efe5] group-hover:px-8 group-hover:py-3 group-hover:shadow-md">
          {label}
        </span>
      </div>
    </div>
  );
}