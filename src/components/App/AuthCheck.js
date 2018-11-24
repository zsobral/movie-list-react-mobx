import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class AuthCheck extends Component {
  componentDidMount() {
    const { store } = this.props;

    store.user.checkAuth();
  }

  render() {
    const { store, loading: Loading, component: Component } = this.props;

    if (store.user.firstRun) {
      return <Loading />;
    }

    return <Component />;
  }
}

export default inject('store')(observer(AuthCheck));
