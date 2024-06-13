import React, { useContext } from "react";
import { ProductContex } from "../useContex/productContex";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, handleAddToCart } = useContext(ProductContex);

  console.log(wishlist);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        {wishlist.length > 0 ? (
          wishlist.map((w, index) => (
            <div
              key={index}
              className="border w-full rounded-lg p-4 shadow-lg flex justify-around items-center m-8"
            >
              <Link to={`/product/${w.id}`}>
                <div>
                  <img
                    src={w.attributes.image}
                    alt={w.attributes.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </Link>
              <div className="text-center">
              <Link to={`/product/${w.id}`}>
           <h3 className="text-xl font-bold mb-2 capitalize hover:text-blue-500">
              {w.attributes.title}
            </h3>
           </Link>
                <p className="text-gray-700 text-xl my-5">
                  $ {w.attributes.price / 100}
                </p>
              </div>
              <div>
                <button
                  className="flex items-center justify-center w-full rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform hover:scale-105"
                  onClick={(e) => handleAddToCart(e, w)}
                >
                  <CiShoppingCart className="text-2xl mx-2" />
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-2xl font-bold text-gray-700">Your wishlist is empty.</p>
            <Link to="/product" className="mt-4 text-blue-600 hover:underline">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
