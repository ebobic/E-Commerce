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

/*add a new product*/
export async function addNewProduct(productData: Omit<Product, 'id'>) {
  const response = await fetch(`https://dummyjson.com/products/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  const product: Product = await response.json();
  return product;
}

/*Delete a product*/
export async function deleteProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return result;
}
/*update a product*/
export async function updateProduct(id: string, updatedData: Partial<Omit<Product, 'id'>>) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const product: Product = await response.json();
  return product;
}