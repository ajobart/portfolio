import React, { createContext, useState, useContext, useEffect } from "react";

/**
 * Theme context type
 */
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

/**
 * Theme context
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider
 * @param children - Children of the theme provider
 * @returns The theme provider
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // STATE
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Effect to check if the theme is dark
   */
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  /**
   * Function to toggle the theme
   */
  function toggleTheme() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Function to use the theme context
 * @returns The theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
