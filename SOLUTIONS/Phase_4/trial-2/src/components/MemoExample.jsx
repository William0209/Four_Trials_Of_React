import React, { useState, useMemo } from "react";
// import useState and useMemo
// import the ExpensiveList component
import ExpensiveList from "./ExpensiveList";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  // Expensive calculation that we only want to run when filter changes
  // useMemo memoizes the result
  // Syntax: const value = useMemo(() => calculation, [dependencies]);
  const filteredItems = useMemo(() => {
    console.log("Calculating filtered items...");

    const items = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Cherry" },
      { id: 4, name: "Date" },
    ];

    // Filter items based on filter text (case insensitive)
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">useMemo Example</h2>

      <div className="space-y-4">
        {/* Count button - causes re-render but shouldn't recalculate filteredItems */}
        <div>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Increment Count: {count}
          </button>
          <p className="text-xs text-gray-500 mt-1">
            (This re-renders but doesn't recalculate filtered items)
          </p>
        </div>

        {/* Filter input */}
        <div>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Pass memoized items to ExpensiveList */}
        <ExpensiveList items={filteredItems} />
      </div>
    </div>
  );
};

export default MemoExample;
