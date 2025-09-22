import { fetchProductsData } from "@/lib/data/product-data";
import { Product } from "@/lib/interfaces/products";
import Link from "next/link";

export default async function AdminPage() {
  // Fetch 30 products from API
  const { products } = await fetchProductsData(30, 0);

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">Admin</h1>
          <p className="text-neutral-600">Product Management</p>
        </header>

        {/* Main content card */}
        <div className="bg-white rounded-lg shadow p-4">
          {/* Table header + create button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Products</h2>
            <Link 
              href="/admin/create"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Create Product
            </Link>
          </div>
          
          {/* Products table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left p-3 font-semibold text-blue-900">ID</th>
                <th className="text-left p-3 font-semibold text-blue-900">Title</th>
                <th className="text-left p-3 font-semibold text-blue-900">Price</th>
                <th className="text-left p-3 font-semibold text-blue-900">Stock</th>
                <th className="text-left p-3 font-semibold text-blue-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* loop through products and display each row! */}
              {products.map((product: Product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">{product.title}</td>
                  <td className="p-3">${product.price}</td>
                  <td className="p-3">{product.stock}</td>
                  <td className="p-3">
                    <button className="bg-red-100 text-red-900 px-3 py-1 rounded hover:bg-red-200">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
    </div>
  );
}
