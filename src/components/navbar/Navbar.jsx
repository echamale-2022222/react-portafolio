import React from "react";
import { useState } from "react"
import { Button } from '../Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="bg-[#0F172A] text-white py-4 shadow">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                    <a href="#" className="flex items-center gap-2 font-bold text-lg">
                        <CodeIcon className="h-6 w-6" />
                        Portfolio
                    </a>
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-[#1e293b] z-50 flex flex-col gap-4 p-4 md:static md:bg-transparent md:p-0 md:w-auto ${isOpen ? "flex" : "hidden"} md:flex md:flex-row`}
                    >
                        <nav className="flex flex-col gap-4 md:flex-row md:items-center">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rainbow-border"
                            >
                                About me
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rainbow-border"
                            >
                                My goals
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rainbow-border"
                            >
                                My projects
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rainbow-border"
                            >
                                My skills
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rainbow-border"
                            >
                                Contact me
                            </a>
                        </nav>
                        <Button variant="outline" size="icon" className="self-end md:hidden" onClick={() => setIsOpen(false)}>
                            <XIcon className="h-6 w-6" />
                            <span className="sr-only">Close navigation</span>
                        </Button>
                    </div>
                    <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation</span>
                    </Button>
                </div>
            </header>
        </div>
    );
};

const CodeIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

export default React.memo(Navbar);

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}