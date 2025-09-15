"use client"

import Link from "next/link"
import data from "@/lib/data/pages.json";
import { useState } from "react";
import RenderLink from "./render-link";
import MobileMenu from "./mobile-menu";
import NavBarIcons from "./nav-bar-icons";


export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="flex items-center justify-between py-8 bg-white relative z-50 px-6">
                
                {/* ul/li nav */}
                <div className="hidden md:flex text-1xl font-semibold md:justify-start md:w-1/3">

                    {/* desktop nav */}
                    <ul className="hidden md:flex gap-6">
                        {data["pages"].map((link, index) => (
                        <li key={index} className="text-neutral-800 hover:text-blue-900">
                            <RenderLink {...link} />
                        </li>
                        ))}
                    </ul>
                </div>

                {/* mobile nav*/}
                {menuOpen && <MobileMenu/>}
                
                {/* logo */}
                <div className="flex w-1/2 md:w-1/3 md:justify-around">
                    <Link href={"/"}>
                        <h2 className="text-3xl font-bold text-blue-900">MegaMart</h2>
                    </Link>
                </div >

                {/* icons */}
                <NavBarIcons 
                    searchOpen={searchOpen}
                    setSearchOpen={setSearchOpen}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </nav>
        </div>
    )
}