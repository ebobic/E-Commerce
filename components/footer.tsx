"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Social media data
const socialLinks = [
    { name: "Facebook", src: "/footer/facebook.svg", href: "#" },
    { name: "Instagram", src: "/footer/instagram.svg", href: "#" },
    { name: "TikTok", src: "/footer/tiktok.svg", href: "#" }
];

// Nav links
const navigationLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Products", href: "#", active: true },
    { name: "About Us", href: "#", active: true },
    { name: "Contact", href: "#", active: true }
];

// Support links
const supportLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" }
];


export default function Footer() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    return (
        <footer className="bg-blue-950 text-white">
            {/* Main Footer Content */}
            <div className="px-6 py-2 md:py-3 lg:py-12">
                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    {/* Logo  - Centered on Mobile/Tablet */}
                    <div className="text-center mb-6 mt-2 md:mt-3">
                        <Link href={"/"} className="cursor-pointer">
                            <h2 className="text-3xl font-bold text-white">MegaMart</h2>
                        </Link>
                        <div className="flex space-x-4 justify-center mt-4">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.name}
                                    href={social.href} 
                                    className="hover:opacity-80 transition-opacity duration-200 cursor-pointer p-1.5"
                                >
                                    <Image 
                                        src={social.src} 
                                        alt={social.name} 
                                        width={20} 
                                        height={20}
                                        className="filter brightness-0 invert"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Content Grid for Mobile/Tablet */}
                    <div className="grid grid-cols-1 gap-8 md:gap-12">

                        {/* Left Column - Navigation */}
                        <div className="space-y-4 text-center">
                            <div>
                                <button 
                                    onClick={() => setIsNavOpen(!isNavOpen)}
                                    className="flex items-center justify-between w-full text-sm font-semibold mb-4 md:mb-6 uppercase tracking-wider text-white hover:text-gray-200 transition-colors duration-200"
                                >
                                    Navigation
                                    <svg 
                                        className={`w-5 h-5 transition-transform duration-200 ${isNavOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <ul className={`space-y-3 text-sm transition-all duration-200 ${isNavOpen ? 'block' : 'hidden'}`}>
                                    {navigationLinks.map((link) => (
                                        <li key={link.name}>
                                            {link.active ? (
                                                <Link 
                                                    href={link.href} 
                                                    className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                                                >
                                                    {link.name}
                                                </Link>
                                            ) : (
                                                <span className="text-white cursor-default">{link.name}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Middle Column - Support */}
                        <div className="space-y-4 text-center">
                        <div>
                                <button 
                                    onClick={() => setIsSupportOpen(!isSupportOpen)}
                                    className="flex items-center justify-between w-full text-sm font-semibold mb-4 md:mb-6 uppercase tracking-wider text-white hover:text-gray-200 transition-colors duration-200"
                                >
                                    Support
                                    <svg 
                                        className={`w-5 h-5 transition-transform duration-200 ${isSupportOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <ul className={`space-y-3 text-sm transition-all duration-200 ${isSupportOpen ? 'block' : 'hidden'}`}>
                                    {supportLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link 
                                                href={link.href} 
                                                className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                                            >
                                                {link.name}
                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Newsletter */}
                        <div className="text-center">
                            <h4 className="text-sm font-semibold mb-4 md:mb-6 uppercase tracking-wider text-white">Stay Updated</h4>
                            <p className="text-sm text-white mb-4 md:mb-6 leading-relaxed">
                                Get exclusive offers, new collections, and event updates delivered to your inbox.
                            </p>
                            <div className="space-y-3 md:space-y-4 max-w-64 mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-[50px] text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-blue-900/70 transition-colors duration-150"
                                />
                                <button className="w-full bg-white text-blue-950 py-3 px-6 rounded-[50px] text-sm font-semibold hover:bg-gray-100 hover:shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center gap-2">
                                    <span>Subscribe</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3">
                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                        </div>
                        
                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:min-h-[225px] lg:gap-16">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center text-center">
                        <Link href={"/"} className="cursor-pointer">
                            <h2 className="text-3xl font-bold text-white">MegaMart</h2>
                        </Link>
                        <div className="flex space-x-4 justify-center mt-4">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.name}
                                    href={social.href} 
                                    className="hover:opacity-80 transition-opacity duration-200 cursor-pointer p-1.5"
                                >
                                    <Image 
                                        src={social.src} 
                                        alt={social.name} 
                                        width={20} 
                                        height={20}
                                        className="filter brightness-0 invert"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Support & Navigation */}
                    <div className="flex gap-12">
                        {/* Support */}
                        <div className="text-center">
                            <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider text-white">Support</h4>
                            <ul className="space-y-3 text-sm">
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Navigation */}
                        <div className="text-center">
                            <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider text-white">Navigation</h4>
                            <ul className="space-y-3 text-sm">
                                {navigationLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.active ? (
                                            <Link 
                                                href={link.href} 
                                                className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <span className="text-white cursor-default">{link.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="text-center">
                        <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider text-white">Stay Updated</h4>
                        <p className="text-sm text-white/90 mb-2 leading-relaxed max-w-xs">
                            Get exclusive offers, new collections, and event updates delivered to your inbox.
                        </p>
                        <div className="space-y-2 max-w-64 mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 bg-blue-900/50 border border-blue-700/50 rounded-[50px] text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-blue-900/70 transition-colors duration-150"
                            />
                            <button className="w-full bg-white text-blue-950 py-3 px-6 rounded-[50px] text-sm font-semibold hover:bg-gray-100 hover:shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center gap-2">
                                <span>Subscribe</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3">
                                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-800/50">
                    <div className="px-6 py-6">
                        <div className="flex justify-center">
                            <p className="text-sm text-white">
                                © 2025 MegaMart. All rights reserved.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
}