import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import { Home, Details } from './pages';

// Stylesheet
import './App.css';

const App = () => (
  <div className="relative sm:-8 p-4 bg-[#4369B2] min-h-screen flex flex-row">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </div>
);

export default App;
