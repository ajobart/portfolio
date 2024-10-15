import { useTheme } from "../../context/theme/themeContext";
import Image from "../../atom/image/image";
import { useNavigate } from "react-router-dom";
import { useEffect, forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement, {}>((props, ref) => {

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
        <footer
            ref={ref}
            className={`z-50 ${isDarkMode ? 'dark' : 'bg-home-navbarContrast/40'} backdrop-blur-md border-t border-t-gray-50/20 w-full h-[64px] max-h-[64px] flex items-center justify-center `}
        >
            <p className="text-sm font-light text-dark dark:text-portfolio-gray">Alexis Jobart © 2024 </p>
        </footer>
    );
});

export default Footer;
