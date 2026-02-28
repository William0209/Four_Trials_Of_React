// import useState
import { useState } from "react";

// Custom hook for boolean toggle logic
// Demonstrates extracting simple but reusable patterns
const useToggle = (initialValue = false) => {
  // Declare state variable 'value' with initial value: initialValue
  const [value, setValue] = useState(initialValue);

  // Complete the function called toggle, that flips the boolean using the functional updater form
  const toggle = () => {
    setValue((prev) => !prev);
  };

  // return the current value and the toggle method
  // syntax: return [____, ____];
  return [value, toggle];
};

export default useToggle;
