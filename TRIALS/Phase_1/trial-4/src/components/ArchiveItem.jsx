import React from "react";

// Destructure props: title, status, priority, tags
const ArchiveItem = () => {
  // Fill in the blank: assign the correct priority number to the suitable color, scaling from 1-3.
  const priorityColors = {
    ____: "text-red-600",
    ____: "text-yellow-600",
    ____: "text-green-600",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        {/* Display the title prop in the h3 tag*/}
        <h3 className="text-lg font-semibold text-gray-800">{____}</h3>

        {/* Fill in the blank: Display the corresponding text color and number based on priority level */}
        {/* Access priorityColors using bracket notation */}
        <span className={`font-bold ${____[____]}`}>P{____}</span>
      </div>

      {/* Display the status in the p tag*/}
      <p className="text-sm text-gray-600 mb-3">{____}</p>

      {/* Fill in the blank: Only render tags section if tags array exists AND has items */}
      {/* Use logical AND with length check */}
      {____ && ____ && (
        <div className="flex flex-wrap gap-2">
          {/* Fill in the blank: Map over tags array to render each tag */}
          {/* Each tag is a string. Use the tag index itself as the key (acceptable for this simple case) */}
          {tags.____((____, index) => (
            <span
              key={____}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
            >
              {/* Display the tag text */}
              {____}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchiveItem;
