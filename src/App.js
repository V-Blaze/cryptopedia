import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Pages
import { Home, Details } from './pages';
import Navbar from './components/Navbar';

// Stylesheet
import './App.css';
// eslint-disable-next-line
import { fetchExchanges } from './redux/Exchanges/exchange';

const App = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  dispatch(fetchExchanges());
  return (
    <div className="bg-[#4369B2] min-h-screen">
      <div className="px-[5%]">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
