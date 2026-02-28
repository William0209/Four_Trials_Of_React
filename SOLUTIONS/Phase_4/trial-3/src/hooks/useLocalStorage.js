// import useState
import { useState } from "react";

// Custom hook for syncing state with localStorage
// Naming convention: Custom hooks MUST start with "use"
const useLocalStorage = (key, initialValue) => {
  // Create state, but initialize from localStorage if it exists
  // Use a function for initial state (only runs once on mount)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Step 1: Get item from localStorage using the key
      // Syntax: window.localStorage.getItem(key)
      const item = window.localStorage.getItem(key);

      // Step 2: If item exists, parse it from JSON string to JavaScript value
      // Otherwise return initialValue
      // Syntax: item ? JSON.parse(item) : initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      // Step 3: If anything goes wrong, return initialValue
      return initialValue;
    }
  });

  // Create a custom setter that updates both state AND localStorage
  const setValue = (value) => {
    try {
      // Step 1: Handle functional updater pattern
      // If value is a function, call it with storedValue
      // Otherwise use value directly
      // Syntax: value instanceof Function ? value(storedValue) : value
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Step 2: Update React state
      // Call setStoredValue with valueToStore
      setStoredValue(valueToStore);

      // Step 3: Save to localStorage
      // Convert valueToStore to JSON string and save with key
      // Syntax: window.localStorage.setItem(key, JSON.stringify(valueToStore))
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Return array like useState: [currentValue, setterFunction], note in terms of the setter, return the custom setter setValue
  return [storedValue, setValue];
};

export default useLocalStorage;
