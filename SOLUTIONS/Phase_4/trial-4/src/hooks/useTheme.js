// Import useContext
// Import ThemeContext

// Custom hook for consuming theme context
export function useTheme() {
  // Get context value using useContext
  const context = ____(____);

  // Throw error if hook is used outside Provider
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
