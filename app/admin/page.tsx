import ProductDeleteClient from "@/components/admin-product-create"
import ProductDeleteServer from "@/components/admin-product-create2";
import { Toaster } from 'sonner';

export default function AdminPage() {
    return (
        <div>
            Admin Page

        <ProductDeleteClient />
        <ProductDeleteServer />
        <Toaster richColors position="top-right" />
        </div>
    )
}