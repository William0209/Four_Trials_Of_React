// Import useContext
import { useContext } from "react";
// Import ThemeContext
import { ThemeContext } from "../context/ThemeContext";

// Custom hook for consuming theme context
export function useTheme() {
  // Get context value using useContext
  const context = useContext(ThemeContext);

  // Throw error if hook is used outside Provider
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
