// Import Counter and TogglePanel components
import Counter from "./components/Counter";
import TogglePanel from "./components/TogglePanel";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            useState Trials
          </h1>

          {/* Render Counter component */}
          <Counter />

          {/* Render TogglePanel component */}
          <TogglePanel />
        </div>
      </div>
    </>
  );
}

export default App;
