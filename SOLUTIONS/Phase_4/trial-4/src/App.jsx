// Import ThemeProvider
import { ThemeProvider } from "./context/ThemeProvider";
// Import UserProvider
import { UserProvider } from "./context/UserProvider";
// Import ContextDemo
import ContextDemo from "./components/ContextDemo";

// Wrap ContextDemo with both providers
// All children of ContextDemo will have access to both contexts
// Note: Order doesn't matter here since the contexts are independent
function App() {
  return (
    <>
      {/* Wrap with ThemeProvider */}
      <ThemeProvider>
        {/* Wrap with UserProvider */}
        <UserProvider>
          {/* Render ContextDemo - has access to both contexts */}
          <ContextDemo />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
