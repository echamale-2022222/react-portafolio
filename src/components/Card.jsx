
export const Card = ({ title, image, description, githubLink, technologies, className }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-full ${className}`}>
            <div className="w-full h-64 overflow-hidden rounded-lg">
                <img src={image} alt={title} className="w-full h-full rounded-lg object-fit"/>
            </div>
            <div className="p-4">
                <h2 className="text-lg md:text-xl font-bold">{title}</h2>
                <p className="text-sm md:text-base text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech, index) => (
                        <img key={index} src={tech.imagen} alt={`Technology ${index + 1}`} className="w-8 h-8 md:w-10 md:h-10" />
                    ))}
                </div>
                {githubLink && (
                    <a
                        href={githubLink}
                        className="inline-flex items-center gap-2 h-10 justify-center rounded-md bg-[#64748B] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-2 w-full sm:w-auto"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="h-4 w-4" />
                        Github
                    </a>
                )}
            </div>
        </div>
    );
};

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