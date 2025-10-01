import SearchBarProducts from "@/components/search-bar-products"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/categories/category-list"
import NextBreadcrumb from "@/components/breadcrumb/breadcrumb";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <section>
      <NextBreadcrumb
        homeElement={'Home'}
        activeClasses='text-blue-900!'
        containerClasses='flex py-5'
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />
        <div className="flex">
          <CategoryList />
          <SearchBarProducts />
        </div>
        <ProductsList searchParams={searchParams} />
    </section>
  );
}

