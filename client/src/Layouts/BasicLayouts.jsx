import React from 'react';

function BasicLayouts() {
    return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-xl font-bold text-purple-800">
          {/* Logo */}
          <span></span>
        </div>
        <div className="space-x-4">
          {/* Auth Buttons */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex-grow p-6">
        <p className="text-center text-gray-600">Welcome to the app!</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-300 p-4 text-center text-sm text-black-500">
        © 2025 cms. All rights reserved.
      </footer>
    </div>
        
    );
}

export default BasicLayouts;