// Import useState
// Import UserContext

// Provider component for user data
// Destruct children from props and specify it in the param
export function UserProvider({ ___ }) {
  // Declare state variable user with a initial value of: {name: "", role: "viewer",}

  // Create login function that updates user 
  const login = (name, role) => {
   
  };

  // Create logout function that resets user name and role to empty strings
  const logout = () => {

  };
 
  // Create value object that holds user, and the methods login and logout
  const value = {
    ____,
    ____,
    ____,
  };

  // Return Provider with value and children
  // syntax, UserContext.Provider, hold the value object, and wraps the children prop
  return (
    <____.Provider value={____}>
      {____}
    </____>
  );
}