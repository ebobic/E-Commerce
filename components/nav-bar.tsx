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
                <ul className="flex flex-col absolute top-20 left-0 w-full px-4 bg-white font-semibold text-neutral-800 md:flex-row md:gap-8 md:static md:top-auto md:left-auto md:font-normal">
                    {data["pages"].map((link, index) => (
                    <li key={index}>
                        <Link
                            className="flex items-center justify-between p-2 hover:text-blue-900"
                            href={link.href}
                        >
                            {link.label}
                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3 md:hidden">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                        </svg>
                        </Link>
                        
                    </li>
                    ))}
                </ul>
                
                <div className="flex gap-4">
                    <Link href={"#"}>
                        <div className="w-[15px] h-[15px] relative">
                        <Image
                            src="/search.svg"
                            alt="Search Icon"
                            layout="fill"
                            objectFit="contain"
                        />
                        </div>
                    </Link>
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
                    <Link href={"#"}>
                        <div className="w-[15px] h-[15px] relative md:hidden">
                        <Image
                            src="/menu.svg"
                            alt="Menu icon"
                            layout="fill"
                            objectFit="contain"
                        />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}