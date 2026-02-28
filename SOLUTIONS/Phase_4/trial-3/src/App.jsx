// Import CustomHooksDemo
import CustomHooksDemo from "./components/CustomHooksDemo";

// Custom hooks extract reusable stateful logic
// useLocalStorage: Syncs state with localStorage
// useToggle: Manages boolean toggle state
// useCounter: Manages counter with multiple operations
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Custom Hooks Trial
          </h1>
          {/* Render CustomHooksDemo */}
          <CustomHooksDemo />
        </div>
      </div>
    </>
  );
}

export default App;
