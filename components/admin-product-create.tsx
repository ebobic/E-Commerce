"use client"

import React, { useState } from "react";
import Form from "next/form";
import { toast } from "sonner";

export default function ProductDeleteClient() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
    // console.log({ title, description, category, price });

    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: {title},
            description: {description},
            category: {category},
            price: {price}
        })
    })
    .then(res => res.json())
    .then(console.log);

    toast.success(`${title} added successfully!`);
    setSubmitted(true);
    };

    return (
        <section className="grid grid-cols-1 pb-10 justify-self-center">
            <div className="pt-6 pb-2 text-center">
                <h2 className="pt-6 text-2xl font-bold">Add a new product - Server</h2>
            </div>
            {/* <Form action={handleSubmit} className="grid place-content-center"> */}
            <Form action={handleSubmit} className="grid">
                <input
                    type="text"
                    className="px-2 rounded-lg bg-blue-100 m-auto w-8/10 sm:w-full"
                    name="title"
                    aria-label="Create product - Title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-8/10 sm:w-full"
                    rows={5}
                    cols={40}
                    name="description"
                    aria-label="Create product - Description"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input
                    type="text"
                    className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-8/10 sm:w-full"
                    name="category"
                    aria-label="Create product - Category"
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                />
                <input
                    type="text"
                    className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-8/10 sm:w-full"
                    name="price"
                    aria-label="Create product - Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
                
                <div className="grid justify-self-center sm:w-full sm:flex">
                    <button
                        type="submit"
                        className="mt-4 py-0.5 px-4 rounded-full text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
                    >
                        Add product
                    </button>
                    {submitted}
                </div>
            </Form>
        </section>
    )
}