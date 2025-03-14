import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-2xl"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">Free International Shipping</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $12000
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-2xl"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">45 Days Return</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarentee
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-2xl"/>
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">Secure Checkout</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;