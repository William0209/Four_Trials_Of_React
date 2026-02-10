import React from "react";

// Destructure props: data (array), isLoading (boolean), error (string or null)
const DataDisplay = ({ data, isLoading, error }) => {
  // Fill in the blank: If isLoading is true, show "Fetching data..."
  // If error exists, show the error message
  // Otherwise, show the count of data items
  // Use nested ternary operators: condition1 ? result1 : (condition2 ? result2 : result3)

  const statusMessage = isLoading
    ? "Fetching data..."
    : error
      ? error
      : `Found ${data.length} items`;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Data Status</h2>

      <p className="text-gray-600 mb-4">{statusMessage}</p>

      {/* Fill in the blank: Only render the list if data exists AND has items */}
      {/* Use logical AND with a condition checking data length > 0 */}
      {data && data.length > 0 && (
        <ul className="space-y-2">
          {/* Map over data array to render list items */}
          {/* Each item is an object with 'id' and 'name' properties */}
          {data.map((item) => (
            // Fill in the blank: Add unique key prop using item.id
            <li key={item.id} className="p-3 bg-gray-50 rounded">
              {/* Display item.name */}
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataDisplay;
