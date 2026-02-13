import React from "react";
// import useState and useEffect

// This component visually demonstrates when effects run relative to renders
const RenderCounter = () => {
  // Declare state variable 'count' with initial value 0

  // Declare state variable 'effectLog' with initial value an empty array

  // Create: a useEffect that adds a new log of `Effect ran - count is ${count}` to the effectLog each time after render
  // Inside: Define a variable called logEntry which hold the value of `Effect ran - count is ${count}`
  // Update the effectLog through its setter function, with the new entry log (logEntry), use the spread operator to retain the previous logs while adding the new one.
  // Note: Use the functional updater form to add to previous logs, if you don't recognise it, check out the documentation for phase 2/trial 1

  // Create: a useEffect that adds "Component mounted!" to the effectLog on mount
  // Inside: in the same way we add the logs in the effect above, add "Component mounted!" through the spread operator to retain previous logs
  // Note: Use the functional updater form

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Render Counter</h2>

      <div className="flex items-center gap-4 mb-6">
        <button
          // increment count with 1 through its setter function, use the functional updater form
          onClick={() => ____}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {/* Display count in the expression */}
          Increment ({____})
        </button>
        {/* clear the effectLog array on click */}
        <button
          onClick={() => ____}
          className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Clear Log
        </button>
      </div>

      <div className="bg-gray-50 rounded p-4 max-h-48 overflow-y-auto">
        <h3 className="font-semibold text-gray-700 mb-2">Effect Log:</h3>

        {/* Create: a expression to conditionally render the effectLog Idea: If the
        length of effectLog is zero, render
        <p className="text-gray-500 text-sm">No effects logged yet.</p> */}

        {/* If its not: render a ul with the styling of "space-y-1", inside the ul
        tag, create an expression to map out the effectLogs in form of list
        items. Use the index as key for each list item, the list items should
        have a styling of "text-sm text-gray-600" and display the log. */}
      </div>
    </div>
  );
};

export default RenderCounter;
