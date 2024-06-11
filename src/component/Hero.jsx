import React from "react";
import img from "../assets/Sofa.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="relative ">
        <div className="w-full h-[70vh]">
          <img className="w-full h-full  object-cover" src={img} alt="Sofa" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 "></div>
        </div>

        <div className="absolute top-[100px] p-12 w-2/4 text-6xl font-bold text-white">
          <h1>Furniture & Home Decor</h1>

          <Link to = "/product">
          <button className=" text-[18px] border px-4 py-3 mt-12 rounded-lg bg-blue-500 hover:bg-blue-400 border-none">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
