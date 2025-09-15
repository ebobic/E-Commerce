import Link from "next/link";
import { fetchCategoryList } from "@/lib/extra/product-data";
import { CapitalizeFirstLetter } from "@/lib/data/utils";

export default async function CategoryList() {
    const response = await fetchCategoryList();
    const categoryList: string[] = response || [];

    return (
        <>
            <aside className="p-4 border">
                <h3 className="pb-4 font-semibold">| Categories</h3>
                <ul className="pb-2">
                    {categoryList.map((category, index) => (
                        <li key={index}><Link href="#">{CapitalizeFirstLetter(category)}</Link></li>
                    ))}
                </ul>
            </aside>
        </>
    )
}