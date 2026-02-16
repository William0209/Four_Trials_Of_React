// Import PokemonSearch and PokemonList

import PokemonList from "./components/PokemonList";
import PokemonSearch from "./components/PokemonSearch";

// PokemonSearch: Fetches individual pokemon by name, manages loading/error/success states
// PokemonList: Fetches a list of pokemon on mount, demonstrates filtering derived state
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Data Fetching Trial
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Render PokemonSearch */}
            <PokemonSearch />

            {/* Render PokemonList */}
            <PokemonList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
