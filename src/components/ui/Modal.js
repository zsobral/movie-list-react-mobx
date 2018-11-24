import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = props => {
  const { show, title, onCancel, children } = props;

  const modalClass = classnames({
    modal: true,
    show
  });

  return (
    <div className={modalClass}>
      <div className="modal-header">
        <span className="modal-title">{title}</span>
        <span className="close" onClick={onCancel}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </span>
      </div>
      <div className="modal-content">{children}</div>
      <div className="modal-footer">footer</div>
    </div>
  );
};

Modal.defaultProps = {
  show: false
};

export default Modal;
