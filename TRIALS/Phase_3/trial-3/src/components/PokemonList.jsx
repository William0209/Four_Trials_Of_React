import React from "react";
// import useState and useEffect

// Fetches and displays a list of pokemon from the API
// API endpoint for list: https://pokeapi.co/api/v2/pokemon?limit=12
const PokemonList = () => {
  // Declare state variable 'pokemonList' with initial value []
  // Declare state variable 'isLoading' with initial value true
  // Declare state variable 'error' with initial value null
  // Declare state variable 'selectedType' with initial value "all"

  // Create: useEffect that fetches the pokemon list on mount only
  // 1. Define an async function called 'fetchPokemonList' inside the effect
  // 2. Inside fetchPokemonList:
  //    - try: fetch from "https://pokeapi.co/api/v2/pokemon?limit=12"
  //    - If response.ok is false, throw new Error("Failed to fetch pokemon list")
  //    - Await response.json() to parse the data
  //    - Set pokemonList to data.results (array of { name, url } objects)
  //    - catch (err): set error to err.message
  //    - finally: set isLoading to false
  // 3. Call fetchPokemonList() after defining it
  // Dependency array: mount only

  // Compute: filteredList
  // If selectedType is "all", show all pokemon
  // Otherwise filter by first letter of name matching selectedType
  const filteredList =
    selectedType === "all"
      ? ____
      : ____.____((pokemon) => pokemon.name.startsWith(____));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Pokémon List</h2>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {/* Map over ["all", "a", "b", "c", "d", "e"] to create filter buttons */}
        {___.__((type) => (
          <button
            // set the param as key, ex type
            key={__}
            // set selectedType to type on click
            onClick={() => ____(____)}
            className={`px-3 py-1 rounded text-sm ${
              // if selectedType equals type, use blue styling, otherwise gray
              ____ === ____
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {/* Display type, capitalized */}
            {type === "all" ? "All" : `Starts with ${type.__}`}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {____ && (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Error state */}
      {____ && <p className="text-red-600 p-4">Error: {____}</p>}

      {/* Pokemon grid - only show if not loading and no error */}
      {!____ && !____ && (
        <div className="grid grid-cols-3 gap-3">
          {filteredList.map((pokemon) => (
            <div
              key={pokemon.name}
              className="p-3 bg-gray-50 rounded text-center capitalize text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
            >
              {/* Display pokemon name */}
              {____}
            </div>
          ))}
        </div>
      )}

      {/* Pokemon grid - only show if its not loading and theres no error */}
      {!____ && filteredList.____ === 0 && (
        <p className="text-gray-500 text-center p-4">
          No Pokémon found with that filter.
        </p>
      )}
    </div>
  );
};

export default PokemonList;
