import Link from "next/link"
import Image from "next/image";
import data from "@/lib/data/pages.json";

export default function NavBar() {
    return (
        <nav className="breakout flex py-8 items-center justify-between bg-white">
            <Link href={"/"}>
            <h2 className="text-3xl font-bold text-blue-900">MegaMart</h2>
            </Link>

            <div className="flex gap-8 items-center justify-between">
            <ul className="flex">
                {data["pages"].map((link, index) => (
                <li key={index}>
                    <Link
                        className="hidden text-neutral-800 hover:text-blue-900 md:flex md:px-8"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            
            <div className="flex gap-4">
            <Link href={"#"}>
                <Image
                    src="/search.svg"
                    alt="Search Icon"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href={"#"}>
                <Image
                    src="/user.svg"
                    alt="User Icon"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href={"#"}>
                <Image
                    src="/handbag.svg"
                    alt="Handbag Icon"
                    width={15}
                    height={15}
                />
            </Link>
            <Link href={"#"}>
                <Image
                    className="md:hidden"
                    src="/menu.svg"
                    alt="Menu icon"
                    width={15}
                    height={15}
                />
            </Link>
            </div>
            </div>
        </nav>
    )
}