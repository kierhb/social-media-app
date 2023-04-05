import { createContext, useEffect, useState } from "react";

// @ts-ignore
export const DarkModeContext = createContext();

// @ts-ignore
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    // @ts-ignore
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
