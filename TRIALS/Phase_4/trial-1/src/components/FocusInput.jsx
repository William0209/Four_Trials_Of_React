import React from "react";
// import useState and useRef

// Demonstrates using refs to manage focus imperatively
const FocusInput = () => {
  // Declare state variable 'username' with initial value ""

  // Create a ref called 'inputRef' to store reference to the input element
  // Syntax: const refName = useRef(initialValue)
  // For DOM refs, initial value is typically null

  const handleFocus = () => {
    // Access the DOM element via inputRef.current
    // Call .focus() to focus the input programmatically
    ____.____.____;
  };

  const handleClear = () => {
    // Clear username state
    // After clearing, focus the input again using inputRef
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Focus Management</h2>

      <div className="space-y-3">
        <input
          // Attach the ref to this input element
          // Syntax: ref={refName}
          ____={____}
          type="text"
          // Bind value to username
          // Update username on change
          placeholder="Enter username..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2">
          <button
            onClick={handleFocus}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Focus Input
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear & Focus
          </button>
        </div>

        {/* Display current username value, or "(empty)" if empty */}
        <p className="text-sm text-gray-600">
          Current value:{" "}
          <span className="font-medium">{____ || "(empty)"}</span>
        </p>
      </div>
    </div>
  );
};

export default FocusInput;
