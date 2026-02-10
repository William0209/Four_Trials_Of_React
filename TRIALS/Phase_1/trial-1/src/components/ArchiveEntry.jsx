import React from "react";
// Note if you have the ES7+ React/Redux/React-Native snippets extension, you can type rafce as shortcut for creating arrow function components

const ArchiveEntry = ({ title, status }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-_____ rounded-lg shadow-md">
      {/* Display the title prop as the heading text */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {/* title prop */}
      </h2>
      <div className="flex items-center gap-2">
        {/* Display the status prop inside this badge */}
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {/* status prop */}
        </span>
      </div>
      {/* Choose an appropriate text color class for the paragraph */}
      <p className="mt-4 text-_____">
        Every framework falls. Knowledge endures.
      </p>
    </div>
  );
};

export default ArchiveEntry;
