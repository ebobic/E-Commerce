import { Product } from "@/lib/interfaces/products";
import { fetchAllCategories, fetchProductById } from "@/lib/data/product-data";
import UpdateProductForm from "@/components/admin-product-update";

interface UpdateProductPageProps {
    params: Promise<{ id: string }>;
}


export default async function UpdateProductPage({ params }: UpdateProductPageProps) {
    const { id } = await params;
    const product: Product = await fetchProductById(id);
    const categories = await fetchAllCategories();

    return (
        <div className="p-6 bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Page header */}
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-neutral-800">Update Product</h1>
                    <p className="text-neutral-600">Product ID:{product.id}</p>
                </header>

                {/* Form */}
                <section className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
                    <UpdateProductForm product={product} categories={categories} />
                </section>
            </div>
        </div>
    );
}