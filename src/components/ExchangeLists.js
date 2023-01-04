import React from 'react';
import PropTypes from 'prop-types';

const ExchangeLists = ({ exchange, showDetails }) => {
  const {
    exchangeId, name, rank, volumeUsd,
  } = exchange;

  return (
    <div>
      <span>{name}</span>
      <span>{rank}</span>
      <span>{volumeUsd}</span>
      <button type="button" onClick={() => showDetails(exchangeId)}>icon</button>
    </div>
  );
};

ExchangeLists.propTypes = {
  exchange: PropTypes.oneOfType([PropTypes.object]).isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default ExchangeLists;
