"use client"

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";

export default function SearchBarProducts() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
    }, 600)

    return (
        <section className="flex justify-center">
        <div className="relative inline-block w-6/10">
            <input
                type="text"
                aria-label="Search for a product"
                placeholder="Search for a product..."
                className="py-2 px-4 w-full border rounded-full"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            defaultValue={searchParams.get('search')?.toString()}
            />
            <Image
                src="/search.svg"
                alt="Search icon"
                width={50}
                height={50}
                className="absolute opacity-25 right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
        </div>
        </section>
    )
}