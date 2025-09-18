"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useDebouncedCallback } from 'use-debounce';
import { Product } from '@/lib/interfaces/products';
import { fetchSearchProducts, fetchProductsByCategory } from '@/lib/data/product-data';
import SearchBarDropdown from './search-bar-dropdown';

interface SearchBarProps {
    onSearchToggle?: (isOpen: boolean) => void;
}

export default function SearchBar({ onSearchToggle }: SearchBarProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Search function with debouncing
    const handleSearch = useDebouncedCallback(async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        setIsLoading(true);
        try {
            // Search both products and categories
            const [productResults, categoryResults] = await Promise.all([
                fetchSearchProducts(query),
                fetchProductsByCategory(query)
            ]);

            // Combine results and remove duplicates
            const combinedResults = [...productResults.products, ...categoryResults.products];
            const uniqueResults = combinedResults.filter((product, index, self) => 
                index === self.findIndex(p => p.id === product.id)
            );

            setSearchResults(uniqueResults);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    }, 300);


    // MOBILE/TABLET: Trigger keyboard when search dropdown opens
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    // ALL DEVICES: Backdrop effects when search is open/closed
    useEffect(() => {
        const applyBackdropEffects = () => {
            // Backdrop effect that darkens content below!
            const backdrop = document.createElement('div');
            backdrop.id = 'search-backdrop';
            backdrop.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 45;
                pointer-events: none;
            `;
            document.body.appendChild(backdrop);
            
            // Prevent scrolling on all devices
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        };
        
        const removeBackdropEffects = () => {
            // Remove backdrop overlay
            const backdrop = document.getElementById('search-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            
            // Restore scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        };
        
        if (searchOpen) {
            applyBackdropEffects();
        } else {
            removeBackdropEffects();
        }
        
        // If user leaves page while search is open, fix the page back to normal
        return removeBackdropEffects;
    }, [searchOpen]);

    return (
        <>
            {/* Search Button */}
            <button 
                onClick={() => {
                    const newState = !searchOpen;
                    setSearchOpen(newState);
                    onSearchToggle?.(newState);
                }}
                className="w-[25px] h-[25px] relative"
            >
                <Image
                    src="/search.svg"
                    alt="Search Icon"
                    layout="fill"
                    objectFit="contain"
                />
            </button>

            {/* MOBILE/TABLET: Block clicks on navbar when search is open */}
            {searchOpen && (
                <div className="fixed inset-0 z-40 md:hidden" />
            )}

            {/* Search Dropdown */}
            {searchOpen && (
                <div className="absolute top-full left-0 w-full bg-white z-50">
                    <div className="py-3">
                        <div className="flex items-center px-4 py-3">
                            {/* Search Icon */}
                            <div className="w-5 h-5 relative mr-3">
                                <Image
                                    src="/search.svg"
                                    alt="Search Icon"
                                    layout="fill"
                                    objectFit="contain"
                                    className="text-gray-400"
                                />
                            </div>
                            
                            {/* Search Input */}
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for a product..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    handleSearch(e.target.value);
                                }}
                                className="flex-1 bg-transparent text-gray-600 placeholder-gray-600 focus:outline-none text-base font-medium"
                            />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchQuery('');
                                    setSearchResults([]);
                                    onSearchToggle?.(false);
                                }}
                                className="w-5 h-5 relative ml-3 text-gray-600 hover:text-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Search Results Dropdown */}
                        <SearchBarDropdown 
                            searchResults={searchResults}
                            isLoading={isLoading}
                            searchQuery={searchQuery}
                        />
                    </div>
                </div>
            )}
        </>
    );
}