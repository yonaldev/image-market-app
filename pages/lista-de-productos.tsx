import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

// Components
import { default as Layout } from "../components/layouts";
import { default as ListProducts } from "../components/ListProducts";

// Services
import { getAllService } from "../services/ProductService";

// Types
import { Product } from "../types/Product.types";

const ListAllProducts: NextPage = () => {
  const [allProducts, setAllProducts] = useState<Array<Product>>([]);

  const getProducts = async (): Promise<void> => {
    const { result } = await getAllService();
    setAllProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <div className="ml-9 mt-9 absolute">
        <Link href="/">
          <a className="underline font-bold text-indigo-600">Atrás</a>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center py-5">
        <ListProducts products={allProducts} />
      </div>
    </Layout>
  );
};

export default ListAllProducts;
