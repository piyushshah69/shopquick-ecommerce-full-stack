import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductsByFilters, setFilters } from "../../redux/slices/productSlice";

function SearchBar() {

  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchText }));
    dispatch(fetchProductsByFilters({ search: searchText }));
    navigate(`/collections/all?search=${searchText}`);
    setIsOpen(false);
  }

  return (
    <div className={`flex items-center justify-center w-full ${isOpen ? "absolute top-0 left-0 w-full h-full px-6 z-50 transition-all duration-300 bg-white lg:bg-transparent" : "w-auto"}`}>
      {isOpen ?
        (
          <form
            className="relative flex items-center justify-center w-full"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <div className="relative w-full lg:w-1/2">
              <input
                type="text"
                onChange={(e)=>setSearchText(e.target.value)}
                placeholder="Search" value={searchText} className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <HiMagnifyingGlass className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer"/>
              </button>
            </div>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="ml-4"
            >
              <HiMiniXMark className="w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </button>
          </form>
        ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer"/>
        </button>
      )}
    </div>
  )
}

export default SearchBar;