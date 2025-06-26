import { Products} from "./types/index";
import Link from "next/link"

async function getProducts(): Promise<Products[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} >
<img src={product.image} alt={product.title} width={300} height={300}/>
<div>
<h2>{product.title}</h2>
<h2>{product.description}</h2>
<h2>{product.name}</h2></div>
          </Link>
        ))}

      </div>
    </main>
  );
}