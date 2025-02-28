import './App.css';
import React from 'react';
import HomePage from './HomePage';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';

function App() {
  return (

    <div className="App">
       <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>

       <ResponsiveAppBar/>
    </div>
  );
}

export default App;


