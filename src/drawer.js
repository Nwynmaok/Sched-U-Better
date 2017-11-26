import Expo from 'expo';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Stack from './Components/stack';
import Dashboard from './Components/dashboard';
import Calendar from './Components/calendar';
import ExploreDegrees from './Components/exploredegrees'
import ScheduleBuilder from './Components/schedulebuilder'
import Reviews from './Components/reviews'
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './utils/navigation';
import * as Colors from './themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerMenu from './Components/drawer-toolbar';

const createDrawerNavigator = DrawerNavigator(
  {
    Home: { screen: Dashboard },
    Stack: { screen: Stack },
  },
  {
    contentComponent: DrawerMenu,
    contentOptions: {
      activeTintColor: '#e91e63',
      style: {
        flex: 1,
        paddingTop: 15,
      }
    }
  },
  getDrawerConfig(300, 'left', 'Dashboard')
);

// createDrawerNavigator.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('Sched-U-Better', Colors.primary, 'white', getDrawerItem(navigation));

class App extends Component {
  render() {
    const Navigator = createDrawerNavigator;
    return (
      <Navigator />
    );
  }
}

Expo.registerRootComponent(App);
export default App;
