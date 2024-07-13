import React from 'react'

export const Proyectos = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center">
            <div className="container grid gap-8 px-4 md:px-6 flex justify-center">
                <Card className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[calc(100%-200px)]">
                    <img
                        src="/placeholder.svg"
                        width="510"
                        height="360"
                        alt="Project Image"
                        className="rounded-l-xl object-cover md:rounded-l-xl md:rounded-tr-none"
                    />
                    <div className="space-y-4 p-6">
                        <div>
                            <CardTitle className="text-lg font-semibold">Project 1</CardTitle>
                            <div className="mt-1 text-muted-foreground">
                                <span className="inline-flex flex-wrap gap-2">
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">React</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Lorem ipsum</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Node.js</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl aliquam
                            nisl vel aliquam nisl.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View on GitHub
                        </Link>
                    </div>
                </Card>
                <Card className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[calc(100%-200px)]">
                    <img
                        src="/placeholder.svg"
                        width="510"
                        height="360"
                        alt="Project Image"
                        className="rounded-l-xl object-cover md:rounded-l-xl md:rounded-tr-none"
                    />
                    <div className="space-y-4 p-6">
                        <div>
                            <CardTitle className="text-lg font-semibold">Project 2</CardTitle>
                            <div className="mt-1 text-muted-foreground">
                                <span className="inline-flex flex-wrap gap-2">
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Vue.js</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Sass</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Express</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl aliquam
                            nisl vel aliquam nisl.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View on GitHub
                        </Link>
                    </div>
                </Card>
                <Card className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[calc(100%-200px)]">
                    <img
                        src="/placeholder.svg"
                        width="510"
                        height="360"
                        alt="Project Image"
                        className="rounded-l-xl object-cover md:rounded-l-xl md:rounded-tr-none"
                    />
                    <div className="space-y-4 p-6">
                        <div>
                            <CardTitle className="text-lg font-semibold">Project 3</CardTitle>
                            <div className="mt-1 text-muted-foreground">
                                <span className="inline-flex flex-wrap gap-2">
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Angular</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">SCSS</span>
                                    <span className="rounded-md bg-muted px-2 py-1 text-xs">Firebase</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl aliquam
                            nisl vel aliquam nisl.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View on GitHub
                        </Link>
                    </div>
                </Card>
            </div>
        </section>
    )
}
