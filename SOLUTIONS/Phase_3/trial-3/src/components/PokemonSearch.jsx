import React, { useState } from "react";
// import useState
// Import PokemonCard component
import PokemonCard from "./PokemonCard";

const PokemonSearch = () => {
  // Declare state variable 'searchTerm' with initial value ""
  const [searchTerm, setSearchTerm] = useState("");
  // Declare state variable 'submittedTerm' with initial value ""
  const [submittedTerm, setSubmittedTerm] = useState("");
  // Declare state variable 'searchHistory' with initial value []
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // If searchTerm is empty after trimming, return early
    const searchTermTrimmed = searchTerm.trim();
    if (searchTermTrimmed.length === 0) {
      return;
    }
    // Set submittedTerm to trimmed searchTerm (lowercase)
    setSubmittedTerm(searchTermTrimmed.toLowerCase());
    // Add trimmed lowercase searchTerm to searchHistory using spread operator and the functional updater form
    setSearchHistory((prev) => [...prev, searchTermTrimmed.toLowerCase()]);
    // Reset searchTerm to ""
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Pokémon Search
        </h2>

        {/* Add onSubmit handler referencing handleSearch */}
        <form className="flex gap-2 mb-4" onSubmit={handleSearch}>
          <input
            type="text"
            // bind value to searchTerm state
            value={searchTerm}
            // update searchTerm with e.target.value on change
            onChange={(e) => setSearchTerm(e.target.value)}
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
            {searchHistory.map((term, index) => (
              <button
                key={index}
                onClick={() => setSubmittedTerm(term)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 capitalize"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Only render PokemonCard if submittedTerm exists */}
      {/* Pass submittedTerm as the name prop to PokemonCard */}
      {submittedTerm && <PokemonCard name={submittedTerm} />}
    </div>
  );
};

export default PokemonSearch;
