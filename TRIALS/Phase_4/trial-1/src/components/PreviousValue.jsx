import React from "react";
// import useState, useEffect and useRef

// Demonstrates tracking previous state value using refs
const PreviousValue = () => {
  // Declare state variable 'count' with initial value 0

  // Create ref called 'prevCountRef' to store previous count value
  // Initialize with undefined (no previous value yet)

  // Create useEffect to update prevCountRef after each render
  // Runs after render with current count, then stores it for next render
  // Inside: set prevCountRef.current to count
  // Dependency: count

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Previous Value Tracker
      </h2>

      <div className="space-y-3">
        {/* Display current count */}
        <p className="text-sm text-gray-600">
          Current: <span className="font-bold text-blue-600">{____}</span>
        </p>

        {/* Display previous count from ref, or "none" if undefined, disregard the eslint error or add eslint-disable-next-line react-hooks/refs */}
        <p className="text-sm text-gray-600">
          Previous:{" "}
          <span className="font-bold text-gray-600">{____.____ ?? "none"}</span>
        </p>

        <div className="flex gap-2">
          {/* Increment count button */}
          <button
            onClick={() => ____}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Increment
          </button>
          {/* Decrement count button */}
          <button
            onClick={() => ____}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Decrement
          </button>
          {/* Reset count to 0 button */}
          <button
            onClick={() => ____}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousValue;
