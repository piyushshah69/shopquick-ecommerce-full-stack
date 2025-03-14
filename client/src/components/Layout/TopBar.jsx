import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

function TopBar() {
  return (
    <div className="bg-primary text-white overflow-hidden">
      <div className="container mx-auto flex justify-between items-center py-2 animate-loop-scroll md:animate-none">
        <div className="hidden md:flex items-center gap-x-3">
          <a href="https://www.instagram.com"  target="_blank" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5"/>
          </a>
          <a href="https://www.facebook.com" target="_blank"  className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="https://www.x.com" target="_blank" 
            className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4"/>
          </a>
        </div>
        <div className="hidden md:block text-sm text-center flex-grow min-w-full sm:min-w-min">
          <span>We ship worldwide - Fast & Reliable shipping</span>
        </div>
        <div className="block md:hidden text-sm text-center flex-grow shrink-0">
          <span>We ship worldwide - Fast & Reliable shipping. Use code &<code>&quot;TWENTY5&quot;</code> for 5% discount on all products.</span>
        </div>
        <div className="hidden md:block text-sm min-w-1/2 sm:min-w-min">
          {/* Support <a href="tel:+910000000000" className="hover:text-gray-300">
            +919876543210
          </a> */}
          Code - <code>&quot;TWENTY5&quot;</code>
        </div>
      </div>
    </div>
  )
}

export default TopBar;