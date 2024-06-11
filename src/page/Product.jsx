import React, { useContext } from 'react'
import { ProductContex } from '../useContex/productContex'
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";




function Product() {
const {data} = useContext(ProductContex);

console.log(data);

  return (
    <>
    <h2 className="text-5xl p-8 mt-10 font-semibold">
        All <span className="text-blue-600">Product</span>
      </h2>
    <div className="flex flex-wrap justify-center">
    {data.map((p, index) => (
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
    </div>
    </>
  )
}

export default Product