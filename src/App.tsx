import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container-fluid px-0">
      <div className=" py-4">
        <h1 className="text-center mb-5">Inventario: Mi Pequeña Joya</h1>
        <ProductForm onAdded={reload} />
        <ProductList key={String(refresh)} />
      </div>
    </div>
  );
}

export default App;
