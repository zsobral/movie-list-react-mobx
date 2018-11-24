import React from 'react';
import classnames from 'classnames';

import Spinner from './Spinner';

const Input = props => {
  const { loading, field, form, ...otherProps } = props;

  const inputControlClass = classnames({
    'input-control': true,
    'has-error': form && form.touched[field.name] && form.errors[field.name]
  });

  return (
    <div className={inputControlClass}>
      <input className="input" {...field} {...otherProps} />
      {loading && <Spinner width={16} height={16} />}
      {form &&
        form.touched[field.name] &&
        form.errors[field.name] && (
          <span className="input-error">{form.errors[field.name]}</span>
        )}
    </div>
  );
};

Input.defaultProps = {
  loading: false,
  field: {}
};

export default Input;
