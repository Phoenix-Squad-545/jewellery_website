import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/BreadCrumbs";

const galleryCategories = [
  {
    label: "Gold",
    image: "/images/gallery/gallery_item_2.jpg",
    slug: "gold",
    type: "multi", // important
    products: [
      "Rings",
      "Studs",
      "Bangles",
      "Chains",
      "Dollar",
      "Haram",
      "Bracelet"
    ]
  },

  {
    label: "Silver",
    image: "/images/silver_1.jpg",
    slug: "silver",
    type: "single", // important
    products: ["Silver"]
  },
  {
    label: "Temple Jewellery",
    image: "/images/product/temple/temple-jewellery-1.jpg",
    slug: "temple-jewellery",
    type: "single", // important
    products: ["Temple Jewellery"]
  },

  {
    label: "Gift Articles",
    image: "/images/product/gift/gift10.jpg",
    slug: "gift-articles",
    type: "single",
    products: ["Gift Articles"]
  },
  {
    label: "Antique Jewellery",
    image: "/images/product/antique/antique-1.webp",
    slug: "antique-jewellery",
    type: "single",
    products: ["Antique Jewellery"]
  },

  {
    label: "Birthstone",
    image: "/images/product/stone/stone1.jpg",
    slug: "birthstone",
    type: "single",
    products: ["Birthstone"]
  },
];

export default function Gallery() {
  const navigate = useNavigate();

const handleViewCategory = (category: any) => {

  if (category.type === "multi") {

    // Gold → show product types
    navigate(`/gallery/${category.slug}`, {
      state: {
        category: category.slug,
        products: category.products,
        image: category.image
      }
    });

  } else {

    // Silver → directly show items
    navigate(
      `/gallery/${category.slug}/${category.products[0]}`,
      {
        state: {
          category: category.slug,
          product: category.products[0],
          parentImage: category.image
        }
      }
    );

  }
};

  return (
    <>

      {/* Hero */}

      <Hero />

      {/* Breadcrumb */}

      <Breadcrumb current="Gallery" />

      {/* Gallery Cards */}

      <section className="py-20 bg-white">

        <div className="
          max-w-7xl
          mx-auto
          px-6
        ">

          <div className="
            grid
            md:grid-cols-4
            gap-6
          ">

            {galleryCategories.map((item, i) => (

              <div
                key={i}
                className="
                  relative
                  group
                  overflow-hidden
                  cursor-pointer
                "
              >

                <img
                  src={item.image}
                  alt={item.label}
                  className="
                    w-full
                    aspect-square
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute inset-0
                  bg-black/60
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  flex
                  items-center
                  justify-center
                ">

                  <button 
                    onClick={() => handleViewCategory(item)}
                    className="
                      bg-white
                      text-gray-900
                      px-6
                      py-2
                      rounded-full
                      font-cinzel
                      text-sm
                      tracking-wider
                      transform
                      translate-y-4
                      group-hover:translate-y-0
                      transition
                      duration-300
                      hover:bg-gray-100
                      hover:scale-105
                      cursor-pointer
                    "
                  >
                    View {item.label}
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}