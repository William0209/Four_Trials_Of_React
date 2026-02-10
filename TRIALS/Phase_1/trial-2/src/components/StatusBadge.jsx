import React from "react";
import PropTypes from "prop-types";

// Destructure status and variant props
// Set a default value for variant (should default to 'info' if not provided, syntax prop = default)
const StatusBadge = () => {
  // This object maps variant names to their Tailwind classes
  const variantStyles = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    //Fill in the blank: Access variantStyles using the variant prop as the key, through object notation, syntax object[key]
    <span className={`px-3 py-1 text-sm rounded-full ${_____}`}>
      {/* Display the status text inside the badge */}
    </span>
  );
};

// Define propTypes for validation
// status should: check for string and should be isRequired
// variant should: check for string (optional, since we have a default)
StatusBadge._____ = {
  status: PropTypes._____._____,
  variant: PropTypes._____,
};

export default StatusBadge;
