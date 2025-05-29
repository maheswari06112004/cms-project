
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // This imports your App component
import './index.css'; // Your global CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Your entire application starts here */}
  </React.StrictMode>,
);