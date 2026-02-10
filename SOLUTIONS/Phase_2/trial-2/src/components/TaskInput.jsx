import React, { useState } from "react";
// import useState

const TaskInput = () => {
  // Declare state variable 'task' with initial value of an empty string
  const [task, setTask] = useState("");
  // Declare state variable 'tasks' with initial value of an empty array
  const [tasks, setTasks] = useState([]);
  // Declare state variable 'priority' with initial value of "medium"
  const [priority, setPriority] = useState("medium");

  // Create: handleAddTask function that takes the event object as parameter
  // Prevent default form submission
  // If task is empty (after trimming), return early
  // Create a new task object with properties: id (use Date.now()), text (trimmed task), priority
  // Add the new task object to tasks array
  // Reset task to empty string
  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    const newTask = { id: Date.now(), text: trimmedTask, priority: priority };

    setTasks((prev) => [...prev, newTask]);
    setTask("");
  };

  // Create: handleDeleteTask function that takes taskId as parameter
  // Filter out the task with matching id from tasks array
  // Update tasks state with the filtered array
  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Manager</h2>

      {/* Add: onSubmit event handler that references handleAddTask */}
      <form className="mb-6" onSubmit={handleAddTask}>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            // Add: value bound to task state
            value={task}
            // Add: onChange that updates task with e.target.value
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Priority selector */}
          <select
            // Add: value bound to priority state
            value={priority}
            // Add: onChange that updates priority with e.target.value
            onChange={(e) => setPriority(e.target.value)}
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
      {tasks.length > 0 && (
        <ul className="space-y-2">
          {tasks.map((taskItem) => (
            <li
              // Add a key to each list item, use taskItem.id
              key={taskItem.id}
              className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded"
            >
              <div>
                <span className="text-gray-800">{taskItem.text}</span>
                {/* Display priority badge with conditional styling */}
                <span
                  // Display priority badge with conditional styling, use a nested ternary operation to give the badge its respective text color depending on priority level (ranging from: "high", "medium", "low"
                  // The logic for the nested ternary follows: If taskItem.priority is "high", give it "bg-red-100 text-red-700", otherwise if its "medium", give it "bg-yellow-100 text-yellow-700", otherwise give it "bg-green-100 text-green-700"
                  className={`ml-3 px-2 py-1 text-xs rounded ${
                    taskItem.priority === "high"
                      ? "bg-red-100 text-red-700"
                      : taskItem.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {taskItem.priority}
                </span>
              </div>

              {/* Add: the appropriate event handler so that clicking the button fires the handleDeleteTask function */}
              {/* Note: This requires an inline arrow function to pass the argument of taskItem.id effectively */}
              <button
                className="text-red-600 hover:text-red-800 font-medium"
                onClick={() => handleDeleteTask(taskItem.id)}
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
