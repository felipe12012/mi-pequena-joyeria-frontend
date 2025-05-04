import { useState } from "react";
import { addProduct } from "../api/productApi";
import { Product } from "../interfaces/Product";

interface Props {
  onAdded: () => void;
}

const ProductForm = ({ onAdded }: Props) => {
  const [form, setForm] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    category: "",
    price: 0,
    stock: 0,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" || name === "stock" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.category || form.price <= 0 || form.stock < 0) {
      setError("Por favor completa todos los campos correctamente.");
      return;
    }

    await addProduct(form);
    setForm({ name: "", description: "", category: "", price: 0, stock: 0 });
    setError("");
    onAdded();
  };

  return (
    <div className="container my-4  p-4 rounded shadow-sm bg-white">
      <h4 className="mb-4">Agregar Producto</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-2">
          <input
            name="name"
            className="form-control"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="description"
            className="form-control"
            placeholder="Descripción"
            value={form.description}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Descripción</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="category"
            className="form-control"
            placeholder="Categoría"
            value={form.category}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Categoría</label>
        </div>
        <div className=" input-group  mb-2">
          <span className="input-group-text">$</span>
          <div className="form-floating flex-grow-1">
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="Precio"
              value={form.price ? form.price : ""}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Precio</label>
            
          </div>
        </div>
        <div className="form-floating mb-2"> 
          <input
            name="stock"
            type="number"
            className="form-control"
            placeholder="Stock"
            value={form.stock ? form.stock : ""}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Stock</label>
        </div>

        {error && <div className="text-danger mb-2">{error}</div>}

        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default ProductForm;
