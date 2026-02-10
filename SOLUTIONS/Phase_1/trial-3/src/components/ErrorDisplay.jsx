import React from "react";

// Destructure the error and onRetry props
const ErrorDisplay = ({ error, onRetry }) => {
  // Fill in the blank: Use logical AND operator
  // Only render this entire component if error exists (is truthy)
  // Syntax: condition && <JSX>
  return (
    error && (
      <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
        <h3 className="text-lg font-bold text-red-800 mb-2">Error Occurred</h3>
        {/* Display the error message */}
        <p className="text-red-600 mb-4">{error}</p>

        {/* Fill in the blank: Only show the retry button if onRetry callback exists */}
        {/* Use logical AND operator */}
        {onRetry && (
          <button
            // Fill in the blank: Call the onRetry function when clicked
            onClick={onRetry}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        )}
      </div>
    )
  );
};

export default ErrorDisplay;
