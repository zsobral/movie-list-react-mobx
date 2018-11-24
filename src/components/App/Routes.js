import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { DefaultLayout, CenterFormLayout } from '../layout';
import Home from '../Home';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import MovieList from '../MovieList';
import NewMovieList from '../NewMovieList';
import MovieListDetail from '../MovieListDetail';

const Routes = props => {
  const { store } = props;

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path="/"
          layout={DefaultLayout}
          component={Home}
          isAuthenticated={store.user.isAuthenticated}
        />
        <PublicRoute
          exact
          path="/sign-up"
          redirectTo="/"
          layout={CenterFormLayout}
          component={SignUp}
          isAuthenticated={store.user.isAuthenticated}
        />
        <PublicRoute
          exact
          path="/sign-in"
          redirectTo="/"
          layout={CenterFormLayout}
          component={SignIn}
          isAuthenticated={store.user.isAuthenticated}
        />
        <PublicRoute
          exact
          path="/movie-list/:id"
          layout={DefaultLayout}
          component={MovieListDetail}
          isAuthenticated={store.user.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/user/movie-list"
          redirectTo="/sign-in"
          layout={DefaultLayout}
          component={MovieList}
          isAuthenticated={store.user.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/user/movie-list/new"
          redirectTo="/sign-in"
          layout={DefaultLayout}
          component={NewMovieList}
          isAuthenticated={store.user.isAuthenticated}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default inject('store')(observer(Routes));
