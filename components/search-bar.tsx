"use client"

import { useState } from "react";
import Image from "next/image";

export default function SearchBar() {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            {/* Search Button */}
            <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-[15px] h-[15px] relative"
            >
                <Image
                    src="/search.svg"
                    alt="Search Icon"
                    layout="fill"
                    objectFit="contain"
                />
            </button>

            {/* Search Dropdown */}
            {searchOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                    <div className="breakout py-3">
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
                                type="text"
                                placeholder="Search for a product..."
                                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none text-sm font-medium"
                                autoFocus
                            />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="w-5 h-5 relative ml-3 text-gray-400 hover:text-gray-600"
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
