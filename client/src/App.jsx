import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Favorite from "./pages/component/favorite";

import DashboardLayout from './layout/DashboardLayout';
// import Developerspage from './pages/Developerspage';
// import Home from './pages/Home';

// import Books from "./pages/CMS/Books";
// import Card from "./pages/CMS/Card";
// import FavoritePage from "./pages/CMS/FavoritePage";

function App() {
  return (
   <>
   
   {/* <Home/> */}
   <DashboardLayout/>
   {/* <Developerspage/> */}
{/*    
   <Books/> */}
   {/* <Card/> */}
   {/* <FavoritePage/> */}
   
   
   </>

  );
}

export default App;
