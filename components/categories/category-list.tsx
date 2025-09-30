"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { formatString } from '@/lib/data/utils';
import { useState } from "react";
import CategoryIcon from "./category-icons";
import CategoryMenu from "./category-menu";
import CategoryLink from './category-link';

const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

export default function CategoryList() {
    const [menuOpen, setMenuOpen] = useState(false);

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
        <aside className="absolute pt-2 text-md">
            <div className="relative">
                {/* {categoryArray.map((category) => ( */}
                {/* // <CategoryLink {...category} /> */}
                {/* ))} */}
                {/* <ul className="hidden">
                    <div className="grid grid-cols-1">
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
                </ul> */}

                {menuOpen && <CategoryMenu setMenuOpen={setMenuOpen}/>}

                <CategoryIcon 
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
        </aside>
    )
}