import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import MovieListItem from './MovieListItem';

class HomePage extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.movieList.fetchMovieLists();
  }

  render() {
    const { store } = this.props;

    return (
      <div style={{ marginTop: 36 }}>
        {store.movieList.lastMovieLists.map(movieList => (
          <MovieListItem key={movieList.id} movieList={movieList} />
        ))}
      </div>
    );
  }
}

export default inject('store')(observer(HomePage));
