// Import useState
// Import ThemeContext

// Provider component that manages theme state
// Destruct children from props and specify it in the param
export function ThemeProvider({ ___ }) {
  // Declare state variable called theme with initial value of: "light"

  // Create toggle function to switch between themes
  const toggleTheme = () => {
    // specify the state setter function to check if prev is equal to light, if it is then switch to "dark", otherwise use "light", use the functional updater form the access the latest value of theme, and use the ternary operator for the comparison. 
    setTheme(prev => prev _____)
  };

  // Create the value object to provide
  const value = {
    ____, //the theme value (theme)
    ___, // the toggle method (toggleTheme)
  };

  // Return Provider with value and children
  // syntax, ThemeContext.Provider, hold the value object, and wraps the children prop
  return (
    <____.Provider value={____}>
      {____}
    </____>
  );
}