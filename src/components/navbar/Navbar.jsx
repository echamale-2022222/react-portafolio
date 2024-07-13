import { useState } from "react"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-[#f1f5f9] min-h-screen">
            <header className="bg-[#1e293b] text-white py-4 shadow">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                    <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
                        <BriefcaseIcon className="h-6 w-6" />
                        Portafolio
                    </Link>
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-[#1e293b] z-50 flex flex-col gap-4 p-4 md:static md:bg-transparent md:p-0 md:w-auto ${isOpen ? "flex" : "hidden"
                            }`}
                    >
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Sobre mí
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Mis metas
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Mis proyectos
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Mis skills
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Contáctame
                            </Link>
                        </nav>
                        <Button variant="outline" size="icon" className="self-end" onClick={() => setIsOpen(false)}>
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
    )
}

function BriefcaseIcon(props) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}

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