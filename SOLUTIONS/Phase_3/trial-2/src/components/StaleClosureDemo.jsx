import React from "react";
// import useState and useEffect

// A "stale closure" occurs when an effect captures an outdated value of a variable
const StaleClosureDemo = () => {
  // Declare state variable 'count' with initial value 0

  // Declare state variable 'message' with initial value ""

  // Fill in the blank: useEffect with INCORRECT dependencies (empty array)
  // This effect is SUPPOSED to log the current count
  // But with [] it only captures count's value at mount time (0)
  // This creates a "stale closure" - the effect remembers the old value
  // Note: This is intentionally wrong to demonstrate the bug
  useEffect(() => {
    // Fill in the blank: setMessage to show count value
    // Template: `Stale effect sees count as: ${____}`
    ____(`Stale effect sees count as: ${____}`);
  }, []);

  // Fill in the blank: useEffect with CORRECT dependencies
  // This effect correctly updates message when count changes
  // Specify count as the dependency so it always sees the latest value
  useEffect(() => {
    ____(`Fresh effect sees count as: ${____}`);
  }, [____]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Stale Closure Demo
      </h2>

      <div className="space-y-3 mb-4">
        <p className="text-gray-600">
          Actual count:{" "}
          <span className="font-bold text-blue-600">{/* Display count */}</span>
        </p>
        {/* Display message */}
        <p className="text-gray-600">
          Message: <span className="font-bold text-green-600">{____}</span>
        </p>
      </div>

      <button
        // increment count using functional updater form
        onClick={() => ___}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment Count
      </button>
    </div>
  );
};

export default StaleClosureDemo;
