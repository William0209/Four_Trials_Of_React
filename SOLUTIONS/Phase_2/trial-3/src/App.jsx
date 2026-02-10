// Import RegistrationForm and PreferencesPanel components
import RegistrationForm from "./components/RegistrationForm";
import PreferencesPanel from "./components/PreferencesPanel";

// RegistrationForm: Text inputs with real-time validation, password matching, checkbox for terms
// PreferencesPanel: Radio buttons (theme), select dropdown (font size), checkbox (notifications), textarea (bio)

function App() {
  return (
    <>
      (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Controlled Inputs Trial
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Render RegistrationForm component */}
            <RegistrationForm />
            {/* Render PreferencesPanel component */}
            <PreferencesPanel />
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default App;
