// Import PageTracker and RenderCounter

// What you learn:

// useEffect syntax and structure
// When effects execute (after render)
// The relationship between renders and effects
// Basic DOM side effects
// Running effects on mount only
// Running effects after every render

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            useEffect Basics Trial
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Render PageTracker */}

            {/* Render RenderCounter */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
