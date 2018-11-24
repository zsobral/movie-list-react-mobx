import React, { Component, Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import * as api from '../../api';
import { Input } from '../ui';
import MovieGrid from './MovieGrid';

class SearchMovieForm extends Component {
  state = {
    searchResults: []
  };

  handleSubmit = async (values, actions) => {
    try {
      const response = await api.searchMovies(values.query);
      this.setState({ searchResults: response.data });
    } catch (error) {
      this.setState({ searchResults: [] });
    }
    actions.setSubmitting(false);
  };

  render() {
    const { onSelect } = this.props;

    return (
      <Fragment>
        <Formik
          initialValues={{
            query: ''
          }}
          validationSchema={yup.object().shape({
            query: yup.string().required('required')
          })}
          onSubmit={this.handleSubmit}
          render={props => {
            const { isSubmitting } = props;
            return (
              <Form autoComplete="off">
                <Field
                  component={Input}
                  type="text"
                  name="query"
                  placeholder="movie title..."
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
              </Form>
            );
          }}
        />
        <MovieGrid movies={this.state.searchResults} onClick={onSelect} />
      </Fragment>
    );
  }
}

export default SearchMovieForm;
