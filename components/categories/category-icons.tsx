import Image from "next/image";

type IconProps = {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export default function CategoryIcon({menuOpen, setMenuOpen}: IconProps) {
    return (
        <button 
            className="w-[130px] h-[15px] hover:cursor-pointer"
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
    )
}