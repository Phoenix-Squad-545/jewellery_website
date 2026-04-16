import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Breadcrumb from "../components/common/BreadCrumbs";

// Define interfaces for the data types
interface CategoryState {
  category: string;
  products: string[];
  image: string;
}

interface BreadcrumbParent {
  name: string;
  path: string;
}

interface ProductImage {
  name: string;
  imagePath: string;
}
const CATEGORY_CONFIG: any = {

  gold: {
    products: [
      "Rings",
      "Studs",
      "Bangles",
      "Chains",
      "Dollar",
      "Haram",
      "Bracelet"
    ],
    image: "/images/gallery/gallery_item_2.jpg"
  },

  silver: {
    products: ["Silver"],
    image: "/images/silver_1.jpg"
  },

  "gift-articles": {
    products: ["Gift Articles"],
    image: "/images/product/gift/gift10.jpg"
  },

  birthstone: {
    products: ["Birthstone"],
    image: "/images/product/stone/stone1.jpg"
  }

};

// Map products to their actual image files
const getProductImagePath = (category: string, product: string): string => {
  // Based on your image naming convention
  const productImageMap: { [key: string]: string } = {
    // Gold category products
    "Rings": "/images/product/ring1.webp",
    "Studs": "/images/product/stud1.webp",
    "Bangles": "/images/product/bangles1.webp",
    "Chains": "/images/product/chains1.webp",
    "Dollar": "/images/product/dollar.webp",
    "Haram": "/images/product/haram.jpg",
    "Bracelet": "/images/product/bracelet1.webp",

    // Add more mappings as needed
  };

  return productImageMap[product] || "/images/placeholder.jpg";
};

export default function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category: categoryParam } = useParams();


  const state = location.state as CategoryState;

  const category =
    state?.category ||
    categoryParam ||
    "";
  const categoryKey =
    state?.category || category;

  const categoryData =
    state ||
    CATEGORY_CONFIG[categoryKey as string];

  if (!categoryData) {
    navigate("/gallery");
    return null;
  }

  const {
    products,
    image
  } = categoryData;

  const [loadedImages, setLoadedImages] =
    useState<Set<string>>(new Set());

  if (!category) {

    // fallback from URL
    const urlCategory =
      location.pathname.split("/")[2];

    if (!urlCategory) {
      navigate("/gallery");
      return null;
    }

  }

  const handleImageLoad = (productName: string) => {
    setLoadedImages(prev => new Set(prev).add(productName));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-cinzel tracking-wider">
            {category}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        current={category}
        parents={[
          {
            name: "Gallery",
            path: "/gallery"
          }
        ]}
      />
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Category Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-cinzel text-gray-800 mb-4">
              Our {category} Collection
            </h2>
            <p className="text-gray-600">
              Explore our exquisite range of {category.toLowerCase()} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product: string, index: number) => {
              const imagePath = getProductImagePath(category, product);
              const isLoaded = loadedImages.has(product);
              console.log(product, "product>>>");

              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => console.log(`Navigate to ${product} details`)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={imagePath}
                      alt={product}
                      className={`w-full aspect-square object-cover transition duration-500 group-hover:scale-110 ${!isLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                      onLoad={() => handleImageLoad(product)}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition cursor-pointer" onClick={() =>
                        navigate(
                          `/gallery/${category}/${product}`,
                          {
                            state: {
                              category,
                              product,
                              parentImage: image
                            }
                          }
                        )
                      }>
                        View {product}
                      </button>
                    </div>
                  </div>
                  <h3 className="text-center font-cinzel text-gray-800">
                    {product}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}