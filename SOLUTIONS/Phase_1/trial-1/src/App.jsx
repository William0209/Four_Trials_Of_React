// Import the ArchiveEntry component from the correct file path
import ArchiveEntry from "./components/ArchiveEntry";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8">
        {/* Render the ArchiveEntry component with appropriate props */}
        {/* title="React Fundamentals" status="Preserved" */}
        <ArchiveEntry title="React Fundamentals" status="Preserved" />
      </div>
    </>
  );
}

export default App;
