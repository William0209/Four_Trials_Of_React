import React, { useState, useEffect } from "react";
// import useState and useEffect

// Demonstrates cleanup with fetch to prevent race conditions
// A race condition occurs when multiple requests are in flight
// and the last request to start finishes before earlier requests, if you're curious, research LIFO in JavaScript
const LiveSearch = () => {
  // Declare state variable 'query' with initial value ""
  const [query, setQuery] = useState("");
  // Declare state variable 'results' with initial value of an empty array
  const [results, setResults] = useState([]);
  // Declare state variable 'isLoading' with initial value of false
  const [isLoading, setIsLoading] = useState(false);

  // Fill in the blank: for the useEffect below, that fetches pokemon matching the query
  // When query changes:
  // 1. If query is empty after trimming, reset results to [] and return early
  // 2. Set isLoading to true
  // 3. Create a (let variable) 'cancelled' set to false
  // 4. Define async function fetchResults:
  //    - fetch from `https://pokeapi.co/api/v2/pokemon/${trimmedQuery.toLowerCase()}`
  //    - If response.ok is false, throw error "Not found"
  //    - await response.json()
  //    - Check if (cancelled) is true, then return early (don't update state if cleanup ran)
  //    - setResults to array with single pokemon object: [{ name: data.name, id: data.id }]
  //    - catch: if (!cancelled) setResults([])
  //    - finally: if (!cancelled) setIsLoading(false)
  // 5. Call fetchResults()
  // 6. Return cleanup function that sets cancelled = true
  // 7. Specify dependency array: query

  // Why the cleanup matters:
  // User types "pik" → request starts
  // User types "pikachu" → old request still pending, new request starts
  // Old request finishes AFTER new request → shows wrong results
  // Cleanup sets cancelled=true so old request ignores its results

  useEffect(() => {
    const trimmedQuery = query.trim();

    // Step 1
    if (!trimmedQuery) {
      setResults([]);
      return;
    }

    // Step 2
    setIsLoading(true);
    // Step 3
    let cancelled = false;

    const fetchResults = async () => {
      try {
        // fetch and store in response variable
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${trimmedQuery.toLowerCase()}`,
        );
        // if reponse.ok is false, throw new error "Not found"
        if (!response.ok) throw new Error("Not found");
        // turn response to json and store in data variable
        const data = await response.json();
        // cancelled flag check, return ealy if cancelled is true
        if (cancelled) return;
        // update results with [{ name: data.name, id: data.id }]
        setResults([{ name: data.name, id: data.id }]);
      } catch {
        // if cancelled is false (req still relevant) and the promise still rejects, update results to an empty array
        if (!cancelled) setResults([]);
      } finally {
        // If cancelled is false (req still relevant), update isLoading to false
        if (!cancelled) setIsLoading(false);
      }
    };

    // call the fetchResults function
    fetchResults();

    // Return cleanup function that sets cancelled to true
    return () => {
      cancelled = true;
    };
  }, [query]); //change the effects dependency array accordingly

  // How the cleanup flag works
  // When query changes, React runs the cleanup function from the old effect (setting cancelled = true), then runs the new effect.
  // The old effect's async function is still running in the background, and when it finishes, it checks the cancelled flag and early returns before updating state.
  // If you're curious to read more, checkout: https://react.dev/learn/lifecycle-of-reactive-effects

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Live Search</h2>

      <input
        type="text"
        // bind value to query
        value={query}
        // update query on change
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search pokemon... (try: pikachu, bulbasaur)"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Show loading if isLoading is true */}
      {isLoading && <p className="text-sm text-gray-500">Searching...</p>}

      {/* Show results if they exist and not loading */}
      {!isLoading && results.length > 0 && (
        <ul className="space-y-2">
          {results.map((pokemon) => (
            <li
              // use pokemon.id as key
              key={pokemon.id}
              className="p-3 bg-gray-50 rounded capitalize"
            >
              {/* display pokemon.name */}
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}

      {/* Show "no results" message */}
      {!isLoading && query && results.length === 0 && (
        <p className="text-sm text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default LiveSearch;
