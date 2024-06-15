import React, { useContext, useState } from "react";
import { ProductContex } from "../useContex/productContex";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Search() {
  const { data, filteredData, setFilteredData, wishlist } =
    useContext(ProductContex);
  const [searchTerm, setSearchTerm] = useState("");

  const isProductInWishlist = (id) => wishlist.some((item) => item.id === id);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredData([]); // Clear filteredData if searchTerm is blank
    } else {
      const results = data.filter(
        (item) =>
          item.attributes.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.attributes.company
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.attributes.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 mb-4"
      >
        <input
          className="outline-none rounded-md py-1 px-2 border border-gray-300  focus:ring focus:ring-blue-300"
          type="search"
          placeholder="Search..."
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="py-1 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
        />
      </form>

      <div className="flex">
        {filteredData.map((p) => (
          <div
            key={p.id}
            className="max-w-sm w-[400px] rounded overflow-hidden shadow-lg m-8"
          >
            <Link to={`/product/${p.id}`}>
              <div className="flex justify-center">
                <img
                  className="w-full h-48 object-cover"
                  src={p.attributes.image}
                  alt={p.attributes.title}
                />
              </div>
            </Link>
            <div className="px-6 py-4">
              <Link to={`/product/${p.id}`}>
                <h3 className="text-xl font-bold mb-2 capitalize hover:text-blue-500">
                  {p.attributes.title}
                </h3>
              </Link>
              <p className="text-gray-700 text-xl my-5">
                $ {p.attributes.price / 100}
              </p>
              <div className="flex gap-2">
                <button
                  className="flex w-[80%] items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-[1.01]"
                  onClick={(e) => handleAddToCart(e, p)}
                >
                  <CiShoppingCart className="text-2xl mx-2" />
                  Add to cart
                </button>
                <button
                  className={`w-[20%] flex items-center justify-center rounded-md shadow-sm border focus:outline-none transition-colors duration-300 hover:bg-gray-300 hover:scale-[1.01] ${
                    isProductInWishlist(p.id)
                      ? "text-red-500 bg-gray-200"
                      : "bg-gray-200 text-white"
                  }`}
                  onClick={(e) => handleAddToWishlist(e, p)}
                >
                  <FaHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
