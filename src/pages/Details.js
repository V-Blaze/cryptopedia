import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const {
    exchangeId, name, rank, percentTotalVolume, volumeUsd, tradingPairs, socket, exchangeUrl,
  } = location.state;

  const money = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' });

  return (
    <div>
      <div className="hero-details">
        <div className="inner-hero px-4">
          <img
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${exchangeUrl}`}
            alt="logo"
            className="w-20 h-20"
          />
          <div className="text-2xl text-white flex flex-col gap-2">
            <span className=" font-semibold">
              Name:
              <span className="ml-2 text-red-300 font-bold text-4xl">{name}</span>
            </span>
            <span className=" font-semibold">
              Rank:
              <span className="ml-2 text-red-300 font-bold text-4xl">{rank}</span>
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        <h3 className="bg-gradient-to-r hover:bg-gradient-to-l from-sky-500 to-indigo-500 self-center text-3xl w-full text-center font-bold text-white py-2 rounded-b-lg">Exchange Details</h3>
        <ul className="flex flex-col p-5 gap-1 text-white font-semibold text-xl">
          <li className="flex justify-between bg-blue-800 py-3 rounded-md px-1">
            <span>Trading Volum percent</span>
            <span>
              {Number(percentTotalVolume).toFixed(3)}
              %
            </span>
          </li>
          <li className="flex justify-between bg-blue-900 py-3 rounded-md px-1">
            <span>Trading Volum USD:</span>
            <span>
              {money.format(volumeUsd)}
            </span>
          </li>
          <li className="flex justify-between bg-blue-800 py-3 rounded-md px-1">
            <span>No. of Trading Pairs</span>
            <span>{tradingPairs}</span>
          </li>
          <li className="flex justify-between bg-blue-900 py-3 rounded-md px-1">
            <span>Socket</span>
            <span>{socket}</span>
          </li>
          <li className="flex justify-between bg-blue-800 py-3 rounded-md px-1">
            <span>Website</span>
            <span>{exchangeUrl}</span>
          </li>
          <li className="flex justify-between bg-blue-900 py-3 rounded-md px-1">
            <span>Exchange ID</span>
            <span>{exchangeId}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
