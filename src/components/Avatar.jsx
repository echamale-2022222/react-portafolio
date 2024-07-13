
const Avatar = ({ className, children }) => {
    return (
        <div className={`relative rounded-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

const AvatarImage = ({ src }) => {
    return (
        <img
            src={src}
            alt="Avatar"
            className="object-cover w-full h-full"
        />
    );
};

const AvatarFallback = ({ children }) => {
    return (
        <div className="flex items-center justify-center text-white text-6xl bg-gray-800">
            {children}
        </div>
    );
};

export const ExampleAvatar = () => {
    return (
        <Avatar className="w-80 h-80 bg-[#55efc4] text-6xl border-[6px] border-white sm:w-50 sm:h-50">
            <AvatarImage src="https://avatars.githubusercontent.com/u/114941106?v=4" />
            <AvatarFallback>EC</AvatarFallback>
        </Avatar>
    );
};