import ProductCard from "@/components/product-card";
import { fetchProductById } from "@/lib/data/product-data";


async function ProductDetails(
    {
       params    
    }: {
        params: Promise<{ id: string }>;
}) {
    const productId = await params;
    console.log("productId: ", productId)
    //fetch Product Data
    const productData = await fetchProductById(productId.id)
    return (
        <div>
            {
                <ProductCard {...productData} />
                
            }
        </div>
    )
}

export default async function ProductById(
    {
        params
        
    }: {
            params: Promise<{ id: string }>;
        }) {
    return (
        <main>
            <ProductDetails params={params} />
        </main>
    )
    }