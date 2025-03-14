import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductsGrid from "../components/Products/ProductsGrid";

const placeholderProducts = [
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

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-semibold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-4 mt-10">Top Wears for Women</h2>
        <ProductsGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  )
}

export default Home;