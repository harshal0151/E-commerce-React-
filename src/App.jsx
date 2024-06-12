import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Routers from "./router/Routers";
import { ProductProvider } from "./useContex/productContex";

function App() {
  return (
    <>
      <ProductProvider>
        {/* <Header   /> */}
        <div className="mt-[5.75rem]">
          <Routers />
        </div>

        <Footer />
      </ProductProvider>
    </>
  );
}

export default App;
