"use client"

import { Product } from "@/lib/interfaces/products";
import ProductCardNew from "./product-card/product-card-new";

interface SearchBarDropdownProps {
    searchResults: Product[];
    isLoading: boolean;
    searchQuery: string;
}

export default function SearchBarDropdown({ 
    searchResults, 
    isLoading, 
    searchQuery 
}: SearchBarDropdownProps) {
    
    // Show loading state
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

    // Show no results state
    if (searchResults.length === 0) {
        return (
            <div className="border-t border-gray-200 p-8 text-center">
                <p className="text-gray-500">No products found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
            </div>
        );
    }

    // Show search results
    return (
        <div className="border-t border-gray-200">
            <div className="p-4">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-h-[900px] overflow-y-auto">
                    {searchResults.map((product) => (
                        <ProductCardNew key={product.id} {...product} />
                    ))}
                </div>
                
                {/* View all rsults Link */}
                {searchResults.length >= 6 && (
                    <div className="text-center mt-4">
                        <a 
                            href={`/pages/products?search=${encodeURIComponent(searchQuery)}`} 
                            className="text-blue-900 hover:text-blue-800 font-bold"
                        >
                            View all products
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}