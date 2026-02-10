import { useState } from "react";
// Import ArchiveList component
import ArchiveList from "./components/ArchiveList";

function App() {
  const [filterPriority, setFilterPriority] = useState(null);

  // Sample data - each item has: id, title, status, priority, tags
  const archiveData = [
    {
      id: 1,
      title: "useEffect Dependencies",
      status: "Critical - Review Required",
      priority: 1,
      tags: ["hooks", "side-effects", "common-mistakes"],
    },
    {
      id: 2,
      title: "Custom Hooks Pattern",
      status: "Documented",
      priority: 3,
      tags: ["hooks", "reusability", "best-practices"],
    },
    {
      id: 3,
      title: "State Management with Context",
      status: "In Progress",
      priority: 2,
      tags: ["context", "state", "advanced"],
    },
    {
      id: 4,
      title: "Key Prop Importance",
      status: "Critical - Review Required",
      priority: 1,
      tags: ["performance", "lists", "reconciliation"],
    },
    {
      id: 5,
      title: "Memo and Performance",
      status: "Research Phase",
      priority: 2,
      tags: ["performance", "optimization", "advanced"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Archive Repository
          </h1>

          {/* Priority filter buttons */}
          <div className="flex gap-3 mb-6">
            {/* Fill in the blank: Set filterPriority to null to show all items */}
            <button
              onClick={() => setFilterPriority(null)}
              className={`px-4 py-2 rounded ${filterPriority === null ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
            >
              All
            </button>

            {/* Fill in the blank: Create three priority filter buttons for priorities 1, 2, and 3 */}
            {/* Map over an array [1, 2, 3] to generate buttons */}
            {/* Use the priority number as the key */}
            {[1, 2, 3].map((priority) => (
              <button
                // Fill in the blank: Use the priority param as key
                key={priority}
                // Fill in the blank: Set filterPriority to the clicked priority number
                onClick={() => setFilterPriority(priority)}
                // Conditional className: if filterPriority === priority, use blue styling, otherwise white
                className={`px-4 py-2 rounded ${filterPriority === priority ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              >
                Priority {priority}
              </button>
            ))}
          </div>

          {/* Fill in the blank: Render ArchiveList component */}
          {/* Pass archiveData as items prop */}
          {/* Pass filterPriority as filterByPriority prop */}
          <ArchiveList items={archiveData} filterByPriority={filterPriority} />
        </div>
      </div>
    </>
  );
}

export default App;
