import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if password is correct
    if (password === "password") {
      // Store authentication status
      localStorage.setItem("authenticated", "true");
      navigate("/"); // Redirect to home after successful login
    } else {
      setError("Incorrect password, try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-800 rounded-md shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="mb-4 p-2 w-64 bg-gray-700 text-white rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 rounded"
        >
          Submit
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PasswordPage;
