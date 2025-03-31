import { Link } from "react-router-dom";

function ProductsGrid({ products, loading, error }) {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {products.map((product, index) => {
        return <Link key={index} to={`/product/${product._id}`}
          className="block">
          <div className="bg-white rounded-lg">
            <div className="w-full mb-4">
              <img src={product.images[0].url} alt={product.images[0].alt || product.name}
              className="w-full h-full object-cover rounded-lg"/>
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">${product.price}</p>
          </div>
        </Link>
      })}
    </div>
  )
}

export default ProductsGrid;