import React from "react";

// Destructure the isLoading and message props
const LoadingState = ({ isLoading, message }) => {
  // Fill in the blank: If isLoading is true, render the loading UI
  // If isLoading is false, return null (render nothing)
  // Use an early return pattern with an if statement
  if (!isLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      {/* Fill in the blank: Display the message prop if it exists, otherwise show "Loading..." */}
      {/* Use the OR operator for the fallback */}
      <p className="ml-4 text-gray-600">{message || "Loading..."}</p>
    </div>
  );
};

export default LoadingState;
