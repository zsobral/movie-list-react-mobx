import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Navbar, Button } from '../../ui';

const TopNav = props => {
  const { store, history } = props;

  const handleLogout = async () => {
    await store.user.logout();
    history.replace('/');
  };

  return (
    <Navbar brand="Movie List">
      {!store.user.isAuthenticated ? (
        <Fragment>
          <NavLink to="/sign-in">SIGN IN</NavLink>
          <NavLink to="/sign-up">SIGN UP</NavLink>
        </Fragment>
      ) : (
        <Fragment>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/user/movie-list">MOVIE LIST</NavLink>
          <Button link onClick={handleLogout}>
            Logout
          </Button>
        </Fragment>
      )}
    </Navbar>
  );
};

export default withRouter(inject('store')(observer(TopNav)));
