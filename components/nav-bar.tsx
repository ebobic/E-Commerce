import Link from "next/link"
import data from "@/lib/data/pages.json";

export default function NavBar() {
    return (
        <nav className="breakout flex items-center justify-between">
            <Link href={"/"} className="flex gap-4 items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-900">MegaMart</h2>
            </Link>

            <ul className="flex">
                {data["pages"].map((link, index) => (
                <li key={index}>
                    <Link
                        className="px-[1.6rem] py-[2rem] flex justify-around text-blue-900 hover:bg-blue-100 hover:text-neutral-800"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    )
}