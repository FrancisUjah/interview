import { useState } from "react";
import { Products } from "../types/index";
import Link from "next/link";

import { useCart } from "../context/CartContext";
"use client";

export default function ProductCard({ product }: { product: Products }) {
  const { addToCart } = useCart();

  const [isAdding, setIsAdding] = useState(false);


  const handleAddTocart = async () => {
    setIsAdding(true);
addToCart(product);

setTimeout (() => {
  setIsAdding(false);
}, 300)   }



  return (
    <Link href={`/product/${product.id}`} className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto" />
      <h2 className="font-bold">{product.title}</h2>
      <p>{product.category}</p>
      <p className="font-bold">${product.price}</p>
      <div className="p-4 pt-0">
        <button onClick={handleAddTocart} disabled={isAdding} className="w-full">
          {isAdding ? (
            <>
              <div className="h-4 w-4 mr-2 animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <div className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </Link>
  );
}
