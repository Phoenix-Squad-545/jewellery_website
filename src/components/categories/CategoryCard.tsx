import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  label: string;
  image: string;
   slug: string;
   products?: string[]; // Optional, as some categories might not have products
}

export default function CategoryCard({
  label,
  image,
  slug,
  products
}: CategoryCardProps) {

    const navigate = useNavigate();

  const handleClick = () => {

    navigate(`/gallery/${products}/${slug}`);

  };

  return (
    <div className="group cursor-pointer"   onClick={handleClick}>

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={label}
          loading="lazy"
          className="
            w-full
            aspect-[1/1.1]
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-110
          "
        />

        {/* Soft Overlay */}

        <div
          className="
            absolute inset-0
            bg-black/20
            opacity-0
            transition duration-500

            group-hover:opacity-100
          "
        />

      </div>

      {/* Label → Button */}

      <div className="flex justify-center mt-4">

        <span
          className="
            font-cinzel
            text-xs
            tracking-[0.3em]
            uppercase

            px-6
            py-2

            text-charcoal

            border border-transparent

            transition-all
            duration-300

            group-hover:bg-gold
            group-hover:text-black
            group-hover:border-gold
            group-hover:px-8
            group-hover:py-3
            group-hover:shadow-md
          "
        >
          {label}
        </span>

      </div>

    </div>
  );
}