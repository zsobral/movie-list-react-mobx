import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { Input, Button } from '../ui';

const SignInForm = props => {
  const { store, history } = props;

  const handleSubmit = async (values, actions) => {
    await store.user.login(values.email, values.password);

    if (store.user.isAuthenticated) {
      history.push('/user/movie-list');
    }

    if (store.user.error && store.user.error.code === 'UNAUTHORIZED_ERR') {
      const message = store.user.error.message;
      if (message === 'invalid email') {
        actions.setErrors({ email: 'invalid email' });
      }

      if (message === 'invalid password') {
        actions.setErrors({ password: 'invalid password' });
      }
    }

    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: 'mateus@gmail.com',
        password: '123456'
      }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('invalid email')
          .required('required'),
        password: yup
          .string()
          .min(6, 'invalid password')
          .required('required')
      })}
      onSubmit={handleSubmit}
      render={props => {
        const { isSubmitting } = props;

        return (
          <Form autoComplete="off">
            <Field
              component={Input}
              name="email"
              type="email"
              placeholder="email"
            />
            <Field
              component={Input}
              name="password"
              type="password"
              placeholder="password"
            />
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              fullWidth
            >
              SIGN IN
            </Button>
          </Form>
        );
      }}
    />
  );
};

export default withRouter(inject('store')(observer(SignInForm)));
