import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import SignUpForm from './SignUpForm';

const SignUp = props => {
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <SignUpForm />
    </Fragment>
  );
};

export default withRouter(SignUp);
