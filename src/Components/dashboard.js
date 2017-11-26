import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import * as Colors from '../themes/colors';
import { COLOR, ThemeProvider, Toolbar, BottomNavigation } from 'react-native-material-ui';
import Container from './Container';
import { Navigator, NativeModules } from 'react-native';
import { Card, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const uiTheme = {
  palette: {
    primaryColor: '#7a0019',
    accentColor: '#ffcc33',
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  reviewButton: {
    borderWidth: 2,
    borderRadius: 22,
  },
  reviewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    flex: 1,
    textAlign: 'center'
  },
  flexcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
  },
});

// class savedCourses extends Component {
//   render() {
//     return (
//
//     )
//   }
// }

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'Dashboard',
      courses: 'No Courses'
    };
    this.asyncDelete = this.asyncDelete.bind(this)
  }

  static navigationOptions = {
    title: 'Menu',
  };

  navigate() {
    this.props.navigation.navigate('DrawerOpen');
  }

  asyncDelete(course) {
    console.log(course)
    try {
      AsyncStorage.getItem('courses')
        .then(saved => {
          saved = saved == null ? [] : JSON.parse(saved)
          saved = Array.isArray(saved) ? saved : [saved]
          var index = saved.indexOf(course);
          saved.splice(index, 1);
          return AsyncStorage.setItem('courses', JSON.stringify(saved))
        })
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    let returnable = ""
      try {
        AsyncStorage.getItem('courses')
          .then(JSON.parse)
          .then(items => {
            this.setState({courses: items})
          })
      } catch (error) {
      console.log(error);
      }



    const courselist = [];
    if (this.state.courses) {
      for (let i = 0; i < this.state.courses.length; i++) {
        let course = this.state.courses[i]
        courselist.push(
          <View style={styles.flexcontainer}>
            <View style={styles.leftContainer}>
              <Text>{this.state.courses[i]}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Button
                icon={{name: 'remove', type: 'font-awesome'}}
                title='    X    '
                onPress={() => this.asyncDelete(course)}/>
            </View>
          </View>
        )
      }
    }


    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="menu"
            centerElement={this.state.active}
            onLeftElementPress={() => this.navigate()}
          />
        <View>
          <SearchBar
            lightTheme

            placeholder='Course Search' />
        </View>
        <View>
          <Button style={styles.reviewButton} title="Reviews">
          </Button>
        </View>
        <View>
          <Card title="SAVED COURSES">
            <View>{courselist}</View>
          </Card>
        </View>
        <View>
          <Card title="SAVED SCHEDULES">
            <Text>Sample Course</Text>
          </Card>
        </View>
        <View>
          <Card title="DEGREE PROGRESS">
            <Text>Sample Course</Text>
          </Card>
        </View>
        <View style={styles.container}>
        </View >
        </Container>
      </ThemeProvider>
    );
  }
}

export default Dashboard;
