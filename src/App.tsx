import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './modules/navigation';
import store from './store';
import RNBootSplash from 'react-native-bootsplash';
import flurryService from './modules/analytics/domain/flurry';

export default class App extends React.Component {
  componentDidMount() {
    RNBootSplash.hide({fade: true});
    flurryService.init();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
