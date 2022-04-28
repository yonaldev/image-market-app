import { Product } from "../types/Product.types";

export const getAllService = async (): Promise<{ result: Array<Product> }> =>
  fetch("http://localhost:8080/api/v1/image-market")
    .then((resp) => resp.json())
    .catch((err) => console.log(err));

export const searchProduct = (
  input: string
): Promise<{ result: Array<Product> }> =>
  fetch(`http://localhost:8080/api/v1/image-market/search?search=${input}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
