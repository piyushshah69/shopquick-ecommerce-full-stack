import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductsGrid from "../components/Products/ProductsGrid";

function Collections() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=1",
              alt: "alt",
            }
          ]
        },
        {
          _id: 2,
          name: "Product 2",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=2",
              alt: "alt",
            }
          ]
        },
        {
          _id: 3,
          name: "Product 3",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=3",
              alt: "alt",
            }
          ]
        },
        {
          _id: 4,
          name: "Product 4",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=4",
              alt: "alt",
            }
          ]
        },
        {
          _id: 5,
          name: "Product 5",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=5",
              alt: "alt",
            }
          ]
        },
        {
          _id: 6,
          name: "Product 6",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=6",
              alt: "alt",
            }
          ]
        },
        {
          _id: 7,
          name: "Product 7",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=7",
              alt: "alt",
            }
          ]
        },
        {
          _id: 8,
          name: "Product 8",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500?random=8",
              alt: "alt",
            }
          ]
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button className="lg:hidden border border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={toggleSidebar}>
        <FaFilter className="mr-2" /> Filters
      </button>
      <div ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 min-w-64 min-h-screen bg-white overflow-y-auto transition-transform lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        <SortOptions />
        <ProductsGrid products={products}/>
      </div>
      <div className={`${isSidebarOpen ? "block" : "hidden"} w-screen h-screen fixed z-10 top-0 bg-black/20`}></div>
    </div>
  )
}

export default Collections;