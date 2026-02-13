import React from "react";
// import useState and useEffect from react

// This component tracks page views and document title updates
const PageTracker = () => {
  // Declare state variable 'pageViews' with initial value 0

  // Declare state variable 'currentPage' with initial value "Home"

  // Declare state variable 'lastUpdated' with initial value null

  // Create: a useEffect that runs on mount (when component first renders), if you're unsure of the syntax for the useEffect hook, search it up without ai!
  // Inside: increment pageViews by 1 using the setter function
  // Specify the correct dependency for the useEffect so that it runs on mount

  // Create: a useEffect that runs after every render.
  // Inside: update the title tag to show the current page, using the document.title, if you're confused on how you update document.title or about what it is, search it up without ai!
  //     <head>
  //     <title>Title tag</title>  <-- This is document.title
  //     </head>
  // Specify the correct "dependency" for the useEffect so that it runs after every render

  // Create: a useEffect that runs when currentPage changes
  // Inside: use the setter function to update the lastUpdated state variable to new Date().toLocaleTimeString()
  // Specify the correct dependency so it runs when currentPage changes

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Tracker</h2>

      <div className="space-y-3 mb-6">
        <p className="text-gray-600">
          Page Views:{___}
          <span className="font-bold text-blue-600">{pageViews}</span>
        </p>
        <p className="text-gray-600">
          Current Page:{___}
          <span className="font-bold text-blue-600">{currentPage}</span>
        </p>
        {/* Display lastUpdated if it exists */}
        {lastUpdated ___ (
          <p className="text-gray-600">
            Last Updated:{___}
            <span className="font-bold text-blue-600">{lastUpdated}</span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Map over pages array to create navigation buttons */}
        {["Home", "Archive", "Trials", "Documentation"].map((page) => (
          <button
            //asign page as key
            //update currentPage with page through the setter function
            onClick={() => ___}
                // assign the following styling if currenPage equals page, "bg-blue-600 text-white", if not then assign "bg-gray-200 text-gray-700 hover:bg-gray-300"
                // note, make use of a ternary expression in the template literal
            className={`px-4 py-2 rounded ${
              ___
            }`}
            >
            {/* display page */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageTracker;
