import React from "react";
// Import useTheme custom hook

// Component that uses theme context
const ThemedButton = ({ children, onClick }) => {
  // Use custom hook to get theme and toggleTheme
  // Destructure theme and toggleTheme from useTheme()
  const { ____, ____ } = ____();

  return (
    <button
      onClick={onClick}
      // Apply theme-based styling
      className={`px-4 py-2 rounded ${
        ____ === "dark"
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
