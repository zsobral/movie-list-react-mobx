import React from 'react';

const MovieGrid = props => {
  const { movies, onClick } = props;

  const renderMovies = movies.map(movie => (
    <div
      key={movie.id}
      className="movie-grid-item"
      onClick={() => onClick(movie)}
    >
      <img src={movie.poster.medium} alt={movie.title} />
    </div>
  ));

  return <div className="movie-grid">{renderMovies}</div>;
};

export default MovieGrid;
