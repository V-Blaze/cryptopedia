import React from 'react';
import PropTypes from 'prop-types';
import { BsBoxArrowInRight } from 'react-icons/bs';
// import bittrex from '../assets/bittrex.png';

const ExchangeLists = ({ exchange, showDetails }) => {
  const {
    exchangeId, name, rank, volumeUsd, exchangeUrl,
  } = exchange;

  const money = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' });

  return (
    <div className="flex flex-col text-white bg-blue-900 rounded-md hover:scale-105 hover:mx-3 hover:bg-blue-800">
      <button
        type="button"
        aria-label="click"
        onClick={() => showDetails(exchangeId)}
        className=" self-end p-4 hover:text-[#ff7daf]"
      >
        <BsBoxArrowInRight />
      </button>
      <div className="grid grid-cols-2 p-2 gap-1 text-[#ff7daf]">
        <div className="flex flex-col justify-center lg:items-center">
          <span className=" font-semibold text-l">{name}</span>
          <span>
            rank:
            {` #${rank}`}
          </span>
          <span className="flex w-10">
            {money.format(volumeUsd)}
          </span>
        </div>
        <div className="w-20 h-20 justify-self-end">
          <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${exchangeUrl}`} alt={name} className="w-[100%] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

ExchangeLists.propTypes = {
  exchange: PropTypes.oneOfType([PropTypes.object]).isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default ExchangeLists;
