import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import MovieDetailsItem from './MovieDetailsItem';

class MovieListDetail extends Component {
  componentDidMount() {
    const { store, match } = this.props;
    store.movieList.fetchMovieListById(match.params.id);
  }

  render() {
    const { store } = this.props;

    console.log(store.movieList.movieList);

    return (
      <Fragment>
        {store.movieList.movieList &&
          store.movieList.movieList.movies.map((movie, index) => (
            <MovieDetailsItem key={index} movie={movie} />
          ))}
      </Fragment>
    );
  }
}

export default withRouter(inject('store')(observer(MovieListDetail)));
