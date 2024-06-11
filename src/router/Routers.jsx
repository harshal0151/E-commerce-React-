import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';    
import Home from '../page/Home';
import About from '../page/About';
import Product from '../page/Product';
import Cart from '../page/Cart';

function Routers() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/product' element={<Product  />} /> 
      <Route path='/cart' element={<Cart />} /> 
    </Routes>
    
    </BrowserRouter>
  );
}

export default Routers;
