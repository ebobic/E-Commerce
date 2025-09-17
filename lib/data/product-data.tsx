import { Category, Product, ProductsResponse } from "../interfaces/products";

export async function fetchProductsData(limit:number, skip:number) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const { products, total }: ProductsResponse = await response.json();
  return { products, total };
}

export async function fetchProductById(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await response.json();
  return product;
}

export async function fetchSearchProducts(query: string) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const { products, total }: ProductsResponse = await response.json();
  return { products, total };
}

export async function fetchProductsByCategory(category: string) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const { products, total }: ProductsResponse = await response.json();
  return { products, total };
}

export async function fetchAllCategories() {
  const response = await fetch(`https://dummyjson.com/products/categories`);
  const categories: Category[] = await response.json();
  return categories;
}
