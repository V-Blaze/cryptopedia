import React from 'react';
import PropTypes from 'prop-types';

const ExchangeLists = ({ exchange }) => {
  const { name, rank, volumeUsd } = exchange;

  return (
    <div>
      <span>{name}</span>
      <span>{rank}</span>
      <span>{volumeUsd}</span>
      <span>icon</span>
    </div>
  );
};

ExchangeLists.propTypes = {
  exchange: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ExchangeLists;
