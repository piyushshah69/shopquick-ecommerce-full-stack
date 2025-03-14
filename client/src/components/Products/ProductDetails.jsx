import { useEffect, useState } from "react"
import { TbLoader2 } from "react-icons/tb";
import { toast } from "sonner";
import ProductsGrid from "./ProductsGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 3200,
  originalPrice: 3800,
  description: "Best jacket for any ocassion lorem ipsum dolar, Best jacket for any ocassion lorem ipsum dola",
  brand: "Brand Name",
  material: "Synthetic Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500?random=1",
      alt: "Stylish jack 1",
    },
    {
      url: "https://picsum.photos/500?random=2",
      alt: "Stylish jack 1",
    }
  ]
}

const similarProducts = [
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
];

function ProductDetails() {

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((curr) => curr + 1);
    if (action === "minus" && quantity > 1) setQuantity((curr) => curr - 1);
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a size & colour before adding!", {
        duration: 2000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 2000,
      });
      setIsButtonDisabled(false);
    }, 500);
  }

  return (
    <section className="md:p-6">
      <div className="max-w-6xl mx-auto bg-white px-4 lg:px-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {
              selectedProduct.images.map((image, index) => {
                return <img key={index} src={image.url} alt={image.alt || index}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                  onClick={() => setMainImage(image.url)}
                />
              })
            }
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              <img src={mainImage} alt="Product" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {
              selectedProduct.images.map((image, index) => {
                return <img key={index} src={image.url} alt={image.alt || index}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`} 
                  onClick={() => setMainImage(image.url)}
                  />
              })
            }
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">
              {selectedProduct.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Color</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => {
                  return <button
                    onClick={()=> setSelectedColor(color)}
                    key={color}
                    className={`w-7 h-7 rounded-full border cursor-pointer ${selectedColor === color ? "border-2 border-black" : "border-gray-300"}`}
                    style={{backgroundColor: color.toLocaleLowerCase(), }}
                  ></button>
                })}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => {
                  return <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border border-gray-400 cursor-pointer ${selectedSize === size ? "bg-black text-white" : ""}`}>{size}</button>
                })}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={()=>handleQuantityChange("minus")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                >-</button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-3 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                >+</button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer ${isButtonDisabled ? "cursor-not-allowed opacity-60" : "hover:bg-gray-900" }`}
            >{isButtonDisabled ?
                <span className="w-full flex items-center justify-center gap-2">
                  <TbLoader2 className="w-6 h-6 animate-spin" />
                  Adding...
                </span>
             : "Add to cart"}</button>
            <div className="mt-4 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-center font-medium mb-4">You may also like</h2>
          <ProductsGrid products={similarProducts} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;