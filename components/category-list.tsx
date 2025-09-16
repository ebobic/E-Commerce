"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const categoryArray = ["Beauty", "Fragrances", "Furniture", "Groceries", "Home Decoration", "Kitchen Accessories", "Laptops", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Motorcycle", "Skin Care", "Smartphones", "Sports Accessories", "Sunglasses", "Tablets", "Tops", "Vehicle", "Womens Bags", "Womens Dresses", "Womens Jewellery", "Womens Shoes", "Womens Watches"]

// export default function CategoryList({cat}: {cat: string}) {
export default function CategoryList() {    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleClick = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    
    const category = cat;
    params.set('category', category);
    
    replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="grid grid-cols-1 justify-start">
            {categoryArray.map((cat) => (
            <button
                key={cat}
                type="button"
                className="text-start cursor-pointer hover:text-blue-900"
                onClick={() => handleClick(cat)}
            >
                {cat}
            </button>
            ))}
        </div>
    )
}