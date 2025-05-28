import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [country, setCountry] = useState("");
  const [hobby, setHobby] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-white rounded-lg shadow space-y-4"
      style={{ minWidth: 320 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign-Up 😉</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Enter department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Enter hobby"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold transition"
      >
        Sign Up
      </button>
    </form>
  );
}
