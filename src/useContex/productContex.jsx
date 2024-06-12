import { createContext, useEffect, useState } from "react";

export const ProductContex = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);  // products
  const [cart , setCart] = useState([])

  function handleAddToCart(e, product ) {
    setCart([...cart , product]);
  }

  console.log(cart)

  useEffect(() => {
    async function productData() {
      const response = await fetch(
        "https://strapi-store-server.onrender.com/api/products"
      );
      const result = await response.json();
      setProduct(result.data);
      // console.log(result.data);
    }
    productData();
  }, []);
  return (
    <ProductContex.Provider value={{ data: product, setData: setProduct , cart , setCart ,handleAddToCart }}>
      {children}
    </ProductContex.Provider>
  );
};
