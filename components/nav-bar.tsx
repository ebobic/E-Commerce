"use client"

import Link from "next/link"
import Image from "next/image";
import data from "@/lib/data/pages.json";
import { useState } from "react";
import SearchBar from "./search-bar";
import { usePathname } from "next/navigation";

type PageLink = {
    href: string;
    label: string;
};

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();

    // ids for anchor links on start page
    const anchorLinks = {
        Home: "#home",
        About: "#about",
        Contact: "#contact",
    };

    const renderLink = (link: PageLink) => {
        // if on start page and link is Home, About or Contact, render anchor link
        if (pathname === "/" &&
            (link.label === "Home" || link.label === "About" || link.label === "Contact")
        ) {
            return (
                <Link href={anchorLinks[link.label]}>{link.label}</Link>
            );
        } else {
            // otherwise normal navigation link
            return (
                <Link href={link.href}>{link.label}</Link>
            );
        }
    };

    return (
        <div className="relative">
        <nav className="flex py-8 items-center justify-between bg-white relative z-50 px-6">
            <Link href={"/"}>
                <h2 className="text-3xl font-bold text-blue-900">MegaMart</h2>
            </Link>

            <div className="flex gap-8 items-center justify-between">

                {/* desktop nav */}
                <ul className="hidden md:flex gap-10">
                    {data["pages"].map((link, index) => (
                    <li key={index} className="text-neutral-800 hover:text-blue-900">{renderLink(link)}</li>
                    ))}
                </ul>

                {/* mobile nav*/}
                {menuOpen && (
                    <ul className="flex flex-col absolute top-20 left-0 w-full px-4 bg-white font-semibold text-neutral-800 md:flex-row md:gap-8 md:static md:top-auto md:left-auto md:font-normal">
                        {data["pages"].map((link, index) => (
                        <li key={index} className="flex items-center justify-between py-2 text-neutral-800 hover:text-blue-900">{renderLink(link)}
                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3 md:hidden">
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </li>
                        ))}
                    </ul>
                )}
                
                {/* link icons + hamburger menu button */}
                <div className="flex gap-4">

                    {/* search */}
                    <SearchBar onSearchToggle={(isOpen) => {
                        setSearchOpen(isOpen);
                        if (isOpen) setMenuOpen(false); // Close mobile menu when search opens
                    }} />

                    {/* user */}
                    <Link href={"#"}>
                        <div className="w-[15px] h-[15px] relative">
                        <Image
                            src="/user.svg"
                            alt="User Icon"
                            layout="fill"
                            objectFit="contain"
                        />
                        </div>
                    </Link>
                    
                    {/* shopping cart */}
                    <Link href={"#"}>
                        <div className="w-[15px] h-[15px] relative">
                        <Image
                            src="/handbag.svg"
                            alt="Handbag Icon"
                            layout="fill"
                            objectFit="contain"
                        />
                        </div>
                    </Link>
                    
                    {/* hamburger menu toggle */}
                    <button 
                        className="w-[15px] h-[15px] relative md:hidden"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            if (!menuOpen) setSearchOpen(false); // Close search when mobile menu opens
                        }}
                    >
                        <Image
                            src="/menu.svg"
                            alt="Menu icon"
                            layout="fill"
                            objectFit="contain"
                        />
                    </button>
                </div>
            </div>
        </nav>
        
        </div>
    )
}