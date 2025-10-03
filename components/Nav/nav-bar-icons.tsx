import SearchBar from "../search-bar";
import Link from "next/link";
import Image from "next/image";

type NavBarIconProps = {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function NavBarIcons({
  setSearchOpen,
  menuOpen,
  setMenuOpen,
}: NavBarIconProps) {
  return (
    <div className="flex md:w-1/3 md:justify-end">
      {/* link icons + hamburger menu button */}
      <div className="flex gap-4 md:gap-6">
        {/* search */}
          <SearchBar
            onSearchToggle={(isOpen) => {
              setSearchOpen(isOpen);
              if (isOpen) setMenuOpen(false); // Close mobile menu when search opens
            }}
          />
        {/* user */}
        <Link href={"#"}>
          <div className="w-[24px] h-[24px] relative">
            <Image
              src="/user.svg"
              alt="User Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* shopping cart */}
        <Link href={"#"}>
          <div className="w-[24px] h-[24px] relative">
            <Image
              src="/handbag.svg"
              alt="Handbag Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* hamburger menu toggle */}
        <button
          className="w-[24px] h-[24px] relative md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (!menuOpen) setSearchOpen(false); // Close search when mobile menu opens
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
  );
}
