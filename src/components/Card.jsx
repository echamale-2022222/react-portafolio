
export const Card = ({ children, className }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[calc(100%-200px)] ${className}`}>
            {children}
        </div>
    );
};