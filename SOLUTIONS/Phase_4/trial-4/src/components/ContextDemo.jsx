import React from "react";
// Import useTheme
import { useTheme } from "../hooks/useTheme";
import ThemedButton from "./ThemedButton";
import UserProfile from "./UserProfile";

const ContextDemo = () => {
  // Get theme and toggleTheme from context
  const { ____, ____ } = ____();

  return (
    <div
      // Apply theme-based background
      className={`min-h-screen p-8 ${
        ____ === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div
          className={`p-6 rounded-lg shadow-md ${
            ____ === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <h1 className="text-3xl font-bold mb-4">Context API Demo</h1>

          <p className="mb-4">
            Current theme: <span className="font-bold capitalize">{____}</span>
          </p>

          {/* Button uses ThemedButton which consumes context */}
          <ThemedButton onClick={____}>Toggle Theme</ThemedButton>
        </div>

        {/* UserProfile consumes user context */}
        <UserProfile />
      </div>
    </div>
  );
};

export default ContextDemo;
