import React from "react";
// import memo

// A child component that renders a list
// We'll optimize this to prevent re-renders when items haven't changed
// Receive items prop
const ExpensiveList = () => {
  // Simulate expensive rendering by logging
  console.log("ExpensiveList rendered");

  return (
    <div className="p-4 bg-gray-50 rounded">
      <h3 className="font-semibold text-gray-700 mb-2">Item List</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} className="text-sm text-gray-600">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrap component with React.memo to prevent re-renders when props haven't changed
// Syntax: export default memo(ComponentName);
export default ____(____);
