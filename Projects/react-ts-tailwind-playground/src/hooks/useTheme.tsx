import React, { createContext, useState, useContext } from 'react';

// Create context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Provider component
interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: (value: boolean) => void;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (value: boolean) => {
    setIsDarkMode(value);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
