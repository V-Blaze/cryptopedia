import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>Details</div>
  );
};

export default Details;
