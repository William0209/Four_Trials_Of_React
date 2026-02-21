import React from "react";
// import useState and useEffect

// Demonstrates cleanup with fetch to prevent race conditions
// A race condition occurs when multiple requests are in flight
// and the last request to start finishes before earlier requests, if you're curious, research LIFO in JavaScript
const LiveSearch = () => {
  // Declare state variable 'query' with initial value ""

  // Declare state variable 'results' with initial value of an empty array

  // Declare state variable 'isLoading' with initial value of false

  // Create: useEffect that fetches pokemon matching the query
  // When query changes:
  // 1. If query is empty after trimming, reset results to [] and return early
  // 2. Set isLoading to true
  // 3. Create a (let variable) 'cancelled' set to false
  // 4. Define async function fetchResults:
  //    - fetch from `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
  //    - If response.ok is false, throw error
  //    - await response.json()
  //    - Check if (cancelled) return early (don't update state if cleanup ran)
  //    - setResults to array with single pokemon object: [{ name: data.name, id: data.id }]
  //    - catch: if (!cancelled) setResults([])
  //    - finally: if (!cancelled) setIsLoading(false)
  // 5. Call fetchResults()
  // 6. Return cleanup function that sets cancelled = true
  // Dependency: query
  //
  // Why the cleanup matters:
  // User types "pik" → request starts
  // User types "pikachu" → old request still pending, new request starts
  // Old request finishes AFTER new request → shows wrong results
  // Cleanup sets cancelled=true so old request ignores its results

  useEffect(() => {
    const trimmedQuery = query.trim();

    // Fill in the blank: If query is empty, reset and return early
    if (!____) {
      ____(____);
      return;
    }

    ____(true);
    let cancelled = ____;

    const fetchResults = async () => {
      try {
        // fetch and store in response variable
        // response ok check, if not throw new error "Not found"
        // turn response to json and store in data variable
        // cancelled flag check, return ealy if cancelled is true
        // update results with [{ name: data.name, id: data.id }]
      } catch (err) {
        // if cancelled is false (req still relevant) and the promise still rejects, update results to an empty array
      } finally {
        // If cancelled is false (req still relevant), update isLoading to false
      }
    };

    // call the fetchResults function

    // Return cleanup function that sets cancelled to true
    return () => {
      ____;
    };
  }, [____]); //change the effects dependency array accordingly

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
        // update query on change
        onChange={(e) => ____(____)}
        placeholder="Search pokemon... (try: pikachu, bulbasaur)"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Show loading if isLoading is true */}
      {____ && <p className="text-sm text-gray-500">Searching...</p>}

      {/* Show results if they exist and not loading */}
      {!____ && results.length > 0 && (
        <ul className="space-y-2">
          {results.map((pokemon) => (
            <li
              // use pokemon.id as key
              key={____}
              className="p-3 bg-gray-50 rounded capitalize"
            >
              {/* display pokemon.name */}
              {____}
            </li>
          ))}
        </ul>
      )}

      {/* Show "no results" message */}
      {!____ && query && results.____ === 0 && (
        <p className="text-sm text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default LiveSearch;
