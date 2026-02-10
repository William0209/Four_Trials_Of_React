import React from "react";
// import useState

const SearchBar = () => {
  // Declare state variable 'query' with initial value of an empty string

  // Declare state variable 'searchHistory' with initial value of an empty array

  // Create: handleSubmit function that takes the event object as parameter
  // Prevent the default form submission behavior
  // If query is empty (after trimming whitespace), return early (do nothing)
  // Add the trimmed query to searchHistory array (use spread operator to add new item)
  // Reset query to empty string after adding to historys

  // Create: handleKeyDown function that takes the event object as parameter
  // If the pressed key is "Escape" (e.key === "Escape"), clear the query
  // Hint: You can check e.key to see which key was pressed

  // Create: handleClearHistory function (no parameters needed)
  // Set searchHistory to an empty array

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Search Archive</h2>

      {/* Add: onSubmit event handler that references handleSubmit to the form element */}
      <form className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            // Add: value attribute bound to query state
            ____
            // Add: onChange event handler that updates query with e.target.value
            onChange={(e) => ____(____)}
            // Add: onKeyDown event handler that references handleKeyDown
            onKeyDown={____}
            placeholder="Search for patterns... (Press Esc to clear)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Add: type submit to the button so clicking triggers form submission */}
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>

      {/* Search History Section */}
      {/* Fill in the blank: Only render this section if searchHistory length is bigger than 0 (has items), use the AND operator */}
      {searchHistory ____ ____(
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-700">
              Recent Searches
            </h3>
            {/* Add: the appropriate event handler so that clicking the button fires the handleClearHistory function */}
            <button className="text-sm text-red-600 hover:text-red-800">
              Clear History
            </button>
          </div>

          <ul className="space-y-2">
            {/* Map over searchHistory to display each search term in list items, use the index as key (fine in this use case) */}
            {____.map(() => (
              <li
                // Add a key to each list item
                className="px-4 py-2 bg-gray-50 rounded text-gray-700"
              >
                {/* Display the search term */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
