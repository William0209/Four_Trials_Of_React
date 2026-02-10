import React from "react";
// Import the StatusBadge component from the correct file path

// This component receives: title, description, status, variant, isUrgent as props
const ArchiveRecord = () => {
  return (
    // Fill in the blank: Use isUrgent prop to conditionally apply different background styles to the div below
    // If isUrgent is true: 'bg-red-50 border-2 border-red-300'
    // If isUrgent is false: 'bg-white'
    <div className={`p-6 rounded-lg shadow-md ${_____ ? "" : ""}`}>
      <div className="flex justify-between items-start mb-3">
        {/* Display the title prop as the heading in the h3 tag */}
        <h3 className="text-xl font-bold text-gray-800">{_____}</h3>

        {/* Render the StatusBadge component */}
        {/* Pass the 'status' prop to StatusBadge's status prop */}
        {/* Pass the 'variant' prop to StatusBadge's variant prop */}
      </div>

      {/* Display the description prop in the p tag*/}
      {/* If description is undefined/null, show 'No description available' instead */}
      {/* Syntax: use the OR operator */}
      <p className="text-gray-600"></p>
    </div>
  );
};

export default ArchiveRecord;
