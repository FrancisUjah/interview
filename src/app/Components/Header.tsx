"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link href="/">
        <h1 className="text-xl font-bold">🛍️ FakeStore</h1>
      </Link>
      <Link href="/cart" className="text-lg font-semibold">
        🛒 Add to Cart ({totalItems})
      </Link>
    </header>
  );
}