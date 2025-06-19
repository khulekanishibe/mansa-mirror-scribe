
import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({ isDarkMode: false });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  isDarkMode: boolean;
  children: React.ReactNode;
}

export const ThemeProvider = ({ isDarkMode, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
