import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function BasicLayouts() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 lg:px-8 shadow-md bg-white sticky top-0 z-50">
        <div className="text-xl lg:text-2xl font-bold text-purple-800 mb-2 sm:mb-0">
          <Link to="/" className="hover:text-purple-600 transition-colors">
            CMS Platform
          </Link>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <Link 
            to="/sign-in" 
            className={`px-3 py-2 sm:px-4 text-sm sm:text-base rounded-lg transition-colors ${
              location.pathname === '/sign-in' 
                ? 'bg-purple-700 text-white' 
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            Sign In
          </Link>
          <Link 
            to="/sign-up" 
            className={`px-3 py-2 sm:px-4 text-sm sm:text-base rounded-lg transition-colors ${
              location.pathname === '/sign-up' 
                ? 'bg-purple-600 text-white' 
                : 'bg-purple-500 hover:bg-purple-600 text-white'
            }`}
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <div className="container mx-auto">
          © 2025 CMS Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default BasicLayouts;

