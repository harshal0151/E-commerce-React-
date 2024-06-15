import React, { useContext, useState, useEffect } from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { ProductContex } from "../useContex/productContex";
import { NavLink } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Header() {
  const { cart, wishlist } = useContext(ProductContex);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  }

  return (
    <section className="fixed top-0 w-full z-50">
      <div className="text-end p-1 bg-zinc-300 text-[12px]">
        {user ? (
          <>
            <span className="mx-4">Welcome,👋 {user.displayName }</span>
            <button onClick={handleLogout} className="mx-4 hover:text-red-600">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink className="mx-4" to="/register">
              Create Account
            </NavLink>
          </>
        )}
      </div>
      <div className="flex justify-around items-center p-5 w-full border backdrop-blur-sm bg-white/30">
        <NavLink to="/">
          <div>
            <h1>LoGo</h1>
          </div>
        </NavLink>
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
              <span className="absolute top-1 bg-red-500 text-white rounded-full w-2 h-2 transform translate-x-1/2 -translate-y-1/2"></span>
            )}
          </li>
        </ul>

        <div className="relative flex gap-10 text-2xl">
          <NavLink to="/wishlist">
            <CiHeart />
          </NavLink>

          <NavLink to="/cart" className="relative">
            <CiShoppingCart />
            <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
              {cart.length}
            </span>
          </NavLink>

          <NavLink to="/profile" className="flex  gap-2">
            <CiUser />
            {user && (
              <span className=" text-sky-700  right-[-80px] text-sm">{user.displayName}</span>
            )}
          </NavLink>
          {wishlist.length > 0 && (
            <span className="absolute top-5 left-2 bg-red-500 text-white rounded-full w-2 h-2 transform translate-x-1/2 -translate-y-1/2"></span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
