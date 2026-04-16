// components/common/SectionHeader.tsx

import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({
  label,
  title,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      
      <span className="text-xs tracking-[0.4em] text-gold uppercase">
        {label}
      </span>

      <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal mt-3">
        {title}
      </h2>

      <div className="w-12 h-[1px] bg-gold mx-auto mt-5" />

    </div>
  );
}