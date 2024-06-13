import React, { useContext } from 'react';
import { ProductContex } from "../useContex/productContex";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, handleAddToWishlist, wishlist } = useContext(ProductContex);
  const isProductInWishlist = (id) => wishlist.some(item => item.id === id);

  console.log(cart);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%]">
        {cart.length > 0 ? (
          cart.map((w, index) => (
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
                  className={`flex items-center justify-center w-full rounded-md border border-transparent px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-blue-200  shadow-md transition-transform transform hover:scale-105 ${
                    isProductInWishlist(w.id) ? "text-red-500 bg-gray-200" : "bg-gray-200 text-white"}`}
                  onClick={(e) => handleAddToWishlist(e, w)}
                >
                  <FaHeart className={`text-2xl mx-2 `} />
                  Add To Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-2xl font-bold text-gray-700">Your cart is empty.</p>
            <Link to="/product" className="mt-4 text-blue-600 hover:underline">
              Back to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
