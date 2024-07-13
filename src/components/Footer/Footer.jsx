import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-muted p-6 md:py-12 w-full flex items-center justify-center">
            <div className="container max-w-7xl grid grid-cols-1 gap-8 text-sm md:grid-cols-3 md:gap-8 px-4 sm:px-6 md:px-0">
                <div className="grid gap-2">
                    <h3 className="font-semibold">Acme Inc.</h3>
                    <p>123 Main St.</p>
                    <p>Anytown, USA 12345</p>
                    <p>Phone: (555) 555-5555</p>
                </div>
                <div className="grid gap-2 justify-self-center md:justify-self-start">
                    <h3 className="font-semibold">Edwar Chamalé</h3>
                    <h3 className="font-semibold">Social Media</h3>
                    <div className="flex gap-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                            <FacebookIcon className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                            <TwitterIcon className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                            <LinkedinIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <div className="grid gap-2 justify-self-center md:justify-self-end">
                    <h3 className="font-semibold">Quick Links</h3>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        Services
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}

function FacebookIcon(props) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function LinkedinIcon(props) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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