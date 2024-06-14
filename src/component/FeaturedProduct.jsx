import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ProductContex } from "../useContex/productContex";
import { Link } from "react-router-dom";
import loagingImg from "../assets/looder.svg";

function FeaturedProduct({ data }) {
  const { handleAddToCart, handleAddToWishlist, wishlist } = useContext(ProductContex);

  const isProductInWishlist = (id) => wishlist.some((item) => item.id === id);

  const featuredProducts = data.filter(
    (product) => product.attributes.featured === true
  );

  if (data.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <img className="w-12" src={loagingImg} alt="Loading" />
      </div>
    );
  }

  return (
    <>
      {featuredProducts.map((p) => (
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
            <p className="text-gray-700 text-xl my-5 ">
              ₹ {p.attributes.price}
            </p>
            <div className="flex gap-2">
              <button
                className="flex w-[80%] items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 shadow-md transition-transform transform hover:scale-[1.01]"
                onClick={(e) => handleAddToCart(e, p)}
              >
                <CiShoppingCart className="text-2xl mx-2" />
                Add to cart
              </button>
              <button
                className={`w-[20%] flex items-center justify-center rounded-md shadow-sm border focus:outline-none transition-colors duration-300 hover:bg-gray-300 ${
                  isProductInWishlist(p.id)
                    ? "text-red-500 bg-gray-200"
                    : "bg-gray-200 text-white"
                }`}
                onClick={(e) => handleAddToWishlist(e, p)}
              >
                <FaHeart className="text-2xl " />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeaturedProduct;
