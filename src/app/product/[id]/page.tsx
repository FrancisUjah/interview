import type { Products } from "../../types/index";
import { ProductGrid } from "../../Components/Productgrid";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>
}

async function getProduct(id: string): Promise<Products> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  

  return (
    <main className="p-6">
      <Link href="/" className="text-blue-600 underline mb-4 inline-block">← Back to products</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img 
        src={product.image} 
        alt={product.title}
         width={600} height={500}/>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-xl mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-700 mb-2">${product.price}</p>
          <p className="text-sm text-gray-600">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </main>
  );
}