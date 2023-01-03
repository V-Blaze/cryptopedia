import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Pages
import { Home, Details } from './pages';

// Stylesheet
import './App.css';
// eslint-disable-next-line
import { fetchExchanges } from './redux/Exchanges/exchange';

const App = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  dispatch(fetchExchanges());
  return (
    <div className="relative sm:-8 p-4 bg-[#4369B2] min-h-screen flex flex-row">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
