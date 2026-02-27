import React from "react";
// Import useLocalStorage
// Import useToggle
// Import useCounter

const CustomHooksDemo = () => {
  // Use custom useLocalStorage hook to persist name
  // Syntax: const [value, setValue] = useLocalStorage(key, initialValue)
  const [name, setName] = ____(____, ____);

  // Use custom useToggle hook for dark mode
  const [isDarkMode, toggleDarkMode] = ____();

  // Use custom useCounter hook
  // Destructure count, increment, decrement, reset from returned object
  const { ____, ____, ____, ____ } = ____();

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
    >
      <h2 className="text-xl font-bold mb-4">Custom Hooks Demo</h2>

      <div className="space-y-4">
        {/* LocalStorage Hook Demo */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">useLocalStorage</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <p className="text-sm mt-2">Value persists across page refreshes</p>
        </div>

        {/* Toggle Hook Demo */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">useToggle</h3>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Toggle Dark Mode
          </button>
          <p className="text-sm mt-2">Dark mode: {isDarkMode ? "On" : "Off"}</p>
        </div>

        {/* Counter Hook Demo */}
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">useCounter</h3>
          <p className="text-lg font-bold mb-3">Count: {count}</p>
          <div className="flex gap-2">
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Decrement
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHooksDemo;
