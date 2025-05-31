import React, { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
            <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6">
                    Login 🤝
                </h2>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow-sm transition"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow-sm transition"
                />
                <button
                    type="submit"
                    className="w-full py-2 mt-2 bg-purple-300 hover:bg-purple-600 text-white font-semibold rounded-lg transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
