import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light", toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {

  const [themeMode, setThemeMode] = useState("light");
  
  const toggleTheme = () => {
    setThemeMode((prev) => (
        prev === "light" ? "dark" : "light"
    ));

  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
