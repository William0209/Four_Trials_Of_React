// Import ThemeProvider
// Import UserProvider
// Import ContextDemo

// Wrap ContextDemo with both providers
// All children of ContextDemo will have access to both contexts
// Note: Order doesn't matter here since the contexts are independent
function App() {
  return (
    <>
      {/* Wrap with ThemeProvider */}
      <____>
        {/* Wrap with UserProvider */}
        <____>
          {/* Render ContextDemo - has access to both contexts */}
          <____ />
        </____>
      </____>
    </>
  );
}

export default App;
