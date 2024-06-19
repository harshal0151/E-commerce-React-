import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div className='w-full h-[80vh] flex flex-col gap-5 items-center justify-center text-center'>
        <h2 className="text-5xl  font-semibold">
        Thank <span className="text-blue-600">You</span>
      </h2>
      <div>
      <p className="text-gray-700">Browse our products and add items to your cart.</p>
              <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
                Continue Shopping
              </Link>

      </div>

     
    </div>
  )
}

export default Checkout