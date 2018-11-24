import React from 'react';
import classnames from 'classnames';

import Spinner from './Spinner';

const Button = props => {
  const { loading, fullWidth, children, link, ...otherProps } = props;

  const buttonClass = classnames({
    button: true,
    'full-width': fullWidth,
    link
  });

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
      {loading && <Spinner width={16} height={16} />}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  fullWidth: false,
  link: false
};

export default Button;
