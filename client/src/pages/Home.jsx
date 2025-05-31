import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to the Home Page!
        </h2>
        <p className="text-gray-600 mb-8">
          Discover features and get started with your journey.
        </p>
        <button
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition font-semibold text-lg"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
