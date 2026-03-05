// Import useContext
// Import UserContext

// Custom hook for consuming user context
export function useUser() {
  // Get context value using useContext
  const context = ____(____);

  // Throw error if hook is used outside Provider
  if (!____) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
