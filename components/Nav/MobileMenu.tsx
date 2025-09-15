import RenderLink from "./render-link"
import data from "@/lib/data/pages.json";


export default function MobileMenu() {
    return (
        <ul className="flex flex-col absolute top-20 left-0 w-full px-4 bg-white text-neutral-800 md:flex-row md:gap-8 md:static md:top-auto md:left-auto md:font-normal">
            {data["pages"].map((link, index) => (
            <li key={index} className="flex items-center justify-between py-2 text-neutral-800 hover:text-blue-900">
                <RenderLink {...link} />
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3 md:hidden">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
            </li>
            ))}
        </ul>
    )
}