import React from 'react'

export const Skills = () => {
    return (
        <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-6">
            <Card className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                        <CodepenIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">React</h3>
                </div>
                <div className="mt-4">
                    <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary rounded-full h-4 w-[90%]" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">90%</div>
                </div>
            </Card>
            <Card className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                        <CodepenIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Node.js</h3>
                </div>
                <div className="mt-4">
                    <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary rounded-full h-4 w-[85%]" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">85%</div>
                </div>
            </Card>
            <Card className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                        <WindIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                </div>
                <div className="mt-4">
                    <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary rounded-full h-4 w-[95%]" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">95%</div>
                </div>
            </Card>
            <Card className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                        <TypeIcon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">TypeScript</h3>
                </div>
                <div className="mt-4">
                    <div className="bg-muted rounded-full h-4">
                        <div className="bg-primary rounded-full h-4 w-[92%]" />
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">92%</div>
                </div>
            </Card>
        </section>
    )
}

function CodepenIcon(props) {
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
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" x2="12" y1="22" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" x2="12" y1="2" y2="8.5" />
        </svg>
    )
}

function TypeIcon(props) {
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
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" x2="15" y1="20" y2="20" />
            <line x1="12" x2="12" y1="4" y2="20" />
        </svg>
    )
}

function WindIcon(props) {
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
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
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