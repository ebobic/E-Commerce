import Link from "next/link";
import { usePathname } from "next/navigation";

type PageLink = {
  href: string;
  label: string;
};

export default function RenderLink(link: PageLink) {
    const pathname = usePathname();

    const anchorLinks: Record<string, string> = {
        Home: "#home",
        About: "#about",
        Contact: "#contact",
    };

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
}