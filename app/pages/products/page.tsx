import SearchBarProducts from "@/components/search-bar-products"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/categories/category-list"
import NextBreadcrumb from "@/components/breadcrumb/breadcrumb";
import { Suspense } from "react";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  return (
    <section >
      
      <NextBreadcrumb
        homeElement={'Home'}
        activeClasses='text-blue-900!'
        containerClasses='flex py-5'
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl lg:text-3xl text-neutral-800 m-auto pb-6">Products</h1>
          <CategoryList />
          <Suspense fallback={<div>Loading search...</div>}>
            <SearchBarProducts />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductsList searchParams={searchParams} />
        </Suspense>
    </section>
  );
}

