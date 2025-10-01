"use client"

import { Product } from "@/lib/interfaces/products";
import ProductsGrid from "./products-grid";

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
    
    return (
        <ProductsGrid 
            products={searchResults}
            variant="search"
            isLoading={isLoading}
            searchQuery={searchQuery}
            showViewAll={true}
        />
    );
}