import { createContext, useEffect, useState } from "react";

export const ProductContex = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]); // products
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  function handleAddToCart(e, product) {
    setCart([...cart, product]);
  }

  function handleAddToWishlist(e, product) {
    e.preventDefault();
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  }

  useEffect(() => {
    async function productData() {
      const response = await fetch(
        "https://strapi-store-server.onrender.com/api/products"
      );
      const result = await response.json();
      setProduct(result.data);
    }
    productData();
  }, []);

  return (
    <ProductContex.Provider
      value={{
        data: product,
        setData: setProduct,
        cart,
        setCart,
        handleAddToCart,
        handleAddToWishlist,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};
