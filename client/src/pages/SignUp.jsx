// import { useState } from "react";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [department, setDepartment] = useState("");
//   const [country, setCountry] = useState("");
//   const [hobby, setHobby] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md w-full mx-auto mt-10 p-10 rounded-2xl shadow-2xl border space-y-5"
//       style={{
//         minWidth: 320,
//         background: "linear-gradient(135deg, #e6e6fa 0%, #f8f6ff 60%, #d1c4e9 100%)",
//         boxShadow: "0 8px 32px 0 rgba(120, 81, 169, 0.18), 0 1.5px 4px rgba(0,0,0,0.08)",
//         borderColor: "#e6e6fa",
//         backdropFilter: "blur(4px)",
//       }}
//     >
//       <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-800 drop-shadow-lg">Sign-Up 😉</h2>

//       <input
//         type="text"
//         placeholder="Enter username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//           focus: { ringColor: "#b39ddb" }
//         }}
//       />

//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//         }}
//       />

//       <input
//         type="password"
//         placeholder="Enter password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Enter department"
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Enter country"
//         value={country}
//         onChange={(e) => setCountry(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Enter hobby"
//         value={hobby}
//         onChange={(e) => setHobby(e.target.value)}
//         required
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm"
//         style={{
//           borderColor: "#e6e6fa",
//           boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
//         }}
//       />

//       <button
//         type="submit"
//         className="w-full text-black px-4 py-2 rounded-lg hover:bg-purple-800 hover:text-white font-semibold transition shadow-md"
//         // style={{
//         //   background: "linear-gradient(90deg, #b39ddb 0%, #9575cd 100%)",
//         //   boxShadow: "0 2px 8px 0 rgba(120, 81, 169, 0.18)",
//         // }}
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// }
