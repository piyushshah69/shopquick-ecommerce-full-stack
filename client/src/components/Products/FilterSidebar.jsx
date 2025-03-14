import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: "",
    minPrice: 0,
    maxPrice: 10000,
  });
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
    "Georgette"
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ]

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 1000,
    })
    setPriceRange([0, params.maxPrice || 1000]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };
    console.log({ name, value, checked, type });
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]; 
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  }

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => {
          return <div key={category}
            className="flex items-center mb-1">
            <input type="radio" name="category" id={category}
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 cursor-pointer" 
            />
            <label htmlFor={category} className="text-gray-700 cursor-pointer">{category}</label>
          </div>
        })}
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => {
          return <div key={gender}
            className="flex items-center mb-1">
            <input type="radio" name="gender" id={gender}
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 cursor-pointer"
            />
            <label htmlFor={gender} className="text-gray-700 cursor-pointer">{gender}</label>
          </div>
        })}
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colour</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => {
            return <button key={color}
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`}
            name="color"
            value={color}
            onClick={handleFilterChange}
            style={{backgroundColor: color.toLowerCase()}}
            ></button>
          })}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {
          sizes.map((size) => {
            return <div key={size}
              className="flex items-center mb-1">
              <input type="checkbox" name="size"
                id={size}
                value={size}
                onChange={handleFilterChange}
                checked={filters.size.includes(size)}
                className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400  border-gray-300 cursor-pointer"
              />
              <label className="text-gray-700 cursor-pointer" htmlFor={size}>{size}</label>
            </div>
          })
        }
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {
          materials.map((material) => {
            return <div key={material}
              className="flex items-center mb-1">
              <input type="checkbox" name="material"
                id={material}
                value={material}
                onChange={handleFilterChange}
                checked={filters.material.includes(material)}
                className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400  border-gray-300 cursor-pointer"
              />
              <label className="text-gray-700 cursor-pointer" htmlFor={material}>{material}</label>
            </div>
          })
        }
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {
          brands.map((brand) => {
            return <div key={brand}
              className="flex items-center mb-1">
              <input type="checkbox" name="brand"
                id={brand}
                value={brand}
                onChange={handleFilterChange}
                checked={filters.brand.includes(brand)}
                className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400  border-gray-300 cursor-pointer"
              />
              <label className="text-gray-700 cursor-pointer" htmlFor={brand}>{brand}</label>
            </div>
          })
        }
      </div>

      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input type="range" name="priceRange" min={0} max={10000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-auto cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

    </div>
  )
}

export default FilterSidebar;