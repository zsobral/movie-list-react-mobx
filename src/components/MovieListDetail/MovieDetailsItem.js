import React from 'react';
import moment from 'moment';

const MovieDetailsItem = props => {
  const { movie } = props;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        className="movie-poster"
        src={movie.poster.small}
        alt={movie.title}
      />
      <span>release date: {moment(movie.release_date * 1000).calendar()}</span>
      <p>{movie.overview}</p>
      <a
        href={`https://www.youtube.com/watch?v=${movie.trailers[0].key}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        trailer
      </a>
    </div>
  );
};

export default MovieDetailsItem;
