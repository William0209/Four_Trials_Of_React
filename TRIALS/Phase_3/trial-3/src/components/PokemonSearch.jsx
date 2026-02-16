import React from "react";
// import useState
// Import PokemonCard component

const PokemonSearch = () => {
  // Declare state variable 'searchTerm' with initial value ""
  // Declare state variable 'submittedTerm' with initial value ""
  // Declare state variable 'searchHistory' with initial value []

  const handleSearch = (e) => {
    e.preventDefault();
    // If searchTerm is empty after trimming, return early
    // Set submittedTerm to trimmed searchTerm (lowercase)
    // Add trimmed lowercase searchTerm to searchHistory using spread operator
    // Reset searchTerm to ""
  };
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Pokémon Search
        </h2>

        {/* Add onSubmit handler referencing handleSearch */}
        <form className="flex gap-2 mb-4">
          <input
            type="text"
            // bind value to searchTerm state
            value={____}
            // update searchTerm with e.target.value on change
            onChange={(e) => ____(____)}
            placeholder="Enter pokemon name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Display search history if it exists */}
        {searchHistory.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-500">Recent:</span>
            {/* Map over searchHistory to display clickable history badges */}
            {/* Clicking a badge should set submittedTerm to that term */}
            {____.____((term, index) => (
              <button
                key={index}
                onClick={() => ____(____)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 capitalize"
              >
                {____}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Only render PokemonCard if submittedTerm exists */}
      {/* Pass submittedTerm as the name prop to PokemonCard */}
      {____ && <____ name={____} />}
    </div>
  );
};

export default PokemonSearch;
