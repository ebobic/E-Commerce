"use client";

import { useState, useEffect } from "react";
import { fetchProductsData, deleteProduct } from "@/lib/data/product-data";
import { Product } from "@/lib/interfaces/products";
import Link from "next/link";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API when page loads
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { products } = await fetchProductsData(30, 0);
        setProducts(products);
      } catch {
        setError("Failed to load products");
      }
    };
    loadProducts();
  }, []);

  // Delete function!
  const handleDeleteProduct = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteProduct(id);
      // Remove product from list after successful deletion
      setProducts(products.filter(product => product.id !== parseInt(id)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">Admin</h1>
          <p className="text-neutral-600">Product Management</p>
        </header>

        {/* Main content card */}
        <div className="bg-white rounded-lg shadow p-4">
          {/* Table header + create button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Products</h2>
            <Link 
              href="/admin/create"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Create Product
            </Link>
          </div>
          
          {/* Products table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left p-3 font-semibold text-blue-900">ID</th>
                <th className="text-left p-3 font-semibold text-blue-900">Title</th>
                <th className="text-left p-3 font-semibold text-blue-900">Price</th>
                <th className="text-left p-3 font-semibold text-blue-900">Stock</th>
                <th className="text-right py-3 px-4 font-semibold text-blue-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* loop through products and display each row! */}
              {products.map((product: Product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">{product.title}</td>
                  <td className="p-3">${product.price}</td>
                  <td className="p-3">{product.stock}</td>
                  <td className="p-3 flex justify-end gap-2">
                    <Link 
                      href={`/admin/update/${product.id}`} 
                      className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded hover:bg-yellow-200"
                    >
                      Update
                    </Link>
                    <button 
                      onClick={() => handleDeleteProduct(product.id.toString())}
                      disabled={isLoading}
                      className="bg-red-100 text-red-900 px-3 py-1 rounded hover:bg-red-200 disabled:opacity-50"
                    >
                      {isLoading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Error message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
              Error: {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
