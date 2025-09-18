import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import ProductCardImage from "./product-card-image";
import ProductCardDetails from "./product-card-details";

export default async function ProductCard(product: Product) {
  const imageUrl = product.images[0];

  return (
    <Link href={`/pages/products/${product.id}`} className="">
      <article
        className={`relative w-[210px] h-[350px] flex flex-col bg-gradient-to-br from-white to-blue-100 border-yellow-700 rounded-4xl font-verdana 
        transform-gpu transition-all duration-200 ease-out hover:[transform:translateY(-1px)_scale(1.03)_rotate(0deg)]
        shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 before:rounded-xl before:bg-black/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none
        after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-white/10 after:to-transparent after:pointer-events-none`}
      >
        <ProductCardImage imageUrl={imageUrl} title={product.title} />
        <ProductCardDetails
          title={product.title}
          price={product.price}
          description={product.description}
        />
      </article>
    </Link>
  );
}
