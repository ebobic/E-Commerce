import Link from "next/link";
import Image from "next/image";

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
    return (
        <footer className="bg-blue-950 text-white">
            {/* Main Footer Content */}
            <div className="px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column - Company Info & Social */}
                    <div className="space-y-8">
                        {/* Company Brand */}
                        <div>
                            <Link href={"/"} className="hover:scale-105 transition-transform duration-200 cursor-pointer">
                                <h2 className="text-4xl font-bold text-white mb-4">MegaMart</h2>
                            </Link>
                            <p className="text-white text-sm leading-relaxed max-w-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        
                        {/* Social Media */}
                        <div>
                            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">Follow Us</h4>
                            <div className="space-y-3">
                                {socialLinks.map((social) => (
                                    <Link 
                                        key={social.name}
                                        href={social.href} 
                                        className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                                    >
                                        <Image 
                                            src={social.src} 
                                            alt={social.name} 
                                            width={20} 
                                            height={20}
                                            className="filter brightness-0 invert"
                                        />
                                        <span className="text-white text-sm">Follow us on {social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Navigation & Information */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Navigation Links */}
                        <div>
                            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">Navigation</h4>
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

                        {/* Support Links */}
                        <div>
                            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">Support</h4>
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
                    </div>

                    {/* Right Column - Newsletter */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">Stay Updated</h4>
                        <p className="text-sm text-white mb-6 leading-relaxed">
                            Sign up to receive information about our collections and interactions, exclusive offers, our magazine and events.
                        </p>
                        <div className="space-y-4">
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
        </footer>
    );
}