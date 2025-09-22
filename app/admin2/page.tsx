import { createProduct } from '@/lib/data/product-add';
import { Toaster } from 'sonner';

export default async function AdminPage(formData: FormData) {

    return (
        <div>
            Admin Page
        {/* <ProductCreateServer /> */}
        <Toaster richColors position="top-right" />
        </div>
    )
}