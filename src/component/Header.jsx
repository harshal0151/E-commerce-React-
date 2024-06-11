import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link , NavLink} from "react-router-dom";

function Header() {
  return (
    <>

    <div  className="text-end p-1 bg-zinc-300 text-[12px]">
      <a href="">Sign in / Guest
     </a>
      <a className="mx-4" href=""> Create Account</a>
    </div>
      <div className=" flex justify-around items-center p-4 w-full border ">
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

        <div className="flex gap-8">
          <a href="">
            <CiShoppingCart />
          </a>
          <a href="">
            <MdOutlineWbSunny />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
