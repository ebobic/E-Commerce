"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { formatString } from '@/lib/data/utils';

const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

export default function CategoryLink(category: string[]) {    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    
    params.set('category', category);
    
    replace(`${pathname}?${params.toString()}`);
    }
   
    return (
        <>
            {categoryArray.map((category) => (
            <button
                key={category}
                type="button"
                className="px-8 text-start w-full cursor-pointer hover:text-blue-900"
                onClick={() => handleClick(category)}
            >
                {formatString(category)}
            </button>
            ))}
        </>
    )
}