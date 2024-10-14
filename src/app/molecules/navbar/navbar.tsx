import { useTheme } from "../../context/theme/themeContext";
import Image from "../../atom/image/image";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {

    // THEME
    const { isDarkMode, toggleTheme } = useTheme();

    // NAVIGATION
    const navigate = useNavigate();

    /**
     * Effect to add background color to body with correct theme
     */
    useEffect(() => {
        addBackgroundColor();
    }, [isDarkMode]);

    /**
     * Function to back to home page
     */
    function handleBackToHome() {
        navigate('/');
    }

    /**
     * Function to add background color to body with correct theme
     */
    function addBackgroundColor() {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#202023';
    } else {
            document.body.style.backgroundColor = '#F1E6DB';
        }
    }

    return (
        <nav className={`border-b z-50 ${isDarkMode ? '' : 'bg-home-navbarContrast/40'} backdrop-blur-md fixed top-0 border-b-gray-50/20 w-full h-[64px] flex items-center justify-between px-[246px]`}>
            <div className="font-medium cursor-pointer" onClick={handleBackToHome}>
                A_J
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
