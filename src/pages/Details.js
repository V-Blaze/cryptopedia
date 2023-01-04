import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const {
    exchangeId, name, rank, percentTotalVolume, volumeUsd, tradingPairs, socket, exchangeUrl,
  } = location.state;
  return (
    <div>
      <div>
        <img src={`https://logo.clearbit.com/${exchangeUrl}`} alt="logo" />
        <div>
          <span>
            name:
            {name}
          </span>
          <span>
            rank
            {rank}
          </span>
        </div>
      </div>
      <div>
        <h3>Exchange Details</h3>
        <ul>
          <li>
            <span>Trading Volum percent</span>
            <span>
              {percentTotalVolume}
              %
            </span>
          </li>
          <li>
            <span>Trading Volum USD</span>
            <span>
              {volumeUsd}
              $
            </span>
          </li>
          <li>
            <span>No. of Trading Pairs</span>
            <span>{tradingPairs}</span>
          </li>
          <li>
            <span>Socket</span>
            <span>{socket}</span>
          </li>
          <li>
            <span>Website</span>
            <span>{exchangeUrl}</span>
          </li>
          <li>
            <span>Exchange ID</span>
            <span>{exchangeId}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
