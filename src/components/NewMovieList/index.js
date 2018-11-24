import React, { Component } from 'react';

import { Modal } from '../ui';
import NewMovieListForm from './NewMovieListForm';
import SearchMovieForm from './SearchMovieForm';

class NewMovieList extends Component {
  state = {
    showSearchMovieForm: false
  };

  showSearchMovieForm = show => {
    this.setState({ showSearchMovieForm: show });
  };

  render() {
    return (
      <div>
        <h1>new movie list</h1>
        <Modal show={this.state.showSearchMovieForm}>
          <SearchMovieForm />
        </Modal>
        <NewMovieListForm />
      </div>
    );
  }
}

export default NewMovieList;
