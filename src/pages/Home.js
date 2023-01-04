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
    const filteredExchanges = exchanges.filter((ex) => ex.name.toLowerCase().includes(text));
    setCryptoExchanges(filteredExchanges);
  };

  const showDetails = (id) => {
    const item = exchanges.filter((exchange) => exchange.exchangeId === id);
    navigate('/details', { state: item[0] });
  };

  return (
    <div>
      <div>
        <span>Country</span>
      </div>
      <div>
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
        <form>
          {/* <label htmlFor="countries">Choose an countries:</label> */}
          <select id="countries" name="countries" onChange={(e) => handleSelection(e.target.value)}>
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
      <div>
        {cryptoExchanges.map((exchange) => (
          <ExchangeLists
            key={exchange.exchangeId}
            exchange={exchange}
            showDetails={showDetails}
          />
        ))}
      </div>
      <div>
        <span>CryptoPedia Copywrite V-Blaze</span>
      </div>
    </div>
  );
};

export default Home;
