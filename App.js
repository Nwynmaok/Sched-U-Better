import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/drawer';

class Main extends React.Component {

  render() {
    return (
      <App />
    );
  }
}

Expo.registerRootComponent(App);
export default Main;
