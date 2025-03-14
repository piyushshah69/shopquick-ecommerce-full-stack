import { Link } from "react-router-dom";
import featured from '../../assets/featured.webp'

function FeaturedCollection() {
  return (
    <section className="mt-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-orange-50 rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort & Style
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">Apparel made for everyday life.</h2>
          <p className="text-md text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, magnam ipsa ab dolorum delectus, reiciendis incidunt praesentium culpa temporibus eligendi explicabo tenetur qui odio. Optio, ratione aliquid! Rerum, natus quod?
          </p>
          <Link to='/collections/all' className="bg-black text-white px-5 py-2 rounded-lg text-lg hover:bg-gray-800">
            Shop now
          </Link>
        </div>

        <div className="lg:w-1/2">
          <img src={featured} alt="featured collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection;