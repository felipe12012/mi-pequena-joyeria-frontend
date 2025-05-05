import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { Product } from "../interfaces/Product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div className="container-fluid ">
      <div className="container my-4">
        <h2 className="mb-3">Lista de Productos</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} onSold={loadProducts} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
