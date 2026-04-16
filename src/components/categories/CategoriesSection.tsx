// components/categories/CategoriesSection.tsx

import React from "react";
import SectionHeader from "../common/SectionHeader";
import CategoryCard from "./CategoryCard";
import { categories, Category } from "../../data/categories";

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          label="Our Collections"
          title="Crafted for Every Occasion"
        />

        <div className="grid md:grid-cols-3 gap-6">

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