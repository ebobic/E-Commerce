"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { formatString } from '@/lib/data/utils';

const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

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
                {formatString(cat)}
            </button>
            ))}
        </div>
    )
}