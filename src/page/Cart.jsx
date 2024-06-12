import React, { useContext } from 'react'
import { ProductContex } from '../useContex/productContex'



function Cart() {
  const {  cart } = useContext(ProductContex);


  
  console.log(cart);

  return (
    <div>Cart</div>
  )
}

export default Cart