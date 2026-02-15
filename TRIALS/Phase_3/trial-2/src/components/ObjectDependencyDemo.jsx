import React from "react";
// import useState and useEffect

// This component demonstrates why objects/arrays as dependencies cause problems
const ObjectDependencyDemo = () => {
  // Declare state variable 'firstName' with initial value ""

  // Declare state variable 'lastName' with initial value ""

  // Declare state variable 'effectRunCount' with initial value 0

  // Fill in the blank: useEffect with object as dependency (PROBLEMATIC)
  // This creates a new object on every render
  // Even if firstName and lastName haven't changed
  // React compares objects by REFERENCE not VALUE
  // So this effect runs on EVERY render (like having no dependency array)
  // Note: intentionally demonstrating the problem
  const userObject = { firstName, lastName };

  useEffect(() => {
    if (firstName || lastName) {
      // increment effectRunCount using functional updater
      ____((prev) => prev + 1);
    }
    // Fill in the blank: pass userObject as dependency (this is the problematic part)
  }, [____]);

  // Fill in the blank: useEffect with CORRECT primitive dependencies
  // Use firstName and lastName directly instead of the object
  // This only runs when the actual string values change
  const [correctRunCount, setCorrectRunCount] = useState(0);

  useEffect(() => {
    if (firstName || lastName) {
      ____((prev) => prev + 1);
    }
    // Fill in the blank: specify firstName and lastName as separate dependencies
  }, [____, ____]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Object Dependency Demo
      </h2>

      <div className="space-y-3 mb-4">
        <input
          type="text"
          value={____}
          onChange={(e) => ____(____)}
          placeholder="First name..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={____}
          onChange={(e) => ____(____)}
          placeholder="Last name..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          Object dependency effect runs: {/* display effectRunCount */}
          <span className="font-bold text-red-600">{____}</span>
        </p>
        <p className="text-sm text-gray-600">
          Primitive dependency effect runs: {/* display correctRunCount */}
          <span className="font-bold text-green-600">{____}</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Notice: Object dependency runs more often than primitive dependencies
        </p>
      </div>
    </div>
  );
};

export default ObjectDependencyDemo;
