import { useTheme } from "../../context/theme/themeContext";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement, {}>((props, ref) => {

    // THEME
    const { isDarkMode, toggleTheme } = useTheme();
    
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
