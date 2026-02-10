import React from "react";
// import useState

const RegistrationForm = () => {
  // Declare state variable 'username' with initial value of empty string

  // Declare state variable 'email' with initial value of empty string

  // Declare state variable 'password' with initial value of empty string

  // Declare state variable 'confirmPassword' with initial value of empty string

  // Declare state variable 'agreeToTerms' with initial value of false

  // Fill in the blank: for the const variable called usernameError, holding a computed value, the value should return the error message "Username must be at least 3 characters" if the length of username is bigger than 0 AND username lenght is smaller than 3 chararacters, else if valid, return an empty string. Note use a ternary expression for the computed value.
  const usernameError =
    username.____ > 0 && username.____ < 3
      ? "Username must be at least 3 characters"
      : "";

  // Create: a const variable called emailError holding a computed value, if the length of the email is larger than 0 AND does not include the symbol "@", return "Email must contain @", otherwise return a empty string. Note use a ternary expression for the computed value

  // Fill in the blank: for the const variable called passwordMatch which hold a computed boolean, that checks if passwords length is larger than 0 AND confirmPassword length is over 0 AND if password is equal to confirmPassword
  const passwordMatch =
    password.____ > 0 && confirmPassword.____ > 0 && password === ____;

  // Create: a const variable called passwordMismatch which hold a computed boolean, that checks if confirmPassword lenght is larger than 0 AND password is not equal to confirmPassword

  // Create: a const variable called isFormValid which hold a computed boolean value, that checks if username lenght is larger or equal to 3 AND email includes the symbol "@" AND passwords match AND user agreed to terms

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`Registration successful for ${username}!`);
      // Reset form - set all state variables back to initial values
      ____(____);
      ____(____);
      ____(____);
      ____(____);
      ____(____);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            // Bind value to username state
            value={____}
            // Update username on change
            onChange={(e) => ____(____)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
          />
          {/* Display usernameError if it exists */}
          {____ && <p className="text-sm text-red-600 mt-1">{____}</p>}
        </div>

        {/* Email Input section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            // Bind value to email state
            value={____}
            // Update email on change
            onChange={(e) => ____(____)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
          {/* Display emailError if it exists */}
          {emailError && <p className="text-sm text-red-600 mt-1">{____}</p>}
        </div>

        {/* Password Input section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            // Bind value to password state
            value={____}
            // Update password on change
            onChange={(e) => ____(____)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>

        {/* Confirm Password Input section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            // Bind value to confirmPassword state
            value={____}
            // Update confirmPassword on change
            onChange={(e) => ____(____)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm password"
          />
          {/* If passwordMatch is true, show green success message */}
          {____ && (
            <p className="text-sm text-green-600 mt-1">Passwords match!</p>
          )}
          {/* If passwordMismatch is true, show red error message */}
          {____ && (
            <p className="text-sm text-red-600 mt-1">Passwords do not match</p>
          )}
        </div>

        {/* Terms and Conditions Checkbox section */}
        <div className="flex items-center">
          <input
            type="checkbox"
            // Bind checked attribute to agreeToTerms state
            checked={____}
            // Update the agreeToTerms boolean on change
            // Use e.target.checked (not e.target.value for checkboxes)
            onChange={(e) => ____(____)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button section */}
        <button
          type="submit"
          // Disable button if form is not valid, utilise isFormValid and !
          disabled={____}
          className={`w-full py-2 px-4 rounded font-medium ${
            // If form is valid, blue background, otherwise gray and cursor not-allowed
            ____
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
