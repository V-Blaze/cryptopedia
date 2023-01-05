import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExchangeLists from '../components/ExchangeLists';
import { filterCountry } from '../utils';

const Home = () => {
  const navigate = useNavigate();
  const exchanges = useSelector((state) => state.exchanges);
  const [cryptoExchanges, setCryptoExchanges] = useState([]);

  useEffect(() => {
    setCryptoExchanges(exchanges);
  }, [exchanges]);

  const handleSelection = (country) => {
    const filtered = filterCountry(country, exchanges);
    setCryptoExchanges(filtered);
  };

  const handleSearch = (text) => {
    const filteredExchanges = exchanges.filter((ex) => (
      ex.name.toLowerCase().includes(text.toLowerCase())));
    setCryptoExchanges(filteredExchanges);
  };

  const showDetails = (id) => {
    const item = exchanges.filter((exchange) => exchange.exchangeId === id);
    navigate('/details', { state: item[0] });
    console.clear();
  };

  return (
    <div>
      <div className="bg-[#3775e8] h-[15rem] flex flex-col gap-3 justify-center items-center">
        <div>
          <span className=" text-xl font-semibold italic text-gray-300 ">
            Total Exchanges:
            {`  ${cryptoExchanges.length}`}
          </span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Search Exchange"
            onChange={(e) => handleSearch(e.target.value)}
            className="w-[80%] rounded-lg px-2 py-2 bg-blue-900 text-white"
          />
          <form className="w-[60%]">
            {/* <label htmlFor="countries">Choose an countries:</label> */}
            <select
              id="countries"
              name="countries"
              onChange={(e) => handleSelection(e.target.value)}
              className="w-full rounded-md p-1 bg-blue-900 text-white"
            >
              <option value="Select A Country">Select A Country</option>
              <option value="allCountries">All Countries</option>
              <option value="Australia">Australia</option>
              <option value="China">China</option>
              <option value="EU">EU</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Japan">Japan</option>
              <option value="Russia">Russia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Singapore">Singapore</option>
              <option value="South_Korea">South Korea</option>
              <option value="UK">UK</option>
              <option value="US">US</option>
              <option value="otherCountries">Other Countries</option>
            </select>
          </form>
        </div>
      </div>
      <div className="exchange-container mb-9 ">
        {cryptoExchanges.map((exchange) => (
          <ExchangeLists
            key={exchange.exchangeId}
            exchange={exchange}
            showDetails={showDetails}
          />
        ))}
      </div>
      <div className=" fixed bottom-0 mt-4 w-full bg-[#4369B2] h-9 flex justify-center items-center text-white text-xl">
        <span>CryptoPedia Copywrite V-Blaze</span>
      </div>
    </div>
  );
};

export default Home;
