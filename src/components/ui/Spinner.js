import React from 'react';

const Spinner = props => {
  const { width, height, style, ...otherProps } = props;

  return (
    <div
      className="spinner"
      style={{ width, height, ...style }}
      {...otherProps}
    />
  );
};

Spinner.defaultProps = {
  width: 32,
  height: 32
};

export default Spinner;
