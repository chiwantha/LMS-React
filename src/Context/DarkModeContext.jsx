import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    // Apply or remove the 'dark' class from the HTML element
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // Set meta tags for dark mode
      document
        .getElementById("apple-status-bar")
        .setAttribute("content", "#262626");
      document
        .getElementById("android-status-bar")
        .setAttribute("content", "#262626"); // bg-slate-800
    } else {
      document.documentElement.classList.remove("dark");
      // Set meta tags for light mode
      document
        .getElementById("apple-status-bar")
        .setAttribute("content", "#F8FAFC"); // You can change this if needed
      document
        .getElementById("android-status-bar")
        .setAttribute("content", "#F8FAFC"); // bg-slate-100
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
