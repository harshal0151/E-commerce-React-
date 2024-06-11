import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Routers from "./router/Routers";
import { ProductProvider } from "./useContex/productContex";




function App() {
  return (
    <>
    <ProductProvider>
    <Header />
      <Routers />
      <Footer />
    </ProductProvider>
   
    </>
  );
}

export default App;
