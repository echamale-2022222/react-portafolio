import { MenuIcon } from '@heroicons/react/outline';

export const Button = ({ variant, size, className, onClick, children }) => {
    const baseClasses = 'inline-flex items-center justify-center';
    const variantClasses = variant === 'outline' ? 'border border-gray-300' : '';
    const sizeClasses = size === 'icon' ? 'p-2' : 'px-4 py-2';
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
};