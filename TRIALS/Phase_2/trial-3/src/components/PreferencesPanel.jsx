import React from "react";
// import useState

const PreferencesPanel = () => {
  // Declare state variable 'theme' with initial value "light"

  // Declare state variable 'fontSize' with initial value "medium"

  // Declare state variable 'notifications' with initial value true

  // Declare state variable 'bio' with initial value empty string

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        User Preferences
      </h2>

      <div className="space-y-6">
        {/* Theme Selection - Radio Buttons */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <div className="space-y-2">
            {/* Map over array ["light", "dark", "auto"] to create radio buttons */}
            {["light", "dark", "auto"].map((themeOption) => (
              <label key={themeOption} className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  // Bind checked to whether theme state equals themeOption
                  checked={____ === ____}
                  // Update theme to themeOption when selected
                  onChange={() => ____(____)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {themeOption}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Font Size - Select Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size
          </label>
          <select
            // Bind value to fontSize state
            value={____}
            // Update fontSize on change
            onChange={(e) => ____(____)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>

        {/* Notifications Toggle - Checkbox */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Enable Notifications
          </label>
          <input
            type="checkbox"
            // Bind checked to notifications state
            checked={____}
            // Toggle notifications boolean
            onChange={(e) => ____(____)}
            className="w-4 h-4 text-blue-600 rounded"
          />
        </div>

        {/* Bio - Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio ({bio.length}/200 characters)
          </label>
          <textarea
            // Bind value to bio state
            value={____}
            // Update bio on change
            onChange={(e) => ____(____)}
            maxLength={200}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about yourself..."
          />
        </div>

        {/* Preview Section - Shows current selections */}
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-gray-800 mb-2">
            Current Settings:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {/* Display current theme value */}
            <li>
              Theme: <span className="font-medium">{____}</span>
            </li>
            {/* Display current fontSize value */}
            <li>
              Font Size: <span className="font-medium">{____}</span>
            </li>
            {/* Display "Enabled" if notifications is true, otherwise "Disabled" */}
            <li>
              Notifications:{" "}
              <span className="font-medium">
                {____ ? "Enabled" : "Disabled"}
              </span>
            </li>
            {/* Display bio length */}
            <li>
              Bio Length: <span className="font-medium">{____} characters</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPanel;
