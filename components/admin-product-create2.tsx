'use client'
 
import { createProduct } from "@/lib/data/product-add"
 
export function Button() {
  return <button formAction={createProduct}>Create</button>
}
 
export default function ClientComponent({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void
}) {
  return <form action={updateItemAction}>{/* ... */}</form>
}