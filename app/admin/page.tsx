"use client";
import { useState } from "react";
import { addNewProduct, deleteProduct, updateProduct } from "@/lib/data/product-data";
import { Product } from "@/lib/interfaces/products";

export default function AdminPage() {
  const [result, setResult] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddProduct = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newProduct = await addNewProduct({
        title: "New Product",
        description: "Description of the new product",
        category: "electronics",
        price: 99.99,
        discountPercentage: 10,
        rating: 4.5,
        stock: 50,
        tags: ["new", "featured"],
        brand: "BrandName",
        sku: "SKU12345",
        weight: "1kg",
        dimensions: { width: 10, height: 20, depth: 5 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 3-5 business days",
        availabilityStatus: "In Stock",
        reviews: [],
        returnPolicy: "30-day return policy",
        minimumOrderQuantity: 1,
        meta: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          barcode: "",
          qrCode: "",
        },
        images: ["https://example.com/image1.jpg"],
        thumbnail: "https://example.com/thumbnail.jpg",
      });

      setResult(newProduct);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
    };
    
    const handleDeleteProduct = async (id: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await deleteProduct(id);
        setResult(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    const handleUpdateProduct = async (id: string, updatedData: Partial<Omit<Product, 'id'>>) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await updateProduct(id, updatedData);
        setResult(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <button
          onClick={handleAddProduct}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Adding..." : "Add Sample Product"}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            Error: {error}
          </div>
        )}

        {result && (
          <div className="mt-4">
            <h3 className="font-medium">Product Added Successfully:</h3>
            <pre className="mt-2 p-3 bg-gray-100 rounded overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <button
          onClick={() => handleUpdateProduct("1", { title: "Updated Product" })}
          disabled={isLoading}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
        <button
          onClick={() => handleDeleteProduct("1")}
          disabled={isLoading}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Deleting..." : "Delete Product"}
        </button>
      </section>
    </div>
  );
}
