import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { ProductContex } from "../useContex/productContex";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(ProductContex);
  return (
    <section className="fixed top-0 w-full z-50 ">
      <div className="text-end p-1 bg-zinc-300 text-[12px]">
        <a href="/">Sign in / Guest</a>
        <a className="mx-4" to="/">
          {" "}
          Create Account
        </a>
      </div>
      <div className=" flex justify-around items-center p-5 w-full border backdrop-blur-sm bg-white/30">
        <div className="">
          <h1>LoGo</h1>
        </div>

        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>

        <div className="relative flex gap-8 text-2xl">
          <a href="/cart" className="relative">
            <CiShoppingCart />
            <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
              {cart.length}
            </span>
          </a>
          <a href="/">
            <MdOutlineWbSunny />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
