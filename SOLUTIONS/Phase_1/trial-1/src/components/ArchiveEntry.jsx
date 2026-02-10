import React from "react";
// Note if you have the ES7+ React/Redux/React-Native snippets extension, you can type rafce as shortcut for creating arrow function components

const ArchiveEntry = ({ title, status }) => {
  return (
    // Choose an appropriate backgorund color class for the div
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Display the title prop as the heading text */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <div className="flex items-center gap-2">
        {/* Display the status prop inside this badge */}
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {status}
        </span>
      </div>
      {/* Choose an appropriate text color class for the paragraph */}
      <p className="mt-4 text-blue-400">
        Every framework falls. Knowledge endures.
      </p>
    </div>
  );
};

export default ArchiveEntry;
