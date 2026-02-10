import React from "react";
// Import the StatusBadge component from the correct file path
import StatusBadge from "./StatusBadge";

// This component receives: title, description, status, variant, isUrgent as props
const ArchiveRecord = ({ title, description, status, variant, isUrgent }) => {
  return (
    // Fill in the blank: Use isUrgent prop to conditionally apply different background styles to the div below
    // If isUrgent is true: 'bg-red-50 border-2 border-red-300'
    // If isUrgent is false: 'bg-white'
    <div
      className={`p-6 rounded-lg shadow-md ${isUrgent ? "bg-red-50 border-2 border-red-300" : "bg-white"}`}
    >
      <div className="flex justify-between items-start mb-3">
        {/* Display the title prop as the heading in the h3 tag */}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>

        {/* Render the StatusBadge component */}
        {/* Pass the received status prop to StatusBadge's status prop */}
        {/* Pass the recieved variant prop to StatusBadge's variant prop */}
        <StatusBadge status={status} variant={variant} />
      </div>

      {/* Display the description prop in the p tag*/}
      {/* If description is undefined/null, show 'No description available' instead */}
      {/* Syntax: use the OR operator */}
      <p className="text-gray-600">
        {description || "No description available"}
      </p>
    </div>
  );
};

export default ArchiveRecord;
