import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui';
import Container from './Container';

const uiTheme = {
  palette: {
    primaryColor: '#7a0019',
    accentColor: '#ffcc33',
  },
  toolbar: {
    container: {
        height: 70,
        paddingTop: 20,
      },
  },
  avatar: {
    container: {
      backgroundColor: '#333'
    }
  }
};

export default class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        active: 'people',
      };
  }

  _setInfoActive() {
    this.setState({ active: 'info' });
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <View style={styles.container}>
            <Drawer>
              <Drawer.Header>
                <Drawer.Header.Account
                  style={{
                    container: {
                      backgroundColor: '#ffcc33',
                      paddingTop: 50
                     },
                  }}
                  avatar={<Avatar text={'NK'} />}
                  accounts={[
                  // { avatar: <Avatar text="H" /> },
                  // { avatar: <Avatar text="L" /> },
                  ]}
                  footer={{
                    dense: true,
                    centerElement: {
                        primaryText: 'Nathan Kaufman',
                        secondaryText: 'kaufm260@umn.edu',
                    },
                      rightElement: 'arrow-drop-down',
                    }}
                />
              </Drawer.Header>
              <Drawer.Section
                style={{
                  label: {color: '#0000ff'}
                }}
                divider
                items=
                {[
                  {
                    icon: 'home', value: 'Dashboard',
                    active: this.state.active == 'dashboard',
                    onPress: () => {
                      this.setState({ active: 'dashboard' });
                      this.props.navigation.navigate('Dashboard');
                    },
                  },
                  {
                    icon: 'book', value: 'Explore Degrees',
                    active: this.state.active == 'exploredegrees',
                    onPress: () => {
                      this.setState({ active: 'exploredegrees' });
                      this.props.navigation.navigate('ExploreDegrees');
                    },
                  },
                  {
                    icon: 'shopping-cart', value: 'Schedule Builder',
                    active: this.state.active == 'schedulebuilder',
                    onPress: () => {
                      this.setState({ active: 'schedulebuilder' });
                      this.props.navigation.navigate('ScheduleBuilder');
                    },
                  },
                  {
                    icon: 'alarm', value: 'Reviews',
                    active: this.state.active == 'reviews',
                    onPress: () => {
                      this.setState({ active: 'reviews' });
                      this.props.navigation.navigate('Reviews');
                    },
                  },
                ]}
              />
            </Drawer>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
    header: {
        backgroundColor: '#455A64',
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
  });
