import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';

import { Spinner } from '../ui';
import store from '../../store';
import AuthCheck from './AuthCheck';
import Routes from './Routes';

const AppLoading = () => {
  return (
    <div className="center-element">
      <Spinner width={64} height={64} style={{ borderWidth: 12 }} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthCheck loading={AppLoading} component={Routes} />
      </Provider>
    );
  }
}

export default observer(App);
