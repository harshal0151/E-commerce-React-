import { createContext, useEffect, useState } from "react";

export const ProductContex = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]); 
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [user, setUser] = useState(null);


  function handleAddToCart(e, product) {
    e.preventDefault();
    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
        filteredData,
        setFilteredData,
        user,
         setUser
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};
