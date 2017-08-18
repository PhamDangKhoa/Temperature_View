/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class Temperature_View extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Temperature_View', () => Temperature_View);
