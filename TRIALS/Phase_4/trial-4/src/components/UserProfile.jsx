import React from "react";
// Import useUser custom hook

const UserProfile = () => {
  // Use custom hook to get user, login, and logout
  const { ____, ____, ____ } = ____();
  // If no user logged in, show login form
  if (!____.____) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-semibold mb-3">Login</h3>
        <div className="space-y-2">
          <button
            onClick={() => ____("Alice", "admin")}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login as Admin
          </button>
          <button
            onClick={() => ____("Bob", "editor")}
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Login as Editor
          </button>
        </div>
      </div>
    );
  }
  // If user logged in, show profile
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold mb-2">User Profile</h3>
      <p className="text-sm text-gray-600">
        Name: <span className="font-medium">{____.____}</span>
      </p>
      <p className="text-sm text-gray-600">
        Role: <span className="font-medium capitalize">{____.____}</span>
      </p>
      <button
        onClick={____}
        className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
