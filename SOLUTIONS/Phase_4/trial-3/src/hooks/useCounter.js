// import useState
import { useState } from "react";

// Custom hook for counter logic with multiple operations
// Shows how custom hooks can expose multiple functions
const useCounter = (initialValue = 0) => {
  // Declare state variable 'count' with initial value: initialValue
  const [count, setCount] = useState(initialValue);

  // Complete the increment function (adds 1), use the functional updater form
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Complete the decrement function (subtracts 1), use the functional updater form
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // Complete the reset function (resets count to initialValue)
  const reset = () => {
    setCount(initialValue);
  };

  // Return object with value and all functions: count, increment, decrement, reset
  return { count, increment, decrement, reset };
};

export default useCounter;
