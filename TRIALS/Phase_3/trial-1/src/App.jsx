// Import PageTracker and RenderCounter

// WARNING: the trial casues an infinite loop, so test it out but stop the server it after you have visualized the issue:
// You've now experienced what "cascading renders" means. An infinite chain of: render → effect → state update → render → effect → state update...
// We'll cover this in the docs, so in order to understand the issue and how to avoid it, check out the docs, phase3/trial-1

// What you learn:

// useEffect syntax and structure
// When effects execute (after render)
// The relationship between renders and effects
// Basic DOM side effects
// Running effects on mount only
// Running effects after every render
// "cascading renders"

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
