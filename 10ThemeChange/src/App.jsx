import React, { useEffect } from "react";
import useTheme, { ThemeProvider } from "./context/ThemeContext";
import CardDesign from "./components/CardDesign";

function App() {
  return (
    <ThemeProvider>
      <ThemeMODE />
      <CardDesign />
    </ThemeProvider>
  );
}

const ThemeMODE = () => {

  const { themeMode } = useTheme();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark"); htmlElement.classList.add(themeMode);
  }, [themeMode]); return null;


};

export default App;
