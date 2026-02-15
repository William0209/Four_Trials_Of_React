// Import StaleClosureDemo, MultiDependencyTracker, ObjectDependencyDemo

// This trial tests your understanding of:

// Correct dependency specification
// Stale closure bugs from missing dependencies
// Multiple dependencies
// Avoiding unnecessary effect re-runs
// Why objects and arrays as dependencies cause problems

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            useEffect Dependencies Trial
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Render StaleClosureDemo */}

            {/* Render MultiDependencyTracker */}

            {/* Render ObjectDependencyDemo */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
