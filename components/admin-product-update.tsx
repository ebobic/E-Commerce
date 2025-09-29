"use client";

import { useState } from "react";
import { updateProduct } from "@/lib/data/product-data";
import { Product } from "@/lib/interfaces/products";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface UpdateProductFormProps {
  product: Product;
  categories: { slug: string; name: string }[];
}

export default function UpdateProductForm({
  product,
  categories,
}: UpdateProductFormProps) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Function to handle form submission (when user clicks "Save Changes" button)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Extract form data from the form element
    const formData = new FormData(e.currentTarget);

    // Create an updated product object by getting values from the form
    const updatedData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      brand: formData.get("brand") as string,
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      category: formData.get("category") as string,
      shippingInformation: formData.get("shippingInformation") as string,
      images: (formData.get("images") as string) // Split images string by comma to an array
        .split(",")
        .map((url) => url.trim()),
    };

    try {
      // Try to update the product with the new data on backend
      const updated = await updateProduct(product.id.toString(), updatedData);
      setMessage("✅ Product updated successfully!");
      /* router.push("/admin"); */
      toast.success("Product updated successfully!");
      console.log("Updated product:", updated);
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("❌ Failed to update product.");
    }
  }

  return (
    // form with pre-filled input fields with the product's current data
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Product title"
          defaultValue={product.title}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-medium">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Product description"
          defaultValue={product.description}
          className="w-full border p-2 rounded"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="brand" className="block font-medium">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="Brand"
          defaultValue={product.brand}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="price" className="block font-medium">
          Price
        </label>
        <input
          type="number"
          step="0.01"
          name="price"
          id="price"
          placeholder="Price"
          defaultValue={product.price}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="stock" className="block font-medium">
          Stock
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          placeholder="Stock"
          defaultValue={product.stock}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block font-medium">
          Category
        </label>
        <select
          name="category"
          id="category"
          defaultValue={product.category}
          className="w-full border p-2 rounded"
          required
        >
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="shippingInformation" className="block font-medium">
          Shipping Information
        </label>
        <textarea
          name="shippingInformation"
          id="shippingInformation"
          placeholder="Shipping Information"
          defaultValue={product.shippingInformation}
          className="w-full border p-2 rounded"
          rows={2}
        />
      </div>

      <div>
        <label htmlFor="images" className="block font-medium">
          Images
        </label>
        <input
          type="text"
          name="images"
          id="images"
          placeholder="Images"
          defaultValue={product.images.join(", ")}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-800"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 hover:cursor-pointer"
        >
          Return
        </button>
      </div>

      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
