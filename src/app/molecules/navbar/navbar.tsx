import { useTheme } from "../../context/theme/themeContext";
import Image from "../../atom/image/image";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // THEME
    const { isDarkMode, toggleTheme } = useTheme();

    // NAVIGATION
    const navigate = useNavigate();

    /**
     * Function to back to home page
     */
    const handleBackToHome = () => {
        navigate('/');
    }

    return (
        <nav className="border-b z-50 backdrop-blur-xl fixed top-0 border-b-gray-50/20 w-full h-[64px] flex items-center justify-between px-[246px]">
            <div className="font-medium cursor-pointer" onClick={handleBackToHome}>
                AlexBld
            </div>
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>Posts</li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                >
                    {isDarkMode ? <Image path="/icons/light-mode.svg" alt="sun" className="size-4" /> : <Image path="/icons/dark-mode.svg" alt="moon" className="size-4" />}
                </button>
            </div>
        </nav>
    );
}
