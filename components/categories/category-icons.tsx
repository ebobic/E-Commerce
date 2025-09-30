import SearchBar from "../search-bar";
import Link from "next/link";
import Image from "next/image";

type IconProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export default function CategoryIcon({menuOpen, setMenuOpen}: IconProps) {
    return (
        <div className="flex md:w-1/3 md:justify-end">
                {/* link icons + hamburger menu button */}
                <div className="flex gap-4 md:gap-6">
                    
                    {/* hamburger menu toggle */}
                    <button 
                        className="w-[24px] h-[24px] relative"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
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
    )
}