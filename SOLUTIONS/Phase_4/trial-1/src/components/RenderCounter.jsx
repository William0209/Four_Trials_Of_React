import React from "react";
// import useState and useRef

// Demonstrates using refs to store values that persist across renders
// Without triggering re-renders
const RenderCounter = () => {
  // Declare state variable 'count' with initial value 0

  // Create a ref called 'renderCount' to track render count
  // Initialize with 0
  // This persists across renders but doesn't trigger re-renders when changed

  // Increment renderCount.current on every render
  // This runs on every render (not in useEffect)
  // Note: Changing .current does NOT cause a re-render
  ____.____++;

  const handleIncrement = () => {
    // Increment count using functional updater
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Render Counter (useRef)
      </h2>

      <div className="space-y-3">
        {/* Display count */}
        <p className="text-sm text-gray-600">
          Count: <span className="font-bold text-blue-600">{____}</span>
        </p>

        {/* Display renderCount.current */}
        <p className="text-sm text-gray-600">
          Renders: <span className="font-bold text-green-600">{____.____}</span>
        </p>

        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Increment Count
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Notice: Render count updates without causing additional renders
        </p>
      </div>
    </div>
  );
};

export default RenderCounter;
