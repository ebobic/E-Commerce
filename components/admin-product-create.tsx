"use client";

import React, { useState, useEffect } from "react";
import Form from "next/form";
import { toast } from "sonner";
import { addNewProduct, fetchAllCategories } from "@/lib/data/product-data";
import { useRouter } from "next/navigation";

export default function ProductCreate() {
  const [productData, setProduct] = useState({
    id: 195,
    title: "",
    description: "",
    category: "Beauty",
    price: 99.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    tags: [] as any[],
    brand: "",
    sku: "",
    weight: "",
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
  })

  const [categories, setCategories] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchAllCategories();
        setCategories(fetchedCategories);
        setProduct((prev) => ({ ...prev, categories: fetchedCategories }));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        toast.error("Failed to load categories.");
      }
    };

    loadCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await addNewProduct(productData)
      console.log(response);
      setSubmitted(true);
      toast.success(`${productData.title} added successfully!`);
      router.refresh();
      /* router.push("/admin"); */
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-slate-100 text-start">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">Admin</h1>
          <p className="text-neutral-600">Add Product</p>
        </header>

        <div className="bg-white rounded-lg shadow p-4">
          <Form action={handleSubmit} className="grid md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="title" className="">
                Title: *
              </label>
              <input
                type="text"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="title"
                id="title"
                aria-label="Create product - Title"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mt-2 md:col-span-2">
              <label htmlFor="description" className="gap-2 md:flex">
                Description:
                <textarea
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  rows={5}
                  cols={40}
                  name="description"
                  id="description"
                  aria-label="Create product - Description"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="mt-2 md:col-span-1">
              <label htmlFor="category" className="">
                Category: *
              </label>
              <select
                name="category"
                id="category"
                className="px-1 py-1 rounded-sm bg-blue-100 w-full"
                aria-label="Create product - Category"
                required
                onChange={handleChange}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-2 md:mt-0 md:mx-2 md:col-span-1">
              <label htmlFor="tags" className="mt-2 md:flex">
                Tags:
              </label>
              <input
                type="text"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="tags"
                id="tags"
                aria-label="Create product - Tags"
                onChange={handleChange}
              />
            </div>

            <div className="mt-2 md:col-span-1">
              <label htmlFor="brand" className="">
                Brand:
              </label>
              <input
                type="text"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="brand"
                id="brand"
                aria-label="Create product - Brand"
                onChange={handleChange}
              />
            </div>

            <div className="mt-2 md:mx-2 md:col-span-1">
              <label htmlFor="stock" className="">
                Stock: *
              </label>
              <input
                type="tel"
                pattern="[0-9]*"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="stock"
                id="stock"
                aria-label="Create product - Stock"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="price" className="flex mt-2 gap-2">
                Price: *
              </label>
              <input
                type="tel"
                pattern="[0-9,.]*"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="price"
                id="price"
                aria-label="Create product - Price"
                required
                onChange={handleChange}
              />

              <label htmlFor="discount" className="flex flex-row mt-2 gap-2">
                Discount%:
                <input
                  type="tel"
                  pattern="[0-9,.]*"
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  name="discount"
                  id="discount"
                  aria-label="Create product - Discount"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="mt-2 md:mx-2 md:col-span-1">
              <label htmlFor="weight" className="">
                Weight:
                <input
                  type="text"
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  name="weight"
                  id="weight"
                  aria-label="Create product - Weight"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="mt-2">
              Dimensions:
              <label htmlFor="width" className="flex gap-[14px]">
                Width:
                <input
                  type="tel"
                  pattern="[0-9,.]*"
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  name="width"
                  id="width"
                  aria-label="Create product - Width"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="height" className="flex mt-1 gap-2">
                Height:
                <input
                  type="tel"
                  pattern="[0-9,.]*"
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  name="height"
                  id="height"
                  aria-label="Create product - Height"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="depth" className="flex mt-1 gap-[12px]">
                Depth:
                <input
                  type="tel"
                  pattern="[0-9,.]*"
                  className="px-2 rounded-sm bg-blue-100 w-full"
                  name="depth"
                  id="depth"
                  aria-label="Create product - Depth"
                  onChange={handleChange}
                />
              </label>
            </div>

            <label htmlFor="image" className="flex mt-2 md:mx-2 gap-2">
              Image:
              <input
                type="file"
                className="px-2 rounded-sm bg-blue-100 w-full"
                name="image"
                id="image"
                multiple
                aria-label="Create product - Image"
                onChange={handleChange}
              />
            </label>

            <p className="text-sm text-red-500 mt-2 md:col-span-2">
              *mandatory fields
            </p>

            <div className="grid gap-2 justify-self-center w-full sm:flex">
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 py-2 px-4 rounded-sm text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
              >
                {isLoading ? "Adding..." : "Add Product"}
              </button>
              {submitted}

              <button
                type="button"
                onClick={() => router.push("/admin")}
                className="bg-gray-200 text-gray-800 mt-2 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
              >
                Return
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
