import Link from "next/link";
import { fetchAllCategories } from "@/lib/data/product-data";
import { Category } from "@/lib/interfaces/products";

export default async function CategoryList() {
    const response = await fetchAllCategories();
    const results: Category[] = response || [];

    return (
        <>
            <aside className="p-4 border">
                <h3 className="pb-4 font-semibold">| Categories</h3>
                <ul className="pb-2">
                    {results.map((category, index) => (
                        <li key={index}><Link href="#">{category.name}</Link></li>
                    ))}
                </ul>
            </aside>
        </>
    )
}