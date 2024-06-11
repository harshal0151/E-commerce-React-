import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Hero";
import FeaturedProduct from "../component/FeaturedProduct";
import { ProductContex } from "../useContex/productContex";

function Home() {
  const { data } = useContext(ProductContex);

  return (
    <>
      <Hero />
      <h2 className="text-5xl p-8 mt-10 font-semibold">
        Featured <span className="text-blue-600">Product</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <FeaturedProduct data={data} />
      </div>
    </>
  );
}

export default Home;
