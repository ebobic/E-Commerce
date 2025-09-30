"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageLink = {
  href: string;
  label: string;
};

export default function CategoriesList(link: PageLink) {
    const pathname = usePathname();

    const anchorLinks: Record<string, string> = {
        Home: "#home",
        About: "#about",
        Contact: "#contact",
    };

    // To make the page scroll smoothly when clicking navbar links
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
        e.preventDefault();
        const element = document.querySelector(anchor);
        if (element) {
            // Make sure content isn't hidden behind the navbar!
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    // if on start page and link is Home, About or Contact, render anchor link
    if (pathname === "/" &&
        (link.label === "Home" || link.label === "About" || link.label === "Contact")
    ) {
        return (
            <Link 
                href={anchorLinks[link.label]}
                onClick={(e) => handleAnchorClick(e, anchorLinks[link.label])}
            >
                {link.label}
            </Link>
        );
    } else {
        // otherwise normal navigation link
        return <></>
            // <Link href={link.href}>{link.label}</Link>
            // <button
            //     key={cat}
            //     type="button"
            //     className="text-start cursor-pointer hover:text-blue-900"
            //     onClick={() => handleClick(cat)}
            // >
            //     {formatString(cat)}
            // </button>
    }
}