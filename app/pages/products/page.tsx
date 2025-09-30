import SearchBarProducts from "@/components/search-bar-products"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/categories/category-list"
import NextBreadcrumb from "@/components/breadcrumb";

export default async function Products({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  return (
    <section className="flex justify-around">
      <div className="px-6 py-1 w-2/10">
        <aside className="p-4 border">
          <h3 className="pb-4 font-semibold">| Categories</h3>
          <ul className="pb-2">
            <CategoryList />
          </ul>
        </aside>
      </div>

      <div className="w-9/10">
      <NextBreadcrumb
          homeElement={'Home'}
          activeClasses='text-blue-900!'
          containerClasses='flex py-5'
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
        <SearchBarProducts />
        <ProductsList searchParams={searchParams} />
      </div>
    </section>
  );
}
