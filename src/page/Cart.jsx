import React, { useContext, useState, useEffect } from "react";
import { ProductContex } from "../useContex/productContex";
import { CiTrash, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart, handleAddToWishlist, wishlist, user } = useContext(ProductContex);
  const isProductInWishlist = (id) => wishlist.some((item) => item.id === id);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [tax, setTax] = useState(2); 
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateSubTotal = () => {
    const subTotal = cart.reduce((total, item) => total + (item.attributes.price / 100) * (item.quantity || 1), 0);
    setSubTotalPrice(subTotal);
  };

  useEffect(() => {
    calculateSubTotal();
  }, [cart]);

  useEffect(() => {
    setTotalPrice(subTotalPrice + tax);
  }, [subTotalPrice, tax]);

  const incrementProductQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementProductQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && (item.quantity || 1) > 1) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeProductFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="w-full h-screen">
      <h2 className="text-5xl p-8  font-semibold">
        Shopping <span className="text-blue-600">Cart</span>
      </h2>
      <div className="flex justify-around">
        <div className="w-[60%]">
          {cart.length === 0 ? (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-700">Browse our products and add items to your cart.</p>
              <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.map((w, index) => (
              <div
                key={index}
                className="relative border w-full rounded-lg p-4 shadow-lg flex justify-around items-center m-8"
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
                <div className="flex gap-4 border px-2 py-1 rounded-md items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => decrementProductQuantity(w.id)}
                  >
                    -
                  </button>
                  <span>{w.quantity || 1}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => incrementProductQuantity(w.id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="text-2xl mx-2 text-red-500 hover:text-red-700"
                    onClick={() => removeProductFromCart(w.id)}
                  >
                    <CiTrash />
                  </button>
                </div>
                <div className="absolute top-3 right-8">
                  <button
                    className={`flex items-center justify-center w-full px-1 py-2 text-center text-sm font-medium transition-colors ${
                      isProductInWishlist(w.id)
                        ? "text-red-500"
                        : "text-black hover:text-red-500"
                    }`}
                    onClick={(e) => handleAddToWishlist(e, w)}
                  >
                    <CiHeart className="text-2xl mx-2" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="w-[30%] p-2 relative mb-12">
            <div className="flex flex-col gap-3 bg-slate-200 w-[300px] p-5  rounded-lg shadow-lg fixed ">
              <h5 className="text-xl font-bold mb-4">Cart Price</h5>
              <div className="mb-2">
                <span className="text-lg font-semibold mr-2">Tax :</span>
                <span className="text-gray-700"> $ {tax}</span>
              </div>
              <div className="mb-2">
                <span className="text-lg font-semibold mr-2">SubTotal Price :</span>
                <span className="text-gray-700">$ {subTotalPrice.toFixed(2)}</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-semibold mr-2">Total Price :</span>
                <span className="text-gray-700">$ {totalPrice.toFixed(2)}</span>
              </div>
              {user ? (
                <Link to="/checkout">
                <button className="bg-blue-500 text-white px-12  py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center w-full justify-center">
                Checkout Now
                </button>
                </Link>
              ) : (
                <div className="text-center">
                  <p className="text-red-500 mb-5">Please log in to checkout</p>
                  <Link to="/login" className=" bg-slate-300 px-12  py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors flex items-center w-full justify-center">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
