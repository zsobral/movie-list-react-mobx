import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const MovieListItem = props => {
  const { movieList, history } = props;

  const handleClick = () => {
    history.push(`/movie-list/${movieList.id}`);
  };

  return (
    <div className="movie-list-item" onClick={handleClick}>
      <span className="id">{movieList.user.name}</span>
      <br />
      <span className="id">
        created {moment(movieList.created_at * 1000).calendar()}
      </span>
      <div className="movies">
        {movieList.movies.map((movie, index) => (
          <img key={index} src={movie.poster.small} alt={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(MovieListItem);
