import React from 'react';
import './city.scss';

const City = ({ data }) => {
  const { name, temperature } = data;

  return (
    <div className="city">
      <span className="city__temperature">{`${temperature} F`}</span>
      <span className="city__name">{name}</span>
    </div>
  );
};

export default City;