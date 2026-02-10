import React, { useState } from "react";
//Import useState

// Idea of component, user can increment, decrement and reset, user can also choose via the step button how much the the function should increment/decrement with (1, 5, 10).

const Counter = () => {
  // Declare state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Declare state variable 'step' with initial value 1
  const [step, setStep] = useState(1);

  // Create: A function to increment count by the current stepvalue, the increment shouldn't be able to go above 100, utilise Math.min
  const increment = () => {
    setCount((prev) => Math.min(prev + step, 100));
  };

  // Create: A function to decrement count by the current step value, note: the decrement shouldn't be able to go below 0, utilise Math.max
  const decrement = () => {
    setCount((prev) => Math.max(prev - step, 0));
  };

  // Create: A function that resets count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>

      {/* Display the current count value inside the div*/}
      <div className="text-4xl font-bold text-blue-600 mb-4 text-center">
        {count}
      </div>

      <div className="flex gap-3 mb-4">
        {/* Add: The appropriate event handler, and reference the decrement function so it fires when the button is clicked */}
        <button
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={decrement}
        >
          {/* Display: current value of step, so the user knows how much it decrements with */}
          - {step}
        </button>

        {/* Add: appropriate event handler and reference the reset function so it fires when the button is clicked*/}
        <button
          className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={reset}
        >
          Reset
        </button>

        {/* Add: appropriate event handler and reference the increment function so it fires when the button is clicked */}
        <button
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={increment}
        >
          {/* Display: current value of step, so the user knows how much it increments with */}
          + {step}
        </button>
      </div>

      {/* Step selector */}
      <div className="flex items-center gap-3">
        <label className="text-gray-700 font-medium">Step:</label>
        {/* Fill in the blank: Map over array [1, 5, 10] to create the 3 step buttons */}
        {/* Use the number itself as the key */}
        {[1, 5, 10].map((stepValue) => (
          <button
            key={stepValue}
            // Fill in the blank: Call setStep with the stepValue when clicked
            onClick={() => setStep(stepValue)}
            // Conditional className: if step === stepValue, use blue styling
            className={`px-4 py-2 rounded ${step === stepValue ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {stepValue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Counter;
