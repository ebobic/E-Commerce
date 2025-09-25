export default async function UpdateProduct() {

    return (
        <div className="p-6 bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Page header */}
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-neutral-800">Update Product</h1>
                    <p className="text-neutral-600">Product ID:</p>
                </header>

                <section className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
                <form className="space-y-4">
          
                    <div>
                        <label htmlFor="title" className="block font-medium">Title</label>
                        <input
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={"title"}
                        className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block font-medium">Description</label>
                        <textarea
                        name="description"
                        id="description"
                        defaultValue={"description"}
                        className="w-full border p-2 rounded"
                        rows={3}
                        />
                    </div>

                    <div>
                        <label htmlFor="brand" className="block font-medium">Brand</label>
                        <input
                        type="text"
                        name="brand"
                        id="brand"
                        defaultValue={"brand"}
                        className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block font-medium">Price</label>
                        <input
                        type="number"
                        step="0.01"
                        name="price"
                        id="price"
                        defaultValue={0.00}
                        className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="stock" className="block font-medium">Stock</label>
                        <input
                        type="number"
                        name="stock"
                        id="stock"
                        defaultValue={0}
                        className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block font-medium">Category</label>
                        <select
                            name="category"
                            id="category"
                            defaultValue={"category"}
                            className="w-full border p-2 rounded"
                            >

                        </select>
                    </div>

                    <div>
                        <label htmlFor="shippingInformation" className="block font-medium">Shipping Information</label>
                        <textarea
                        name="shippingInformation"
                        id="shippingInformation"
                        defaultValue={"shippingInformation"}
                        className="w-full border p-2 rounded"
                        rows={2}
                        />
                    </div>

                    <div>
                        <label htmlFor="images" className="block font-medium">Images (comma-separated URLs)</label>
                        <input
                        type="text"
                        name="images"
                        id="images"
                        defaultValue={"images"}
                        className="w-full border p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
                    >
                        Save Changes
                    </button>
                </form>
                </section>
            </div>
        </div>
    );
}