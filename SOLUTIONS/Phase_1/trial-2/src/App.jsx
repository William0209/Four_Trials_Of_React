//import the ArchivedRecord component
import ArchiveRecord from "./components/ArchiveRecord";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* First record: Urgent error status */}
          <ArchiveRecord
            title="useEffect Dependencies"
            description="Critical pattern for preventing infinite loops"
            // Fill in an appropriate status text for an error scenario
            status="error"
            variant="error"
            // Set isUrgent to true (boolean, not string)
            isUrgent={true}
          />

          {/* Second record: Successful/completed status */}
          {/* Note: 'description' prop name is missing - add it */}
          <ArchiveRecord
            title="Custom Hooks"
            // Add the prop name 'description' before the equals sign
            description="Extracted logic for reusability across components"
            status="Documented"
            // Fill in an appropriate variant for a successful/completed item
            variant="success"
          />

          {/* Third record: Warning status with no description */}
          {/* This deliberately omits description prop to test the fallback text */}
          <ArchiveRecord
            title="Context API"
            status="Under Review"
            variant="warning"
            isUrgent={false}
          />
        </div>
      </div>
    </>
  );
}

export default App;
