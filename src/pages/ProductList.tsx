import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/common/BreadCrumbs";

interface ProductState {
  category?: string;
  product?: string;
  parentImage?: string;
}

const getProductItems = (product: string) => {
  const items: { [key: string]: string[] } = {
    Rings: [
      "/images/product/ring/ring_1.jpg",
      "/images/product/ring/ring_2.jpg",
      "/images/product/ring/ring_3.jpg",
      "/images/product/ring/ring_4.jpg",
      "/images/product/ring/ring_5.jpg",
      "/images/product/ring/ring_6.jpg",
      "/images/product/ring/ring_7.jpg",
      "/images/product/ring/ring_8.jpg",
      "/images/product/ring/ring_9.jpg",
      "/images/product/ring/ring_10.jpg",
      "/images/product/ring/ring_11.jpg",
      "/images/product/ring/ring_12.jpg",
    ],
    Studs: [
      "/images/product/stud/stud-1.jpg",
      "/images/product/stud/stud-2.jpg",
      "/images/product/stud/stud-3.jpg",
      "/images/product/stud/stud-4.jpg",
      "/images/product/stud/stud-5.jpg",
      "/images/product/stud/stud-6.jpg",
      "/images/product/stud/stud-7.jpg",
      "/images/product/stud/stud-8.jpg",
      "/images/product/stud/stud-9.jpg",
      "/images/product/stud/stud-10.jpg",
      "/images/product/stud/stud-11.jpg",
      "/images/product/stud/stud-12.jpg",
    ],
    Bangles: [
      "/images/product/bangles/bangle-1.jpg",
      "/images/product/bangles/bangle-2.jpg",
      "/images/product/bangles/bangle-3.jpg",
      "/images/product/bangles/bangle-4.jpg",
      "/images/product/bangles/bangle-5.jpg",
      "/images/product/bangles/bangle-6.jpg",
      "/images/product/bangles/bangle-7.jpg",
      "/images/product/bangles/bangle-8.jpg",
      "/images/product/bangles/bangle-9.jpg",
      "/images/product/bangles/bangle-10.jpg",
    ],
    Chains: [
      "/images/product/chain/chain-1.jpg",
      "/images/product/chain/chain-2.jpg",
      "/images/product/chain/chain-3.jpg",
      "/images/product/chain/chain-4.jpg",
      "/images/product/chain/chain-6.jpg",
      "/images/product/chain/chain-7.jpg",
      "/images/product/chain/chain-8.jpg",
      "/images/product/chain/chain-9.jpg",
      "/images/product/chain/chain-10.jpg",
      "/images/product/chain/chain-11.jpg",
      "/images/product/chain/chain-12.jpg",
    ],
    Dollar: [
      "/images/product/dollar/dollar-1.jpg",
      "/images/product/dollar/dollar-2.jpg",
      "/images/product/dollar/dollar-3.jpg",
      "/images/product/dollar/dollar-4.jpg",
      "/images/product/dollar/dollar-5.jpg",
      "/images/product/dollar/dollar-6.jpg",
      "/images/product/dollar/dollar-7.jpg",
      "/images/product/dollar/dollar-8.jpg",
      "/images/product/dollar/dollar-9.jpg",
    ],
    Haram: [
      "/images/product/haram/aram-1.jpg",
      "/images/product/haram/aram-2.jpg",
      "/images/product/haram/aram-3.jpg",
      "/images/product/haram/aram-4.jpg",
      "/images/product/haram/aram-5.jpg",
      "/images/product/haram/aram-6.jpg",
      "/images/product/haram/aram-7.jpg",
      "/images/product/haram/aram-8.jpg",
      "/images/product/haram/aram-9.jpg",
      "/images/product/haram/aram-10.jpg",
      "/images/product/haram/aram-11.jpg",
      "/images/product/haram/aram-12.jpg",
    ],
    Bracelet: [
      "/images/product/bracelet/bracelet-1.jpg",
      "/images/product/bracelet/bracelet-2.jpg",
      "/images/product/bracelet/bracelet-3.jpg",
      "/images/product/bracelet/bracelet-4.jpg",
      "/images/product/bracelet/bracelet-5.jpg",
      "/images/product/bracelet/bracelet-6.jpg",
      "/images/product/bracelet/bracelet-7.jpg",
      "/images/product/bracelet/bracelet-8.jpg",
      "/images/product/bracelet/bracelet-9.jpg",
      "/images/product/bracelet/bracelet-10.jpg",
      "/images/product/bracelet/bracelet-11.jpg",
    ],
     Silver: [
      "/images/product/silver/silverware1.jpg",
      "/images/product/silver/silverware2.jpg",
      "/images/product/silver/silverware3.jpg",
      "/images/product/silver/silverware4.jpg",
      "/images/product/silver/silverware6.jpg",
      "/images/product/silver/silverware7.jpg",
      "/images/product/silver/silverware8.jpg",
      "/images/product/silver/silverware15.jpg",
      "/images/product/silver/silverware16.jpg",
      "/images/product/silver/silverware27.jpg",
      "/images/product/silver/silverware29.jpg",
      "/images/product/silver/silverware30.jpg",
      "/images/product/silver/silverware31.jpg",
      "/images/product/silver/silverware87.jpg",
      "/images/product/silver/silverware88.jpg",
      "/images/product/silver/silverware89.jpg",
      "/images/product/silver/silverware90.jpg",
      "/images/product/silver/silverware91.jpg",
      "/images/product/silver/silverware92.jpg",
      "/images/product/silver/silverware100.jpg",
      "/images/product/silver/silverware101.jpg",
      "/images/product/silver/silverware102.jpg",
      "/images/product/silver/silverware103.jpg",
      "/images/product/silver/silverware104.jpg",
    ],

    "Gift Articles": [
      "/images/product/gift/gift1.jpg",
      "/images/product/gift/gift2.jpg",
      "/images/product/gift/gift3.jpg",
      "/images/product/gift/gift4.jpg",
      "/images/product/gift/gift5.jpg",
      "/images/product/gift/gift6.jpg",
      "/images/product/gift/gift7.jpg",
      "/images/product/gift/gift8.jpg",
      "/images/product/gift/gift9.jpg",
      "/images/product/gift/gift10.jpg",
      "/images/product/gift/gift-11.jpg",
      "/images/product/gift/gift-12.jpg",
      "/images/product/gift/gift-13.jpg",
      "/images/product/gift/gift-14.jpg",
      "/images/product/gift/gift-15.jpg",
      "/images/product/gift/gift-16.jpg",
    ],
    "Antique Jewellery": [
      "/images/product/antique/antique-1.webp",
      "/images/product/antique/antique-2.jpg",
      "/images/product/antique/antique-3.jpg",
      "/images/product/antique/antique-4.jpg",
      "/images/product/antique/antique-5.avif",
      "/images/product/antique/antique-6.webp",
      "/images/product/antique/antique-7.webp",
      "/images/product/antique/antique-8.jpg",
    ],
    "Temple Jewellery": [
      "/images/product/temple/temple-jewellery-1.jpg",
      "/images/product/temple/temple-jewellery-2.jpg",
      "/images/product/temple/temple-jewellery-3.jpg",
      "/images/product/temple/temple-jewellery-4.jpg",
      "/images/product/temple/temple-jewellery-5.jpg",
      "/images/product/temple/temple-jewellery-6.jpg",
      "/images/product/temple/temple-jewellery-7.jpg",
      "/images/product/temple/temple-jewellery-8.jpg",
      "/images/product/temple/temple-jewellery-9.jpg",
      "/images/product/temple/temple-jewellery-10.jpg",
      "/images/product/temple/temple-jewellery-11.jpg",
      "/images/product/temple/temple-jewellery-12.jpg",
      "/images/product/temple/temple-jewellery-13.jpg",
      "/images/product/temple/temple-jewellery-14.jpg",
      "/images/product/temple/temple-jewellery-15.jpg",
      "/images/product/temple/temple-jewellery-16.jpg",
      "/images/product/temple/temple-jewellery-17.jpg",
      "/images/product/temple/temple-jewellery-18.jpg",
      "/images/product/temple/temple-jewellery-19.jpg",
      "/images/product/temple/temple-jewellery-20.jpg",
      "/images/product/temple/temple-jewellery-21.jpg",
      "/images/product/temple/temple-jewellery-22.jpg",
      "/images/product/temple/temple-jewellery-23.jpg",
      "/images/product/temple/temple-jewellery-24.jpg",
      "/images/product/temple/temple-jewellery-25.jpg",
      "/images/product/temple/temple-jewellery-26.jpg",
      "/images/product/temple/temple-jewellery-27.jpg",
      "/images/product/temple/temple-jewellery-28.jpg",
    ],

    Birthstone: [
      "/images/product/stone/stone1.jpg",
      "/images/product/stone/stone2.jpg",
      "/images/product/stone/stone3.jpg",
      "/images/product/stone/stone4.jpg",
      "/images/product/stone/stone5.jpg",
      "/images/product/stone/stone6.jpg",
      "/images/product/stone/stone7.jpg",
      "/images/product/stone/stone8.jpg",
      "/images/product/stone/stone9.jpg",
      "/images/product/stone/stone10.jpg",
      "/images/product/stone/stone11.jpg",
      "/images/product/stone/stone12.jpg",
    ]
  };

  return items[product] || [];
};

