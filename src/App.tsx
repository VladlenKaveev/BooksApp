import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './modules/navigation';
import store from './store';
import RNBootSplash from 'react-native-bootsplash';

export default class App extends React.Component {
  componentDidMount() {
    RNBootSplash.hide({fade: true});
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
