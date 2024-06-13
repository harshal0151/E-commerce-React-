import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContex } from "../useContex/productContex";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const { data, handleAddToCart, handleAddToWishlist, wishlist } = useContext(ProductContex);

  const [productToDisplay, setProductToDisplay] = useState(null);

  const isProductInWishlist = (id) => wishlist.some(item => item.id === id);

  useEffect(() => {
    if (data.length > 0 && id) {
      setProductToDisplay(data.find((product) => product.id === Number(id)));
    }
  }, [id, data]);

  return (
    <>
      {productToDisplay ? (
        <div className="flex w-full p-2">
          <div className="w-[50%] p-12">
            <img
              className="object-cover h-58 w-96 shadow-lg rounded-lg transition-transform transform hover:scale-105"
              src={productToDisplay.attributes.image}
              alt={productToDisplay.attributes.title}
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-12">
            <h3 className="text-3xl capitalize font-bold mb-2 text-gray-800">
              {productToDisplay.attributes.title}
            </h3>
            <p className="mb-2 text-gray-600">
              <strong className="text-gray-800">Category: </strong>
              {productToDisplay.attributes.category}
            </p>
            <p className="mb-2 text-gray-600">
              <strong className="text-gray-800">Price: </strong> ₹
              {productToDisplay.attributes.price}
            </p>
            <p className="mb-4 text-gray-700">
              {productToDisplay.attributes.description}
            </p>
            <p className="flex items-center gap-4 mb-4">
              <strong className="text-gray-800">Colors: </strong>
              {productToDisplay.attributes.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full inline-block shadow-md transition-transform transform hover:scale-110"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </p>
            <div className="flex gap-2">
              <button
                className="flex w-[80%] items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md transition-transform transform"
                onClick={(e) => handleAddToCart(e, productToDisplay)}
              >
                <CiShoppingCart className="text-2xl mx-2" />
                Add to cart
              </button>
              <button
                className="w-[20%] flex items-center justify-center rounded-md shadow-sm border focus:outline-none transition-colors duration-300"
                onClick={(e) => handleAddToWishlist(e, productToDisplay)}
              >
                <FaHeart
                  className="text-2xl"
                  style={{ fill: isProductInWishlist(productToDisplay.id) ? 'red' : 'gray' }}
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </>
  );
}

export default SingleProduct;
