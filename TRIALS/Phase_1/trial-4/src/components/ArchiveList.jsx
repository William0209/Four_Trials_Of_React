import React from "react";
// Import ArchiveItem component

// Destructure props: items and filterByPriority
const ArchiveList = () => {
  // Fill in the blank: Filter items based on filterByPriority
  // If filterByPriority is null, show all items (return items unchanged)
  // If filterByPriority has a value, filter items where item.priority === filterByPriority
  // Use ternary operator and array.filter()
  const filteredItems =
    ____ === null ? ____ : items.____((item) => item.____ === ____);

  // Fill in the blank for the early return: If the length of filteredItems is empty, return a "no results" message
  if (filteredItems.____ === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No items found matching the selected priority.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Fill in the blank: Map over filteredItems to render ArchiveItem components */}
      {/* Use item.id as the key prop (stable, unique identifier) */}
      {filteredItems.____((item) => (
        // Fill in the blank: Add key prop
        <____
          key={____}
          // Fill in the blank: Spread all item properties to ArchiveItem as props using spread operator
          {...____}
        />
      ))}
    </div>
  );
};

export default ArchiveList;
