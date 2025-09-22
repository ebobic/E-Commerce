import ProductCreate from "@/components/admin-product-create"
import { Toaster } from 'sonner';

export default function AdminPage() {
    return (
        <div className="text-center">
            Admin Page
        <ProductCreate />
        <Toaster richColors position="top-right" />
        </div>
    )
}