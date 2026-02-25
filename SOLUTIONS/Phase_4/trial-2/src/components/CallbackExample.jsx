import React, { useState, memo, useCallback } from "react";
// import useState, memo and useCallback

// Child component that receives a callback
// Wrap it in memo so it only re-renders when props change
// Child component that receives a callback
// Wrapped in memo so it only re-renders when props change
const Button = memo(({ onClick, children }) => {
  console.log(`Button "${children}" rendered`);

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      {children}
    </button>
  );
});

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  // causing Button to re-render even though the function does the same thing
  // useCallback memoizes the function reference
  // Syntax: const function = useCallback(() => { }, [dependencies]);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Another callback that depends on no external values, if you're wondering how it can be unchained from external values even though it's updating count, consider the use of the functional updater form, the answer lies there.
  const handleOtherIncrement = useCallback(() => {
    setOtherCount((prev) => prev + 1);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        useCallback Example
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Count: <span className="font-bold">{count}</span>
          </p>
          <p className="text-sm text-gray-600">
            Other: <span className="font-bold">{otherCount}</span>
          </p>
        </div>

        <div className="flex gap-2">
          {/* These buttons are memoized and only re-render when their onClick changes */}
          <Button onClick={handleIncrement}>Increment Count</Button>
          <Button onClick={handleOtherIncrement}>Increment Other</Button>
        </div>

        <p className="text-xs text-gray-500">
          Check console: Buttons only re-render when their specific callback
          changes
        </p>
      </div>
    </div>
  );
};

export default CallbackExample;
