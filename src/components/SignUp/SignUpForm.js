import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { Input, Button } from '../ui';
import * as api from '../../api';

const SignUpForm = props => {
  const { history } = props;

  const handleSubmit = async (values, actions) => {
    try {
      await api.register(values.name, values.email, values.password);
      history.push('/sign-in');
      actions.setSubmitting(false);
    } catch (error) {
      if (error.response.data.error.code === 'CONFLICT_ERR') {
        actions.setErrors({ email: 'email already registered' });
      }

      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required('required'),
        email: yup
          .string()
          .email('invalid email')
          .required('required'),
        password: yup
          .string()
          .min(6, 'must be at least 6 characters')
          .required('required')
      })}
      onSubmit={handleSubmit}
      render={props => {
        const { isSubmitting } = props;

        return (
          <Form autoComplete="off">
            <Field
              component={Input}
              name="name"
              type="text"
              placeholder="name"
            />
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
              SIGN UP
            </Button>
          </Form>
        );
      }}
    />
  );
};

export default withRouter(SignUpForm);
