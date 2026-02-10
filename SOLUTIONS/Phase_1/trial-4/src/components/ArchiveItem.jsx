import React from "react";

// Destructure props: title, status, priority, tags
const ArchiveItem = ({ title, status, priority, tags }) => {
  // Fill in the blank: assign the correct priority number to the suitable color, scaling from 1-3.
  const priorityColors = {
    1: "text-red-600",
    2: "text-yellow-600",
    3: "text-green-600",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        {/* Display the title prop in the h3 tag*/}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Fill in the blank: Display the corresponding text color and number based on priority level */}
        {/* Access priorityColors using bracket notation */}
        <span className={`font-bold ${priorityColors[priority]}`}>
          P{priority}
        </span>
      </div>

      {/* Display the status in the p tag*/}
      <p className="text-sm text-gray-600 mb-3">{status}</p>

      {/* Fill in the blank: Only render tags section if tags array exists AND has items */}
      {/* Use logical AND with length check */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {/* Fill in the blank: Map over tags array to render each tag */}
          {/* Each tag is a string. Use the tag index itself as the key (acceptable for this simple case) */}
          {tags.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
            >
              {/* Display the tag text */}
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchiveItem;
