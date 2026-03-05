// Import useState
// Import ThemeContext
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

// Provider component that manages theme state
// Destruct children from props and specify it in the param
export function ThemeProvider({ children }) {
  // Declare state variable called theme with initial value of: "light"
  const [theme, setTheme] = useState("light");

  // Create toggle function to switch between themes
  const toggleTheme = () => {
    // specify the state setter function to check if prev is equal to light, if it is then switch to "dark", otherwise use "light", use the functional updater form the access the latest value of theme, and use the ternary operator for the comparison.
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Create the value object to provide
  const value = {
    theme, //the theme value (theme)
    toggleTheme, // the toggle method (toggleTheme)
  };

  // Return Provider with value and children
  // syntax, ThemeContext.Provider, hold the value object, and wraps the children prop
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
