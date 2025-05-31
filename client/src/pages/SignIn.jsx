import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign in attempt with:', { email, password });
      setIsLoading(false);
      // Handle sign in logic here
       Swal.fire({
            title: "Sign In Successful!",
            text: "Welcome to the CMS Platform!",
            icon: "success",
            confirmButtonText: "Continue"
          });
    }, 1000);
  };

  return (
    <div className="max-w-md w-full mx-auto py-8 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-purple-800">
          Sign In to Your Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
              style={{
                borderColor: "#e6e6fa",
                boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
              style={{
                borderColor: "#e6e6fa",
                boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-purple-600 hover:text-purple-700 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
