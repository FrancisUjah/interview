import { Products } from "../types/index";
import Link from "next/link";

export default function ProductCard({ product }: { product: Products }) {
  return (
    <Link href={`/product/${product.id}`} className="block border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-lg truncate">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      </Link>
  );
}
