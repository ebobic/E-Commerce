"use client";

import { Product } from "@/lib/interfaces/products";
import ProductCard from "./product-card/product-card";
import Link from "next/link";
import Image from "next/image";

interface SearchBarDropdownProps {
  searchResults: Product[];
  isLoading: boolean;
  searchQuery: string;
  onItemClick?: () => void;
}

export default function SearchBarDropdown({
  searchResults,
  isLoading,
  searchQuery,
  onItemClick,
}: SearchBarDropdownProps) {
  // Show loading state
  if (isLoading) {
    return (
      <div className="border-t border-gray-200 p-8 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Finding products...</p>
      </div>
    );
  }

  // Show no results state - just return empty div
  if (searchResults.length === 0) {
    return null;
  }

  // Show search results
  return (
    <div className="border-t border-gray-200">
      <div className="p-2 md:px-4">
        {/* Product Grid - noMargin removes card margins so grid gap controls spacing */}
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-1 md:grid-cols-8 justify-items-stretch max-h-[900px] overflow-y-auto">
          {searchResults.map((product) => (
            <div
              key={product.id}
              onClick={onItemClick}
              className="cursor-pointer"
            >
              <ProductCard {...product} noMargin={true} />
            </div>
          ))}
        </div>

        {/* View all rsults Link */}
        {searchResults.length >= 8 && (
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
