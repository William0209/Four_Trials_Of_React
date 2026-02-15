import React from "react";
// import useState and useEffect

const MultiDependencyTracker = () => {
  // Declare state variable 'username' with initial value ""

  // Declare state variable 'role' with initial value "viewer"

  // Declare state variable 'isActive' with initial value true

  // Declare state variable 'log' with initial value of []

  // Fill in the blank: useEffect with MULTIPLE dependencies
  // Should run when username OR role OR isActive changes
  // Inside: add a log entry showing all three current values
  // Template: `Profile updated - User: ${username}, Role: ${role}, Active: ${isActive}`
  // Fill in the blank for the functional updater form for setLog
  useEffect(() => {
    if (username) {
      ____((prev) => [
        ...prev,
        `Profile updated - User: ${____}, Role: ${____}, Active: ${____}`,
      ]);
    }
  }, [____, ____, ____]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Multi-Dependency Tracker
      </h2>

      <div className="space-y-3 mb-4">
        {/* Username input - controlled */}
        <input
          type="text"
          // bind value to the username state
          value={____}
          // update username on change
          onChange={(e) => ____(____)}
          placeholder="Enter username..."
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Role selector */}
        <select
          // bind value to the role state
          value={____}
          // update role on change
          onChange={(e) => ____(____)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>

        {/* Active toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            // bind checked to isActive state
            checked={____}
            // toggle isActive boolean using e.target.checked
            onChange={(e) => ____(____)}
            className="w-4 h-4 text-blue-600"
          />
          <label className="text-sm text-gray-700">Active User</label>
        </div>
      </div>

      {/* Activity Log */}
      {log.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded max-h-32 overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-700">
              Activity Log:
            </h3>
            {/* clear log on click */}
            <button
              onClick={() => ____(__)}
              className="text-xs text-red-600 hover:text-red-800"
            >
              Clear
            </button>
          </div>
          <ul className="space-y-1">
            {log.map((entry, index) => (
              <li key={index} className="text-xs text-gray-600">
                {entry}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiDependencyTracker;
