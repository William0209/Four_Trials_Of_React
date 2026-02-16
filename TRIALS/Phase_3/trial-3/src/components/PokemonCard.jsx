import React from "react";
// import useState and useEffect

// Displays a single Pokemon's data fetched from the PokéAPI
// API endpoint: https://pokeapi.co/api/v2/pokemon/${name}

//take name as prop
const PokemonCard = () => {
  // Declare state variable 'pokemon' with initial value null
  // Declare state variable 'isLoading' with initial value true
  // Declare state variable 'error' with initial value null

  // Create: useEffect that fetches pokemon data when 'name' prop changes
  // Steps inside the effect:
  // 1. Define an async function called 'fetchPokemon' inside the effect
  // 2. Inside fetchPokemon:
  //    - Set isLoading to true and error to null (reset state before each fetch)
  //    - try: fetch from the PokéAPI endpoint using the name prop
  //    - If response.ok is false, throw new Error("Pokemon not found")
  //    - Await response.json() to parse the data
  //    - Set pokemon to the parsed data
  //    - catch (err): set error to err.message, set pokemon to null
  //    - finally: set isLoading to false (always runs, success or failure)
  // 3. Call fetchPokemon() after defining it
  // Note: useEffect cannot be async directly - define async function inside, then call it
  // Specify the correct dependency

  // Fill in the blank: If isLoading, show loading UI
  if (____) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Fill in the blank: If error exists, show error UI
  if (____) {
    return (
      <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
        <p className="text-red-600 font-medium">Error: {____}</p>
      </div>
    );
  }

  // Fill in the blank: If no pokemon data, render nothing
  if (!____) return null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Display pokemon name */}
      <h3 className="text-xl font-bold text-gray-800 capitalize mb-3">
        {____.____}
      </h3>

      {/* Display the front_default sprite from pokemon.sprites */}
      <img
        src={____.____.____}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />

      <div className="mt-3 space-y-2">
        {/* Display base_experience */}
        <p className="text-sm text-gray-600">
          Base Experience: <span className="font-medium">{____}</span>
        </p>

        {/* Display height */}
        <p className="text-sm text-gray-600">
          Height: <span className="font-medium">{____}</span>
        </p>

        {/* Map over pokemon.types to display type badges */}
        {/* Each type object has structure: { type: { name: "fire" } } */}
        <div className="flex gap-2 flex-wrap">
          {____.____.____((____) => (
            <span
              //use type.name as the key
              key={____.____.____}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
            >
              {/* display type name */}
              {____}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
