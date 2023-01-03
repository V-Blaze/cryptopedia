import React from 'react';
import { useSelector } from 'react-redux';
import ExchangeLists from '../components/ExchangeLists';

const Home = () => {
  const exchanges = useSelector((state) => state.exchanges);
  return (
    <div>
      <div>
        <span>Home</span>
        <span>current Country</span>
        <span>Icons</span>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        {exchanges.map((exchange) => (
          <ExchangeLists
            key={exchange.exchangeId}
            exchange={exchange}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