export default function ProductList() {

  const { category, product } = useParams();

  const location = useLocation();
  const state = location.state as ProductState;

  const parentImage =
    state?.parentImage ||
    "/images/default-banner.jpg";

  const [selectedIndex, setSelectedIndex] =
  useState<number | null>(null);

  const productItems =
    getProductItems(product || "");

    const handleNext = () => {
  if (selectedIndex === null) return;

  setSelectedIndex(
    (selectedIndex + 1) % productItems.length
  );
};

const handlePrev = () => {
  if (selectedIndex === null) return;

  setSelectedIndex(
    (selectedIndex - 1 + productItems.length) %
      productItems.length
  );
};

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {

    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape")
      setSelectedIndex(null);

  };

  window.addEventListener("keydown", handleKeyDown);

  return () =>
    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
}, [selectedIndex]);

const formattedCategory =
  category
    ? category.charAt(0).toUpperCase() +
      category.slice(1)
    : "";

   const isSingleCategory =
  product === "Silver" ||
  product === "Gift Articles" ||  product === "Antique Jewellery"||  product === "Temple Jewellery" ||
  product === "Birthstone";

  return (
    <>
      {/* Hero */}
      <div className="relative h-[250px] overflow-hidden">

        <img
          src={parentImage}
          alt={product}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-cinzel capitalize">
            {product}
          </h1>
        </div>

      </div>

      {/* Breadcrumb */}


<Breadcrumb
  current={product || ""}
  parents={
    isSingleCategory
      ? [
          {
            name: "Gallery",
            path: "/gallery"
          }
        ]
      : [
          {
            name: "Gallery",
            path: "/gallery"
          },
         {
            name: formattedCategory,
            path: `/gallery/${category}`
          }
        ]
  }
/>

      {/* Items Grid */}
      <section className="py-16 bg-white mb-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-cinzel text-center mb-10 capitalize">
            {product} Collection
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {productItems.map((img, index) => (

              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >

                <img
                  src={img}
                  alt={`item-${index}`}
                  className="w-full aspect-square object-cover rounded-lg transition duration-300 group-hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Modal */}
   {selectedIndex !== null && (

  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

    <div className="relative max-w-4xl w-full px-6 group ">

      {/* Close Button */}
      <div className="absolute top-6 right-8 group/close ">

        <button
          onClick={() => setSelectedIndex(null)}
          className="
            w-10 h-10
            flex items-center justify-center
            text-white text-2xl
            rounded-full
            bg-black/50
            hover:bg-red-500
            transition duration-300
            cursor-pointer
          "
        >
          ×
        </button>

        {/* Tooltip */}
        <span
          className="
            absolute right-12 top-1/2
            -translate-y-1/2
            px-2 py-1
            text-xs text-white
            bg-black
            rounded
            opacity-0
            group-hover/close:opacity-100
            transition duration-300
            whitespace-nowrap
          "
        >
          Close
        </span>

      </div>


      {/* Previous Arrow */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 group/prev ">

        <button
          onClick={handlePrev}
          className="
            w-12 h-12
            flex items-center justify-center
            text-white text-2xl
            bg-black/50
            rounded-full
            opacity-0
            group-hover:opacity-100
            hover:bg-black
            transition duration-300
            cursor-pointer
          "
        >
          ‹
        </button>

        {/* Tooltip */}
        <span
          className="
            absolute left-14 top-1/2
            -translate-y-1/2
            px-2 py-1
            text-xs text-white
            bg-black
            rounded
            opacity-0
            group-hover/prev:opacity-100
            transition duration-300
            whitespace-nowrap
          "
        >
          Previous
        </span>

      </div>


      {/* Next Arrow */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 group/next cursor-pointer">

        <button
          onClick={handleNext}
          className="
            w-12 h-12
            flex items-center justify-center
            text-white text-2xl
            bg-black/50
            rounded-full
            opacity-0
            group-hover:opacity-100
            hover:bg-black
            transition duration-300
            cursor-pointer
          "
        >
          ›
        </button>

        {/* Tooltip */}
        <span
          className="
            absolute right-14 top-1/2
            -translate-y-1/2
            px-2 py-1
            text-xs text-white
            bg-black
            rounded
            opacity-0
            group-hover/next:opacity-100
            transition duration-300
            whitespace-nowrap
          "
        >
          Next
        </span>

      </div>


      {/* Image */}
      <img
        src={productItems[selectedIndex]}
        alt="preview"
        className="
          w-full
          max-h-[80vh]
          object-contain
          rounded-lg
        "
      />

    </div>

  </div>

)}

    </>
  );
}