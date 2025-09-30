"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { formatString } from '@/lib/data/utils';
// NEW - START
import { useState } from "react";
import data from "@/lib/data/pages.json";
import CategoryIcon from "./category-icons";
import CategoryMenu from "./category-menu";
import CategoriesList from './category-link';
// NEW - END


const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

export default function CategoryList() {
    // NEW - START
        const [menuOpen, setMenuOpen] = useState(false);
    // NEW - END

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
        // NEW - START
        <div className="relative">
                
                {/* ul/li nav */}
                <div className="hidden md:flex text-1xl md:justify-start md:w-1/3">

                    {/* desktop nav */}
                    <ul className="hidden md:flex gap-6">
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
                        {data["pages"].map((link, index) => (
                        <li key={index} className="text-neutral-800 hover:text-blue-900">
                            <CategoriesList {...link} />
                        </li>
                        ))}
                    </ul>
                </div>

                {/* mobile nav*/}
                {menuOpen && <CategoryMenu setMenuOpen={setMenuOpen}/>}

                {/* icons */}
                <CategoryIcon 
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
        </div>
        // NEW - END
        
    )
}