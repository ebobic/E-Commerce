import Link from "next/link"
import Image from "next/image";
import data from "@/lib/data/pages.json";

export default function NavBar() {
    return (
        <nav className="breakout flex items-center justify-around px-[1.6rem] py-[2rem] bg-white">
            <Link href={"/"}>
            <h2 className="text-3xl font-bold text-blue-900">MegaMart</h2>
            </Link>

            <div className="flex gap-4 items-center">
            <ul className="flex">
                {data["pages"].map((link, index) => (
                <li key={index}>
                    <Link
                        className="hidden text-blue-900 hover:bg-blue-100 hover:text-neutral-800 md:flex md:px-[1.6rem]"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            
            <div className="flex gap-2">
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