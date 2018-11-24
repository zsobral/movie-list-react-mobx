import React, { Component, Fragment } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { withRouter } from 'react-router-dom';

import { Modal, Button } from '../ui';
import SearchMovieForm from './SearchMovieForm';
import MovieBackdrop from './MovieBackdrop';
import * as api from '../../api';

class NewMovieListForm extends Component {
  state = {
    isSearchMovieFormOpen: false
  };

  showSearchMovieForm = show => {
    this.setState({ isSearchMovieFormOpen: show });
  };

  handleSubmit = async (values, actions) => {
    const { history } = this.props;

    try {
      await api.saveMovieList(values.movies.map(movie => movie.id));
      history.push('/user/movie-list');
    } catch (error) {
      alert('error');
      console.log(error.response.data);
      actions.setSubmitting(false);
    }
  };

  render() {
    const { history } = this.props;

    return (
      <Formik
        initialValues={{
          movies: []
        }}
        onSubmit={this.handleSubmit}
        render={props => {
          const { setFieldValue, values, isSubmitting } = props;

          return (
            <Fragment>
              <Form autoComplete="off">
                <FieldArray
                  name="movies"
                  render={arrayHelpers => {
                    return (
                      <Fragment>
                        {values.movies.map((movie, index) => (
                          <MovieBackdrop
                            key={index}
                            movie={movie}
                            onClose={() => {
                              arrayHelpers.remove(index);
                            }}
                          />
                        ))}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                          }}
                        >
                          <Button
                            type="button"
                            onClick={() => history.push('/user/movie-list')}
                            style={{ marginRight: 8 }}
                            disabled={isSubmitting}
                          >
                            CANCEL
                          </Button>
                          <Button
                            type="button"
                            onClick={() => this.showSearchMovieForm(true)}
                            style={{ marginRight: 8 }}
                            disabled={isSubmitting}
                          >
                            ADD MOVIE
                          </Button>
                          <Button
                            type="submit"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                          >
                            SAVE
                          </Button>
                        </div>
                      </Fragment>
                    );
                  }}
                />
              </Form>
              <Modal
                title="Search Movie"
                show={this.state.isSearchMovieFormOpen}
                onCancel={() => this.showSearchMovieForm(false)}
              >
                <SearchMovieForm
                  onSelect={movie => {
                    setFieldValue('movies', [...values.movies, movie]);
                    this.showSearchMovieForm(false);
                  }}
                />
              </Modal>
            </Fragment>
          );
        }}
      />
    );
  }
}

export default withRouter(NewMovieListForm);
