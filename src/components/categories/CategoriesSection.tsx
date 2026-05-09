// components/categories/CategoriesSection.tsx

import React from "react";
import SectionHeader from "../common/SectionHeader";
import CategoryCard from "./CategoryCard";
import { categories, Category } from "../../data/categories";

export default function CategoriesSection() {
  return (
    <section
  id="categories"
  className={`bg-white ${
    categories.length === 1 ? "py-10" : "py-24"
  }`}
>
      <div className={`${ categories.length === 1 ? "max-w-md" : "max-w-6xl" } mx-auto px-6`}>

        <SectionHeader
          label="Our Collections"
          title="Crafted for Every Occasion"
        />

        <div
  className={`grid gap-6 ${
    categories.length === 1
      ? "grid-cols-1 justify-items-center"
      : categories.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-3"
  }`}
>

         {categories.map((cat: Category) => (

  <CategoryCard
    key={cat.key}
    slug={cat.key}
    label={cat.label}
    image={cat.image}
    products={cat.products}
  />

))}

        </div>

      </div>
    </section>
  );
}