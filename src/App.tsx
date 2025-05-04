import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { useState } from "react";


function App() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5">🪙 Mi Pequeña Joya</h1>
      <ProductForm onAdded={reload} />
      <hr />
      <ProductList key={String(refresh)} />
    </div>
  );
}

export default App;
