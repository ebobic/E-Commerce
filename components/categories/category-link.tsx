"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { formatString } from '@/lib/data/utils';

// type categoryProps = {
//   category: string;
// };

const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

// export default function CategoryLink(category: categoryProps) {
export default function CategoryLink(category: string, id?: string) {    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const handleClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    
    // const category = category;
    params.set('category', category);
    
    replace(`${pathname}?${params.toString()}`);
    }
   
    return (
        <ul className="">
            <div className="grid grid-cols-1">
                {categoryArray.map((category) => (
                <button
                    key={category}
                    type="button"
                    className="px-8 text-start cursor-pointer hover:text-blue-900"
                    onClick={() => handleClick(category)}
                >
                    {formatString(category)}
                </button>
                ))}
            </div>
        </ul>
    )
}