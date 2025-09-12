"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SearchBarProps {
    onSearchToggle?: (isOpen: boolean) => void;
}

export default function SearchBar({ onSearchToggle }: SearchBarProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);


    // MOBILE/TABLET: Trigger keyboard when search dropdown opens
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    // ALL DEVICES: Backdrop effects when search is open/closed
    useEffect(() => {
        const mainContent = document.querySelector('main') || document.body;
        
        const applyBackdropEffects = () => {
            mainContent.style.filter = 'brightness(0.5)';
            // Prevent scrolling on all devices
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        };
        
        const removeBackdropEffects = () => {
            mainContent.style.filter = 'brightness(1)';
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
                className="w-[15px] h-[15px] relative"
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
                                        className="flex-1 bg-transparent text-gray-600 placeholder-gray-600 focus:outline-none text-base font-medium"
                                    />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setSearchOpen(false);
                                    onSearchToggle?.(false);
                                }}
                                className="w-5 h-5 relative ml-3 text-gray-600 hover:text-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}