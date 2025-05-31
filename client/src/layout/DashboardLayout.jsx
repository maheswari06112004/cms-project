

import React, { useState } from 'react';

const sidebarItems = [
  { name: 'Books', icon: '📚' },
  { name: 'View Favorites', icon: '⭐' },
  { name: 'CMS Project', icon: '📄' },
  { name: 'Developer Page', icon: '💻' },
];

function SidebarNavItem({ item, isActive, isSidebarExpanded, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center cursor-pointer transition-all duration-300 rounded-md mx-2 my-1 px-5 py-3 text-sm
        ${
          isActive
            ? 'bg-white text-purple-800 font-bold border-l-4 border-purple-500 shadow-sm'
            : 'text-white hover:bg-purple-500 hover:bg-opacity-30 hover:text-white'
        }
      `}
    >
      <span className={`${isSidebarExpanded ? 'mr-3' : ''}`}>{item.icon}</span>
      {isSidebarExpanded && item.name}
    </div>
  );
}

function SidebarActionButton({ icon, text, isSidebarExpanded, onClick, defaultColor, hoverColor }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center cursor-pointer font-medium user-select-none rounded-md mx-2 my-1 px-5 py-3 transition-all duration-300
        ${defaultColor} ${hoverColor} ${isSidebarExpanded ? 'justify-start' : 'justify-center'}
      `}
    >
      <span className={`${isSidebarExpanded ? 'mr-3' : ''}`}>{icon}</span>
      {isSidebarExpanded && text}
    </div>
  );
}

export default function DashboardLayout({ children }) {
  const [activeItem, setActiveItem] = useState('Books');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      <aside
        className={`transition-all duration-300 bg-gradient-to-b from-purple-800 to-purple-600 text-white flex flex-col justify-between py-6 shadow-2xl ${isSidebarExpanded ? 'w-60' : 'w-20'}`}
      >
        <div>
          <h2 className="text-center mb-8 font-bold tracking-wider text-lg">
            {isSidebarExpanded ? 'Dashboard' : 'D'}
          </h2>

          <nav>
            {sidebarItems.map((item) => (
              <SidebarNavItem
                key={item.name}
                item={item}
                isActive={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
                isSidebarExpanded={isSidebarExpanded}
              />
            ))}
          </nav>
        </div>

        <div>
          <SidebarActionButton
            icon="🚪"
            text="Logout"
            isSidebarExpanded={isSidebarExpanded}
            onClick={() => alert('Logging out...')}
            defaultColor="text-white"
            hoverColor="hover:bg-red-500 hover:bg-opacity-30 hover:text-white"
          />

          <SidebarActionButton
            icon={isSidebarExpanded ? '⬅️' : '➡️'}
            text={isSidebarExpanded ? 'Collapse' : 'Expand'}
            isSidebarExpanded={isSidebarExpanded}
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            defaultColor="text-white"
            hoverColor="hover:bg-purple-500 hover:bg-opacity-30 hover:text-white"
          />
        </div>
      </aside>

      <main className="flex-1 p-10 flex flex-col items-center justify-center text-center text-black">
        <h1 className="text-4xl font-bold mb-10 drop-shadow-sm">
          Welcome to Dashboard!
        </h1>

        {children && (
          <div className="w-full max-w-3xl text-left bg-white bg-opacity-90 p-6 rounded-xl shadow-xl backdrop-blur-sm text-black">
            {children}
          </div>
        )}
      </main>
    </div>
  );
}



