import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { ProductContex } from "../useContex/productContex";
import { NavLink } from "react-router-dom";

function Header() {
  const { cart } = useContext(ProductContex);

  return (
    <section className="fixed top-0 w-full z-50">
      <div className="text-end p-1 bg-zinc-300 text-[12px]">
        <NavLink to="/">Sign in / Guest</NavLink>
        <NavLink className="mx-4" to="/">
          Create Account
        </NavLink>
      </div>
      <div className="flex justify-around items-center p-5 w-full border backdrop-blur-sm bg-white/30">
        <div>
          <h1>LoGo</h1>
        </div>

        <ul className="flex gap-10">
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link hover:text-blue-500" : "hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link hover:text-blue-500" : "hover:text-blue-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "active-link hover:text-blue-500" : "hover:text-blue-500"
              }
            >
              Product
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "active-link hover:text-blue-500" : "hover:text-blue-500"
              }
            >
              Cart
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute top-1  bg-red-500 text-white rounded-full w-2 h-2 transform translate-x-1/2 -translate-y-1/2"></span>
            )}
          </li>
        </ul>

        <div className="relative flex gap-8 text-2xl">
          <NavLink to="/cart" className="relative">
            <CiShoppingCart />
            
            <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
              {cart.length}
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Header;
