import React from 'react'
import { ExampleAvatar } from '../Avatar'

export const Sobremi = () => {
    return (
        <div className="flex items-center justify-center min-h-[50dvh]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                        <ExampleAvatar className="w-64 h-64 sm:w-50 sm:h-50" />
                    </div>
                    <div className="text-center md:text-left sm:text-left md:ml-8">
                        <h2 className="text-3xl font-bold text-white md:text-4xl sm:text-2xl">Edwar Chamalé</h2>
                        <p className="mt-2 text-lg font-medium text-gray-300 sm:text-base">Junior Backend Developer</p>
                        <p className="mt-4 text-base text-white md:text-lg lg:text-lg">
                            Passionate junior backend developer dedicated to continuous learning and growth, with the goal of contributing to innovative projects that push the boundaries of technology. Beyond coding, I enjoy solving problems and collaborating with teams to deliver impactful solutions.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start sm:flex-col sm:items-center">
                    <a
                        href="https://github.com/echamale-2022222"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#64748B] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                        target='_blank'
                    >
                        <GithubIcon className="mr-2 h-4 w-4" /> Github
                    </a>
                    <a
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#64748B] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                        prefetch={false}
                    >
                        <BriefcaseIcon className="mr-2 h-4 w-4" /> Computrabajo
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edwar-rené-chamalé-gonzález-724918296/"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#64748B] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                        target='_blank'
                    >
                        <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
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


function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
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
