import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Product from "../page/Product";
import Cart from "../page/Cart";

import SingleProduct from "../page/SingleProduct";
import Header from "../component/Header";
import Wishlist from "../page/Wishlist";
import Login from "../page/Login";
import Register from "../page/Register";
import Checkout from "../page/Checkout";


function Routers() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/register" element={<Register/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
