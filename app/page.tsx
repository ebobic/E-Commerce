import Image from "next/image";
import { fetchProductById, fetchProductsData, fetchSearchProducts } from "../lib/data/product-data";

export default async function Home() {
  const data = await fetchProductsData();
  console.log("total", data.total);
}
