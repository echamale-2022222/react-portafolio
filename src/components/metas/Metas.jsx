import React from 'react'

export const Metas = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 sm:px-2 sm:py-8">
            <h2 className="text-3xl font-bold mb-8 sm:text-2xl">My Developer Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1 sm:gap-4">
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Contribute to an Open Source Library</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Participate in open source projects to gain experience and contribute to the community.
                    </p>
                </div>
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Build a Web Application</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Construct a complete web application, from design to implementation.
                    </p>
                </div>
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Improve Design Skills</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Learn design principles and enhance the user interface in my projects.
                    </p>
                </div>
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Learn TypeScript</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Master TypeScript to improve the quality and maintainability of the code.
                    </p>
                </div>
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Build a Portfolio</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Create a web portfolio that showcases my projects and skills.
                    </p>
                </div>
                <div className="bg-card rounded-lg shadow-md p-6 sm:p-4">
                    <h3 className="text-xl font-bold mb-4 sm:text-lg">Learn React</h3>
                    <p className="text-muted-foreground mb-4 sm:text-sm">
                        Deepen my knowledge of React, learn best practices, and build projects.
                    </p>
                </div>
            </div>
        </div>
    )
}


