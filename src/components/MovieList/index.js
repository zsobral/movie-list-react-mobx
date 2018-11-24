import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Button } from '../ui';
import MovieListItem from './MovieListItem';

class MovieList extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.user.fetchMovieLists();
  }

  render() {
    const { store } = this.props;

    return (
      <Fragment>
        <h1>Movie List</h1>
        <Link
          to="/user/movie-list/new"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          <Button>NEW MOVIE LIST</Button>
        </Link>
        {store.user.movieLists.map(movieList => (
          <MovieListItem key={movieList.id} movieList={movieList} />
        ))}
      </Fragment>
    );
  }
}

export default inject('store')(observer(MovieList));
