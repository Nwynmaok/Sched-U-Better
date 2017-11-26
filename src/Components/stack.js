import { StackNavigator } from 'react-navigation';
import { AppRegistry, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from '../utils/navigation';
import Dashboard from './dashboard';
import Calendar from './calendar';
import ExploreDegrees from './exploredegrees'
import ScheduleBuilder from './schedulebuilder'
import Reviews from './reviews'
import * as Colors from '../themes/colors';

const Stack = StackNavigator(
  {
    Dashboard: { screen: Dashboard },
    ExploreDegrees: { screen: ExploreDegrees },
    ScheduleBuilder: { screen: ScheduleBuilder },
    Reviews: { screen: Reviews }
  },
  {
    headerMode: 'none',
    // cardStyle: { paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
  },
);

export default Stack;
