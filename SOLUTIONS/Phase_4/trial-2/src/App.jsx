// Import MemoExample and CallbackExample
import MemoExample from "./components/MemoExample";
import CallbackExample from "./components/CallbackExample";

// MemoExample: Shows React.memo and useMemo to prevent unnecessary recalculations
// CallbackExample: Shows useCallback to prevent unnecessary function recreation
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Performance Optimization Trial
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Render MemoExample */}
            <MemoExample />
            {/* Render CallbackExample */}
            <CallbackExample />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
