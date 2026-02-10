import { useState } from "react";
// Import LoadingState, ErrorDisplay, and DataDisplay components

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Ignore the setData' is declared but its value is never read. error for this trial
  const [data, setData] = useState([
    { id: 1, name: "useEffect Pattern" },
    { id: 2, name: "Custom Hooks" },
    { id: 3, name: "Context API" },
  ]);

  const simulateError = () => {
    setError("Failed to fetch data from archive");
    setIsLoading(false);
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    // Simulate successful retry after 1 second
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Control buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setIsLoading(!isLoading)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Toggle Loading
            </button>
            <button
              onClick={simulateError}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Simulate Error
            </button>
          </div>

          {/* Fill in the blank: Render LoadingState component, and pass isLoading and message props */}
          <____ isLoading={____} message="Searching the archive..." />

          {/* Fill in the blank: Render ErrorDisplay component, and pass the error prop and onRetry with the handleRetry function */}
          <____ error={____} onRetry={____} />

          {/* Render DataDisplay component with all necessary props */}
          <DataDisplay
            // Fill in the blank: Pass data, isLoading, and error as props
            data={____}
            isLoading={____}
            error={____}
          />
        </div>
      </div>
    </>
  );
}

export default App;
