import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import logo from "./img/logo.png";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container px-0">
      <div className="py-4">
        <div className="row align-items-center justify-content-center">
          <img src={logo} alt="logo" className="logo" />

          <h1 className=" col">Inventario</h1>
        </div>
        <ProductForm onAdded={reload} />
        <ProductList key={String(refresh)} />
      </div>
    </div>
  );
}

export default App;
