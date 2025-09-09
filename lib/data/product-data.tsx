import { Products, ProductsResponse } from "./interfaces/products";


export async function fetchProductsData() {
    const response = await fetch(`https://dummyjson.com/products`);
    const { products, total }: ProductsResponse = await response.json();
    return { products, total };
}

export async function fetchProductById(id: string) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product: Products = await response.json();
    return product;
}

export async function fetchSearchProducts(query: string) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const { products, total }: ProductsResponse = await response.json();
    return { products, total };
}