// Import useContext
import { useContext } from "react";
// Import UserContext
import { UserContext } from "../context/UserContext";

// Custom hook for consuming user context
export function useUser() {
  // Get context value using useContext
  const context = useContext(UserContext);

  // Throw error if hook is used outside Provider
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
