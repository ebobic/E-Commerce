"use client"

import { useState } from "react";
import CategoryIcon from "./category-icons";
import CategoryMenu from "./category-menu";

export default function CategoryList() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <aside className="absolute pt-2 text-md">
            <div className="relative">
                {menuOpen && <CategoryMenu setMenuOpen={setMenuOpen}/>}
                <CategoryIcon 
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
        </aside>
    )
}