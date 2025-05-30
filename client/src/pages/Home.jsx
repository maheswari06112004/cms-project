// layouts/BasicLayouts.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function BasicLayouts() {
  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      <div className="min-h-[calc(100vh-128px)] flex items-center justify-center bg-purple-100 px-4">
      <div className="text-center">
        <p className="text-lg md:text-2xl font-semibold text-purple-800 mb-4">
          Welcome to our CMS platform!
        </p>
        <button className="px-6 py-2 rounded bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicLayouts;