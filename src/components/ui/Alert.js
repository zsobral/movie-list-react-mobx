import React from 'react';
import classnames from 'classnames';

const Alert = props => {
  const { type, children } = props;

  const alertClass = classnames({
    alert: true,
    danger: type === 'danger'
  });

  return <div className={alertClass}>{children}</div>;
};

export default Alert;
