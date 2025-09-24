"use client"

import React, { useState, useEffect } from "react";
import Form from "next/form";
import { toast } from "sonner";
import { fetchAllCategories } from "@/lib/data/product-data";

export default function ProductCreate() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [categories, setCategories] = useState<any[]>([]);
    const [category, setCategory] = useState<string>("Beauty");
    const [price, setPrice] = useState<string>("");
    const [discount, setDiscount] = useState<string>("");
    const [stock, setStock] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    const [heigth, setHeight] = useState<string>("");
    const [depth, setDepth] = useState<string>("");
    const [images, setImages] = useState<string>("https://example.com/image1.jpg");
    const [submitted, setSubmitted] = useState<boolean>(false);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const fetchedCategories = await fetchAllCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
                toast.error("Failed to load categories.");
            }
        };

        loadCategories();
    }, []);

    const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: {title},
            description: {description},
            category: {category},
            price: {price},
            discount: {discount},
            stock: {stock},
            tags: {tags},
            brand: {brand},
            weight: {weight},
            width: {width},
            heigth: {heigth},
            depth: {depth},
            images: {images}
        })
    })

    .then(res => res.json())
    .then(console.log);

    toast.success(`${title} added successfully!`);
    setSubmitted(true);
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
                <label htmlFor="title" className="">Title: *</label>
                <input
                    type="text"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="title"
                    id="title"
                    aria-label="Create product - Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>
                
                <div className="mt-2 md:col-span-2">
                <label htmlFor="description" className="gap-2 md:flex">Description:
                <textarea
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    rows={5}
                    cols={40}
                    name="description"
                    id="description"
                    aria-label="Create product - Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                </label>
                </div>

                <div className="mt-2 md:col-span-1">
                <label htmlFor="category" className="">Category: *</label>
                <select
                    name="category"
                    id="category"
                    className="px-1 py-1 rounded-sm bg-blue-100 w-full"
                    aria-label="Create product - Category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                >
                {categories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                ))}
                </select>
                </div>             

                <div className="mt-2 md:mt-0 md:mx-2 md:col-span-1">
                <label htmlFor="tags" className="mt-2 md:flex">Tags:</label>
                <input
                    type="text"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="tags"
                    id="tags"
                    aria-label="Create product - Tags"
                    onChange={(e) => setTags(e.target.value)}
                />
                </div>
                
                <div className="mt-2 md:col-span-1">
                <label htmlFor="brand" className="">Brand:</label>
                <input
                    type="text"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="brand"
                    id="brand"
                    aria-label="Create product - Brand"
                    onChange={(e) => setBrand(e.target.value)}
                />
                </div>

                <div className="mt-2 md:mx-2 md:col-span-1">
                <label htmlFor="stock" className="">Stock: *</label>
                <input
                    type="tel"
                    pattern="[0-9]*"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="stock"
                    id="stock"
                    aria-label="Create product - Stock"
                    required
                    onChange={(e) => setStock(e.target.value)}
                />
                </div>

                <div>
                <label htmlFor="price" className="flex mt-2 gap-2">Price: *</label>
                <input
                    type="tel"
                    pattern="[0-9,.]*"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="price"
                    id="price"
                    aria-label="Create product - Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                />
                
                <label htmlFor="discount" className="flex flex-row mt-2 gap-2">Discount%:
                <input
                    type="tel"
                    pattern="[0-9,.]*"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="discount"
                    id="discount"
                    aria-label="Create product - Discount"
                    onChange={(e) => setDiscount(e.target.value)}
                />
                </label>
                </div>

                <div className="mt-2 md:mx-2 md:col-span-1">
                <label htmlFor="weight" className="">Weight:
                <input
                    type="text"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="weight"
                    id="weight"
                    aria-label="Create product - Weight"
                    onChange={(e) => setWeight(e.target.value)}
                />
                </label>
                </div>

                <div className="mt-2">Dimensions:
                    <label htmlFor="width" className="flex gap-[14px]">Width:
                    <input
                        type="text"
                        className="px-2 rounded-sm bg-blue-100 w-full"
                        name="width"
                        id="width"
                        aria-label="Create product - Width"
                        onChange={(e) => setWidth(e.target.value)}
                    />
                    </label>

                    <label htmlFor="height" className="flex mt-1 gap-2">Height:
                    <input
                        type="text"
                        className="px-2 rounded-sm bg-blue-100 w-full"
                        name="height"
                        id="height"
                        aria-label="Create product - Height"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    </label>

                    <label htmlFor="depth" className="flex mt-1 gap-[12px]">Depth:
                    <input
                        type="text"
                        className="px-2 rounded-sm bg-blue-100 w-full"
                        name="depth"
                        id="depth"
                        aria-label="Create product - Depth"
                        onChange={(e) => setDepth(e.target.value)}
                    />
                    </label>
                </div>

                <label htmlFor="image" className="flex mt-2 md:mx-2 gap-2">Image:
                <input
                    type="file"
                    className="px-2 rounded-sm bg-blue-100 w-full"
                    name="image"
                    id="image"
                    multiple
                    placeholder=""
                    aria-label="Create product - Image"
                    onChange={(e) => setImages(e.target.value)}
                />
                </label>

                <p className="text-sm text-red-500 mt-2 md:col-span-2">*mandatory fields</p>

                <div className="grid justify-self-center w-full sm:flex">
                    <button
                        type="submit"
                        className="mt-2 py-0.5 px-4 rounded-sm text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
                    >
                        Add Product
                    </button>
                    {submitted}
                </div>
            </Form>
            </div>
        </div>
        </div>
    )
}
