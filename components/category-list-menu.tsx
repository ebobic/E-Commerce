"use client"

import { useState } from "react";

type MobileMenuProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    // setMenuOpen: boolean;
}

export default function CategoryListMenu({setMenuOpen}: MobileMenuProps) {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <aside className="mt-18">
                <svg className="rtl:rotate-180 w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
            </aside>
        </div>
    )
}