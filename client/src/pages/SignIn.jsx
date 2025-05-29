// import React, { useState } from 'react';

// function SignIn() {
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     return (
//         <>
//           <form>
//             <h2>Login into your account</h2>
//              <input
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

//             </form>  
//         </>
//     );
// }

// export default SignIn;