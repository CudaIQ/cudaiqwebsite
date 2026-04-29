import React from 'react';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
                    </div>
                    
                    <nav className="hidden md:flex space-x-8 align-center">
                        <a href="/home" className="text-gray-700 hover:text-gray-900 h-fit">Home</a>
                        <a href="/services" className="text-gray-700 hover:text-gray-900 h-fit">Services</a>
                        <a href="/industries" className="text-gray-700 hover:text-gray-900 h-fit">Industries</a>
                        <a href="/platforms" className="text-gray-700 hover:text-gray-900 h-fit">Platforms</a>
                        <a href="/" className="text-gray-700 hover:text-gray-900 h-fit">Case Study</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 h-fit">About</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 h-fit">Resources</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 h-fit">Contact</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 h-fit">Company Deck</a>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book a Discovery Call
                        </button>
                    </nav>

                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}