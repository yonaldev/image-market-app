import { FC, useId } from "react";
import Image from "next/image";

// Types
import { Product } from "../../types/Product.types";

type Props = {
  products: Product[];
};

const ListProducts: FC<Props> = ({ products }) => {
  const id = useId();

  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
    }).format(value || 0);

  return (
    <>
      {products.map(({ name, description, price, image }) => (
        <div
          key={id}
          className="flex justify-between shadow-md rounded p-5 w-[500px] my-4"
        >
          <div className="flex flex-col justify-between w-60">
            <div>
              <h2 className="font-bold text-blue-900 underline">{name} </h2>
              <p className="mt-1">{description}</p>
            </div>
            <p className="mt-8 font-extrabold text-indigo-500">
              COP {formatCurrency(price)}
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src={image !== null ? image : "/assets/default.png"}
              alt="Imagen de producto"
              height={150}
              width={150}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListProducts;
