"use client"

import Form from "next/form";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const typesArray = ["Beauty", "Fragrances", "Furniture", "Groceries", "Home Decoration", "Kitchen Accessories", "Laptops", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Motorcycle", "Skin Care", "Smartphones",
"Sports Accessories",
"Sunglasses",
"Tablets",
"Tops",
"Vehicle",
"Womens Bags",
"Womens Dresses",
"Womens Jewellery",
"Womens Shoes",
"Womens Watches"]

export default function CategoryList() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleClick = (term: string) => {
    const params = new URLSearchParams(searchParams);
    
    const category = term;
    params.set('category', category);
    
    replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="grid grid-cols-1 justify-start">
            {typesArray.map((term) => (
        <button
            key={term}
            type="button"
            className="text-start cursor-pointer hover:text-blue-900"
            onClick={() => handleClick(term)}
        >
            {term}
        </button>
            ))}
        </div>
    )
}