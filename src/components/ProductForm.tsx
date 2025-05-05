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

  const category = ["Collar", "Aretes", "Pulsera", "Anillo", "Broche", "Gargantilla", "Diadema", "Brazalete", "Llavero", "Dije", "Aros"];
  

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.description ||
      !form.category ||
      form.price <= 0 ||
      form.stock < 0
    ) {
      setError("Por favor completa todos los campos correctamente.");
      return;
    }

    await addProduct(form);
    setForm({ name: "", description: "", category: "", price: 0, stock: 0 });
    setError("");
    onAdded();
  };

  return (
    <div className="container my-4  p-4 shadow-sm bg-light">
      <div className="container">
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
          <select
            name="category"
            className="form-select mb-2"
            value={form.category}
            onChange={handleChange}
          >
          <option value={""} disabled className="text-muted">Categoria</option>
           { category.map(cat => <option key={cat} value={cat}>{cat}</option>) }
          </select>
          <div className="row  mb-2">
            <div className="col">
              <div className="col form-floating flex-grow-1">
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
            <div className="col">
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
            </div>
          </div>

          {error && <div className="text-danger mb-2">{error}</div>}

          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
