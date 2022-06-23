import React from 'react';
import './spinner.scss';

const Spinner = ({ size }) => {
  const styles = {
    width: size,
    height: size,
  };

  return <span style={styles} className="spinner" />;
};

export default Spinner;