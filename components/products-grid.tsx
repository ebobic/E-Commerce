// Global component for displaying product grids across the site!
// Handles featured products, products page, and search dropdown

import { Product } from "@/lib/interfaces/products";
import ProductCard from "./product-card/product-card";

interface ProductsGridProps {
  products: Product[];
  variant?: "featured" | "products" | "search";
  emptyMessage?: string;
  emptyDescription?: string;
  
  // Searchbar dropdown specific props
  isLoading?: boolean;
  searchQuery?: string;
  showViewAll?: boolean;
  onItemClick?: () => void;
}

export default function ProductsGrid({
  products,
  variant = "products",
  emptyMessage = "No products found",
  emptyDescription = "Try adjusting your search or filter criteria.",
  isLoading = false,
  searchQuery = "",
  showViewAll = false,
  onItemClick,
}: ProductsGridProps) {
  
  // Loading state
  if (isLoading) {
    return (
      <div className="border-t border-gray-200 p-8 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Finding products...</p>
      </div>
    );
  }
  
  // Empty state
  if (products.length === 0) {
    if (variant === "search") {
      return null;
    }
    
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {emptyMessage}
        </h2>
        <p className="text-gray-500 text-center">{emptyDescription}</p>
      </div>
    );
  }

  // Grid layout configuration
  const gridClasses = {
    featured: "grid gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    products: "grid gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    search: "grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-stretch max-h-[900px] overflow-y-auto",
  };

  // Render product grid
  const gridContent = (
    <ul className={`${gridClasses[variant]} p-4 w-full place-items-stretch`}>
      {products.map((product: Product) => (
        <li key={product.id} onClick={onItemClick} className="w-full">
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );

  // Search variant with "View all" link
  if (variant === "search") {
    return (
      <div className="border-t border-gray-200">
        <div className="p-2 md:px-4">
          {gridContent}
          
          {showViewAll && products.length >= 8 && (
            <div className="text-center mt-4">
              <a 
                href={`/pages/products?search=${encodeURIComponent(searchQuery)}`} 
                className="text-blue-900 hover:text-blue-800 font-bold"
                onClick={onItemClick}
              >
                View all products
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return gridContent;
}

