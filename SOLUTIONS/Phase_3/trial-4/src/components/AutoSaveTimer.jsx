import React, { useState, useEffect } from "react";
// import useState and useEffect

// Demonstrates cleanup with timers
// Auto-saves content after user stops typing for 2 seconds
const AutoSaveTimer = () => {
  // Declare state variable 'content' with initial value ""
  const [content, setContent] = useState("");
  // Declare state variable 'lastSaved' with initial value null
  const [lastSaved, setLastSaved] = useState(null);
  // Declare state variable 'saveStatus' with initial value "All changes saved"
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  // Create: a useEffect that sets up a "debounced" auto-save timer
  // Inside:
  // First: Set saveStatus to "Unsaved changes..."
  // Second declare a variabel called timer that executes step 3 after 2 seconds (use setTimout), note when specifying time, 1 sec = 1000, if you're unsure of the syntax when working with setTimout, look it up!
  // Third: in the setTimeout, update saveStatus to "Saved!", and lastSaved to new Date().toLocaleTimeString()
  // Fourth: return a cleanup function that clears the timout we created (timer) using clearTimout, syntax return () => clearTimeout(__)
  // Specify the dependency array with the variable content
  // note, you can leave the error for setSaveStatus or use  // eslint-disable-next-line react-hooks/set-state-in-effect

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaveStatus("Unsaved changes...");

    const timer = setTimeout(() => {
      setSaveStatus("Saved!");
      setLastSaved(new Date().toLocaleTimeString());
    }, 2000);

    return () => clearTimeout(timer);
  }, [content]);

  // Why the cleanup matters:
  // Without cleanup, every keystroke creates a NEW timer
  // After typing 10 characters, 10 timers are running (they accumulate)
  // All 10 will fire, causing 10 "saves"
  // Cleanup cancels the old timer before starting a new one

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Auto-Save Timer</h2>

      <textarea
        // bind value to content state
        value={content}
        // update content on change
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing... (auto-saves after 2 seconds of inactivity)"
        rows={6}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-3 space-y-1">
        {/* Display saveStatus */}
        <p className="text-sm text-gray-600">
          Status: <span className="font-medium">{saveStatus}</span>
        </p>

        {/* Display lastSaved if it exists */}
        {lastSaved && (
          <p className="text-xs text-gray-500">Last saved: {lastSaved}</p>
        )}
      </div>
    </div>
  );
};

export default AutoSaveTimer;
