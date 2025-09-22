import ProductCreate from "@/components/admin-product-create"
import { Toaster } from 'sonner';

export default function CreateProductPage() {
    return (
        <div className="text-center">
        <ProductCreate />
        <Toaster richColors position="top-right" />
        </div>
    )
}