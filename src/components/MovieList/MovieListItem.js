import React from 'react';

const MovieListItem = props => {
  const { movieList } = props;

  return (
    <div className="movie-list-item">
      <span className="id">ID: {movieList.id}</span>
      <div className="movies">
        {movieList.movies.map((movie, index) => (
          <img key={index} src={movie.poster.small} alt={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieListItem;
