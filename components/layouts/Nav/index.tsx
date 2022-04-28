import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const url: string =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className="flex items-center px-8 justify-between h-[80px]">
      <div className="flex items-center">
        <div className="flex justify-center items-center mr-5">
          <Image src="/assets/logo.png" alt="" height={50} width={50} />
        </div>
        <div>
          <div
            className="inline-flex items-end font-bold"
            style={{ color: "#0f5fb8" }}
          >
            <h2 className="font-bold text-2xl">I</h2>
            <h3>mage</h3>
            <h2 className="font-bold text-2xl">M</h2>
            <h3>arket</h3>
          </div>
          <hr
            className="border-b-2 w-[140px]"
            style={{ borderColor: "#554d9d" }}
          />
        </div>
      </div>

      {!url.includes("/lista") && (
        <Link href="/lista-de-productos">
          <a
            className="border-2 font-bold px-4 py-2 rounded-lg text-sm"
            style={{ borderColor: "#2563eb", color: "#2563eb" }}
          >
            Ver todos los productos
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
