// Import useState
// Import UserContext
import { useState } from "react";
import { UserContext } from "./UserContext";

// Provider component for user data
// Destruct children from props and specify it in the param
export function UserProvider({ children }) {
  // Declare state variable user with a initial value of: {name: "", role: "viewer",}
  const [user, setUser] = useState({ name: "", role: "viewer" });

  // Create login function that updates user
  const login = (name, role) => {
    setUser({ name, role });
  };

  // Create logout function that resets user name and role to empty strings
  const logout = () => {
    setUser({ name: "", role: "" });
  };

  // Create value object that holds user, and the methods login and logout
  const value = {
    user,
    login,
    logout,
  };

  // Return Provider with value and children
  // syntax, UserContext.Provider, hold the value object, and wraps the children prop
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
