import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = props => {
  const {
    isAuthenticated,
    redirectTo,
    layout: Layout,
    component: Component,
    ...otherProps
  } = props;

  return (
    <Route
      {...otherProps}
      render={props => {
        if (isAuthenticated && redirectTo) {
          return <Redirect to={redirectTo} />;
        }

        if (Layout !== null) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

PublicRoute.defaultProps = {
  layout: null
};

export default PublicRoute;
