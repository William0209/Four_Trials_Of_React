// Import AutoSaveTimer, LiveSearch, WindowResizeTracker
import AutoSaveTimer from "./components/AutoSaveTimer";
import LiveSearch from "./components/LiveSearch";
import WindowResizeTracker from "./components/WindowResizeTracker";

// AutoSaveTimer: Cleanup timers to prevent multiple auto-saves
// LiveSearch: Cleanup fetch requests to prevent race conditions
// WindowResizeTracker: Cleanup event listeners to prevent memory leaks
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Cleanup Functions Trial
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Render AutoSaveTimer */}
            <AutoSaveTimer />
            {/* Render LiveSearch */}
            <LiveSearch />
            {/* Render WindowResizeTracker */}
            <WindowResizeTracker />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
