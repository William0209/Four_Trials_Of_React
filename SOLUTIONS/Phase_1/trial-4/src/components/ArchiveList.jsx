import React from "react";
// Import ArchiveItem component
import ArchiveItem from "./ArchiveItem";

// Destructure props: items and filterByPriority
const ArchiveList = ({ items, filterByPriority }) => {
  // Fill in the blank: Filter items based on filterByPriority
  // If filterByPriority is null, show all items (return items unchanged)
  // If filterByPriority has a value, filter items where item.priority === filterByPriority

  const filteredItems =
    filterByPriority === null
      ? items
      : items.filter((item) => item.priority === filterByPriority);

  // Fill in the blank: If filteredItems is empty, return a "no results" message
  // Use early return with length check
  if (filteredItems.length === 0) {
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
      {filteredItems.map((item) => (
        // Fill in the blank: Add key prop using item.id
        <ArchiveItem
          key={item.id}
          // Fill in the blank: Spread all item properties as props using spread operator
          // Syntax: {...object} spreads all properties
          {...item}
        />
      ))}
    </div>
  );
};

export default ArchiveList;
