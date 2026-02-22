import React, { useState, useEffect } from "react";
// import useState and useEffect

// Demonstrates cleanup with event listeners
const WindowResizeTracker = () => {
  // Declare state variable 'windowSize' with initial value of an object containing: width: window.innerWidth, height: window.innerHeight,
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // Declare state variable 'resizeCount' with initial value of 0
  const [resizeCount, setResizeCount] = useState(0);

  // Fill in the blank: for the useEffect below that tracks when the user resizes their browser window and update our component with the new dimensions.
  // Inside: In the defined arrow function "handleResize", update the state variable windowSize with an object containing the current window.innerWidth and window.innerHeight
  // Aside from updating the setWindowSize state variable in handleResize, we also want to increment the setResizeCount variable with 1 using the functional updater form
  // Crate an eventlistener asigned to window, with specified event as "resize" that also takes handleResize as its callback. syntax: window.listener("resize", callback)
  // At the end: we also want to clean up the eventlistener when the component unmounts, using removeEventListener
  // Dependency array: on mount

  // Why the cleanup matters:
  // Without cleanup, every re-render adds a NEW listener
  // After 10 re-renders, resize fires handleResize 10 times
  // Memory leak - listeners accumulate and never get removed

  useEffect(() => {
    const handleResize = () => {
      // update windowSize accordingly
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // increment resizeCount using functional updater
      setResizeCount((prev) => prev + 1);
    };

    // Create event listener
    window.addEventListener("resize", handleResize);

    // Return cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Window Resize Tracker
      </h2>

      <div className="space-y-2">
        {/* Display window width */}
        <p className="text-sm text-gray-600">
          Width: <span className="font-medium">{windowSize.width}px</span>
        </p>

        {/* Display window height */}
        <p className="text-sm text-gray-600">
          Height: <span className="font-medium">{windowSize.height}px</span>
        </p>

        {/* Display resize count */}
        <p className="text-sm text-gray-600">
          Resize events: <span className="font-medium">{resizeCount}</span>
        </p>

        <p className="text-xs text-gray-500 mt-3">
          Try resizing your browser window
        </p>
      </div>
    </div>
  );
};

export default WindowResizeTracker;
