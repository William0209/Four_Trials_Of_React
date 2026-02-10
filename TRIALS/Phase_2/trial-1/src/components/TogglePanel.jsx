import React from "react";
// import useState

const TogglePanel = () => {
  // Declare state variable 'isExpanded' with initial value false

  // Declare state variable 'isDarkMode' with initial value false

  // Create: A function called toggleTheme to Toggle isDarkMode when clicked, note: Use the NOT operator (!) to flip the boolean value

  // Create: A function called toggleExpanded to Toggle isExpanded when clicked, note: Use the NOT operator (!) to flip the boolean value

  return (
    <div
      // Fill in the blank: Apply dark mode background conditionally
      // If isDarkMode is true: 'bg-gray-800', otherwise: 'bg-white'
      className={`p-6 rounded-lg shadow-md ${____ ? "" : ""}`}
    >
      <div className="flex justify-between items-center mb-4">
        {/* Fill in the blank: Apply dark mode text color conditionally */}
        {/* Dark mode needs light text. Light mode needs dark text. */}
        {/* What boolean expression makes this work correctly? */}
        <h2
          className={`text-xl font-bold ${____ ? "text-gray-800" : "text-white"}`}
        >
          Settings Panel
        </h2>

        {/* Add: The appropriate event handler, and reference toggleTheme function so it fires when the button is clicked */}
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          {/* Fill in the blank: Show "Light" if isDarkMode is true, otherwise "Dark" */}
          {____ ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Add: The appropriate event handler, and reference toggleExpanded function so it fires when the button is clicked */}
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-3">
        {/* Fill in the blank: Show "Hide" if isExpanded is true, otherwise "Show" */}
        {____ ? "Hide" : "Show"} Details
      </button>

      {/* Fill in the blank: Conditionally render content Only if isExpanded is true */}
      {/* Use logical AND operator */}
      {____(
        <div
          // Fill in the blank: Apply dark mode styling to content
          className={`p-4 rounded ${____ ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-800"}`}
        >
          <p className="mb-2">This is the expanded content area.</p>
          <p>It only appears when the panel is expanded.</p>
        </div>
      )}
    </div>
  );
};

export default TogglePanel;
