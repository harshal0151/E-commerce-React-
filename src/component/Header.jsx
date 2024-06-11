import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";


function Header() {
  return (
    <section className="fixed top-0 w-full z-50 ">

    <div  className="text-end p-1 bg-zinc-300 text-[12px]">
      <Link to="/">Sign in / Guest
     </Link>
      <Link className="mx-4" to="/"> Create Account</Link>
    </div>
      <div className=" flex justify-around items-center p-5 w-full border backdrop-blur-sm bg-white/30">
        <div className="">
          <h1>LoGo</h1>
        </div>
 
        <ul className="flex gap-10">
          <li><a href="/">Home</a></li>
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

        <div className="flex gap-8 text-2xl">
          <a href="/cart">
            <CiShoppingCart />
          </a>
          <a href="">
            <MdOutlineWbSunny />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
