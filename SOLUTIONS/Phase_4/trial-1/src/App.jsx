// Import FocusInput, RenderCounter, PreviousValue
import FocusInput from "./components/FocusInput";
import RenderCounter from "./components/RenderCounter";
import PreviousValue from "./components/PreviousValue";

// FocusInput: Using refs for DOM manipulation (focus management)
// RenderCounter: Using refs to track values without causing re-renders
// PreviousValue: Using refs to remember previous state values
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            useRef Trial
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Render FocusInput */}
            <FocusInput />
            {/* Render RenderCounter */}
            <RenderCounter />
            {/* Render PreviousValue */}
            <PreviousValue />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
