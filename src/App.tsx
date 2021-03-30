import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './modules/navigation';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
