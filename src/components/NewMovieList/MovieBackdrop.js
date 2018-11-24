import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MovieBackdrop = props => {
  const { movie, onClose } = props;

  return (
    <div
      className="movie-backdrop-wrapper"
      style={{ backgroundImage: `url(${movie.backdrop.large})` }}
    >
      <div className="movie-backdrop" />
      <h2 className="movie-backdrop-title">{movie.title}</h2>
      <span className="close" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </div>
  );
};

export default MovieBackdrop;
