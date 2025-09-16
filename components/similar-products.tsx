import FeaturedProductList from "./featured-product-list"

type SimilarProductsProps = {
    category: string;
    id: number;
}

export default function SimilarProducts({category, id}: SimilarProductsProps) {
    const limit=0;
    const skip=0;
    const number = 5;

    return (
        <section className="flex flex-col items-center p-12">
            <h2 className="font-bold text-2xl text-neutral-800 ">Similar Products</h2>
            <FeaturedProductList limit={limit} skip={skip} category={category} number={number} id={id}/>
        </section>
    )
}