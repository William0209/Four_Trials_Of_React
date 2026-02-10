import React from "react";
// import useState

const TaskInput = () => {
  // Declare state variable 'task' with initial value of an empty string

  // Declare state variable 'tasks' with initial value of an empty array

  // Declare state variable 'priority' with initial value of "medium"

  // Create: handleAddTask function that takes the event object as parameter
  // Prevent default form submission
  // If task is empty (after trimming), return early
  // Create a new task object with properties: id (use Date.now()), text (trimmed task), priority
  // Add the new task object to tasks array
  // Reset task to empty string

  // Create: handleDeleteTask function that takes taskId as parameter
  // Filter out the task with matching id from tasks array
  // Update tasks state with the filtered array

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Manager</h2>

      {/* Add: onSubmit event handler that references handleAddTask */}
      <form className="mb-6">
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            // Add: value bound to task state
            ____
            // Add: onChange that updates task with e.target.value
            onChange={(e) => ____(____)}
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Priority selector */}
          <select
            // Add: value bound to priority state
            ____
            // Add: onChange that updates priority with e.target.value
            onChange={(e) => ____(____)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </form>

      {/* Tasks List */}
      {/* Fill in the blank: Only render this section if tasks length is bigger than 0 (has items) */}
      {____ ____ && (
        <ul className="space-y-2">
          {tasks.map((taskItem) => (
            <li
              // Add a key to each list item, use taskItem.id
              className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded"
            >
              <div>
                <span className="text-gray-800">{taskItem.text}</span>
                {/* Display priority badge with conditional styling */}
                <span
                // Display priority badge with conditional styling, use a nested ternary operation to give the badge its respective text color depending on priority level (ranging from: "high", "medium", "low" 
                // The logic for the nested ternary follows: If taskItem.priority is "high", give it "bg-red-100 text-red-700", otherwise if its "medium", give it "bg-yellow-100 text-yellow-700", otherwise give it "bg-green-100 text-green-700" 
                  className={`ml-3 px-2 py-1 text-xs rounded ${
                    ____
                  }`}
                >
                  {taskItem.priority}
                </span>
              </div>

              {/* Add: the appropriate event handler so that clicking the button fires the handleDeleteTask function */}
              {/* Note: This requires an inline arrow function to pass the argument of taskItem.id effectively */}
              <button
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskInput;
