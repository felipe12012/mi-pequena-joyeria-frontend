import { Product } from "../interfaces/Product";

const BASE_URL = "http://localhost:8080/api/v1/products";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function sellProduct(id: number, quantity: number): Promise<string> {
  const res = await fetch(`${BASE_URL}/${id}/sell`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
  return res.text();
}
