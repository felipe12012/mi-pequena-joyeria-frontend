import { useState } from "react";
import { Product } from "../interfaces/Product";
import { sellProduct } from "../api/productApi";
import {ModalConfirm} from "./ModalConfirm";
import Swal from "sweetalert2";

interface Props {
  product: Product;
  onSold: () => void;
}

const ProductCard = ({ product, onSold }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>("");

  const handleSell = async () => {
    if (quantity <= 0 || quantity > product.stock) {
      setMessage("Cantidad inválida");
      return;
    }
    const confirmed = await ModalConfirm();
    if (confirmed) {
      Swal.fire({
        title: "¡Vendido!",
        text: `Se han vendido ${quantity} unidades de ${product.name}.`,
        icon: "success"
      });
      const result = await sellProduct(product.id, quantity);
      console.log(result);
      onSold();
    }
    
  };

  return (
    <div className={`card h-100 ${product.stock === 0 ? "border-danger" : ""}`}>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>Precio:</strong> ${product.price.toLocaleString()}</p>
        <p className={`card-text ${product.stock === 0 ? "text-danger" : ""}`}>
          <strong>Stock:</strong> {product.stock}
        </p>

        {product.stock > 0 && (
          <>
            <div className="input-group mb-2">
              <input
                type="number"
                min="0"
                max={product.stock}
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button className="btn btn-primary" onClick={handleSell}>Vender</button>

            </div>
          </>
        )}
        {message && <small className="text-info">{message}</small>}
      </div>
    </div>
  );
};

export default ProductCard;
