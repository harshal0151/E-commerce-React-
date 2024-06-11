import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function FeaturedProduct({ data }) {
  
  const featuredProducts = data.filter((product) => product.attributes.featured === true);

  return (
    <>
      {featuredProducts.map((p, index) => (
        <div key={index} className="max-w-sm w-[400px] rounded overflow-hidden shadow-lg m-8">
          <div className="flex justify-center">
            <img
              className="w-full h-48 object-cover"
              src={p.attributes.image}
              alt={p.attributes.title}
            />
          </div>
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold mb-2 capitalize">{p.attributes.title}</h3>
            <p className="text-gray-700 text-xl my-5 ">₹ {p.attributes.price}</p>
            <Link 
              to="/"
              className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <CiShoppingCart className="text-2xl mx-2" />
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeaturedProduct;
