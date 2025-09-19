"use client"

import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import Image from "next/image";

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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 max-h-[900px] overflow-y-auto">
                    {searchResults.map((product) => (
                        <div key={product.id}>
                            <Link href={`/pages/products/${product.id}`} className="block">
                                <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[360px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] xl:h-[480px] bg-white rounded-xl border border-gray-200 overflow-hidden mx-auto flex flex-col">
                                    {/* Product Image */}
                                    <div className="relative w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[180px] xl:h-[220px]">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    
                                    {/* Product Info */}
                                    <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col flex-1">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 mb-1 sm:mb-2 md:mb-3 line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 line-clamp-2 mb-1 sm:mb-2 md:mb-3">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-900">
                                                ${product.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* View All Results Link */}
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