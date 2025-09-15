import Link from "next/link";
import { usePathname } from "next/navigation";

type PageLink = {
  href: string;
  label: string;
};

export function RenderLink(link: PageLink) {
  const pathname = usePathname();

  const anchorLinks: Record<string, string> = {
    Home: "#home",
    About: "#about",
    Contact: "#contact",
  };

  if (
    pathname === "/" &&
    (link.label === "Home" || link.label === "About" || link.label === "Contact")
  ) {
    return <Link href={anchorLinks[link.label]}>{link.label}</Link>;
  }

  return <Link href={link.href}>{link.label}</Link>;
}