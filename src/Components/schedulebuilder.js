import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  AsyncStorage,
  ScrollView,
  TextInput,
  Modal
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from './Container';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Card, Button } from 'react-native-elements';

class CourseSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.asyncDelete = this.asyncDelete.bind(this);
  }

  asyncDelete(course) {
    try {
      AsyncStorage.getItem('schedule')
        .then(saved => {
          saved = saved == null ? [] : JSON.parse(saved)
          saved = Array.isArray(saved) ? saved : [saved]
          for (let i = 0; i < saved.length; i++) {
            if (saved[i].title === course) {
              delete saved[i];
              console.log(saved);
            }
          }
          for (let i = 0; i < saved.length; i++) {
            saved[i] && saved.push(saved[i]);
          }
          saved.splice(0, saved.length);
          return AsyncStorage.setItem('schedule', JSON.stringify(saved))
          return
        })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let selectedCourse = [];
    if (this.props.selectedCourse != 'init') {
      switch (this.props.selectedCourse) {
        case 'ECON 1101-001':
          selectedCourse.push(
            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ECON 1101-001{"\n"}Spring 2018{"\n"}M W F 9:05 - 9:55
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Professor TBD{"\n"}Capacity: 450/500
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Wiley Hall 175
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: knowledge of plane geometry and advanced algebra
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Microeconomic behavior of consumers, firms, and markets in domestic and world economy. Demand and supply. Competition and monopoly. Distribution of income. Economic interdependencies in the global economy. Effects of global linkages on individual decisions.
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Notes: This course has common midterm exams that take place in the evening and a common final exam.
                  </Text>
                </View>
                <View style={styles.flexcontainer}>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'star'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='SAVE'
                      onPress={() => this.props.asyncStore('ECON 1101-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'remove', type: 'font-awesome'}}
                      backgroundColor='#ff0000'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='REMOVE'
                      onPress={() => this.asyncDelete('ECON 1101-001')}
                    />
                  </View>
                </View>
              </Card>
            </View>
          )
          break;
        default:
          selectedCourse = [];
          break;
      }
    } else {
      selectedCourse = [];
    }
    switch (this.props.searchedCourse) {
      case 'ECON 1101':
      return(
        <ScrollView style={{paddingTop: 50}}>
          <TextInput
            style={styles.topsearchstyle}
            placeholder="Course Search"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={() => this.props.searchHandler(this.state.text)}
          />
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ECON 1101-001{"\n"}Spring 2018{"\n"}M W F 9:05 - 9:55
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Lecture{"\n"}Professor TBD{"\n"}Capacity: 450/500
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Location: Wiley Hall 175
                </Text>
                <Text style={styles.cardcontenttext}>
                  Prereq: knowledge of plane geometry and advanced algebra
                </Text>
                <Text style={styles.cardcontenttext}>
                  Microeconomic behavior of consumers, firms, and markets in domestic and world economy. Demand and supply. Competition and monopoly. Distribution of income. Economic interdependencies in the global economy. Effects of global linkages on individual decisions.
                </Text>
                <Text style={styles.cardcontenttext}>
                  Notes: This course has common midterm exams that take place in the evening and a common final exam.
                </Text>
              </View>
              <View style={styles.flexcontainer}>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'star'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='SAVE'
                    onPress={() => this.props.asyncStore('ECON 1101-001')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                  />
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ECON 1101-002{"\n"}Spring 2018{"\n"}W 10:10 - 11:00
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Discussion{"\n"}Professor TBD{"\n"}Capacity: 19/35
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Associated Section: ECON 1101-001
                </Text>
                <Text style={styles.cardcontenttext}>
                  Location: Blegen Hall 415
                </Text>
              </View>
              <View style={styles.flexcontainer}>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'star'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='SAVE'
                    onPress={() => this.props.asyncStore('ECON 1101-002')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                  />
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ECON 1101-033{"\n"}Spring 2018{"\n"}M W 4:00 - 5:15
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Lecture{"\n"}Professor TBD{"\n"}Capacity: 9/35
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Location: Blegen Hall 425
                </Text>
                <Text style={styles.cardcontenttext}>
                  Prereq: knowledge of plane geometry and advanced algebra
                </Text>
                <Text style={styles.cardcontenttext}>
                  Microeconomic behavior of consumers, firms, and markets in domestic and world economy. Demand and supply. Competition and monopoly. Distribution of income. Economic interdependencies in the global economy. Effects of global linkages on individual decisions.
                </Text>
                <Text style={styles.cardcontenttext}>
                  Notes: This course has common midterm exams that take place in the evening and a common final exam.
                </Text>
              </View>
              <View style={styles.flexcontainer}>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'star'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='SAVE'
                    onPress={() => this.props.asyncStore('ECON 1101-033')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                  />
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ECON 1101-034{"\n"}Spring 2018{"\n"}W 5:30 - 6:20
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Discussion{"\n"}Professor TBD{"\n"}Capacity: 9/35
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Associated Section: ECON 1101-033
                </Text>
                <Text style={styles.cardcontenttext}>
                  Location: Carlson School of Management L-126
                </Text>
              </View>
              <View style={styles.flexcontainer}>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'star'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='SAVE'
                    onPress={() => this.props.asyncStore('ECON 1101-034')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      );
    case 'init':
      return(
        <ScrollView style={{paddingTop: 50}}>
          <TextInput
            style={styles.topsearchstyle}
            placeholder="Course Search"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={() => this.props.searchHandler(this.state.text)}
          />
          {selectedCourse}
        </ScrollView>
      );
    default:
      return (
        <ScrollView>
          <Text style={styles.topdegreestyle}>Course not found</Text>
        </ScrollView>
      )
    }
  }
}

class Scheduler extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      schedule: 'No Courses'
    };
    // this.asyncDelete = this.asyncDelete.bind(this)
  }

  render() {
    try {
      AsyncStorage.getItem('schedule')
        .then(JSON.parse)
        .then(items => {
          this.setState({schedule: items})
        })
    } catch (error) {
      console.log(error);
    }

    let Mlist = [];
    let Tulist = [];
    let Wlist = [];
    let Thlist = [];
    let Flist = [];
    let M = [];
    let Tu = [];
    let W = [];
    let Th = [];
    let F = [];
    let test = "";
    if (this.state.schedule !== 'No Courses' && this.state.schedule) {
      console.log(this.state.schedule)
      for (let i = 0; i < this.state.schedule.length; i++) {
        if (this.state.schedule[i].day != null) {
          let days = this.state.schedule[i].day;
          // console.log(days.length);
          for (let j = 0; j < days.length; j++) {
            switch (days[j]) {
              case 'M':
                M.push(this.state.schedule[i]);
                break;
              case 'U':
                Tu.push(this.state.schedule[i]);
                break;
              case 'W':
                W.push(this.state.schedule[i]);
                break;
              case 'H':
                Th.push(this.state.schedule[i]);
                break;
              case 'F':
                F.push(this.state.schedule[i]);
                break;
              default:
                break;
            }
          }
        }
      }
      let Msorted = M.sort(function(first, second) {
        var a = first.start;
        var b = second.start;
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Tusorted = Tu.sort(function(first, second) {
        var a = first.start;
        var b = second.start;
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Wsorted = W.sort(function(first, second) {
        var a = first.start;
        var b = second.start;
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Thsorted = Th.sort(function(first, second) {
        var a = first.start;
        var b = second.start;
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Fsorted = F.sort(function(first, second) {
        var a = first.start;
        var b = second.start;
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      for (let i = 0; i < Msorted.length; i++) {
        let starttime = Msorted[i].start;
        let endttime = Msorted[i].end;
        let title = Msorted[i].title;
        let location = Msorted[i].location
        Mlist.push(
          {
            name: title,
            subtitle: starttime + "-" + endttime + " " + location
          }
        );
      }
      for (let i = 0; i < Tusorted.length; i++) {
        let starttime = Tusorted[i].start;
        let endttime = Tusorted[i].end;
        let title = Tusorted[i].title;
        let location = Tusorted[i].location
        Tulist.push(
          {
            name: title,
            subtitle: starttime + "-" + endttime + " " + location
          }
        );
      }
      for (let i = 0; i < Wsorted.length; i++) {
        let starttime = Wsorted[i].start;
        let endttime = Wsorted[i].end;
        let title = Wsorted[i].title;
        let location = Wsorted[i].location
        Wlist.push(
          {
            name: title,
            subtitle: starttime + "-" + endttime + " " + location
          }
        );
      }
      for (let i = 0; i < Thsorted.length; i++) {
        let starttime = Thsorted[i].start;
        let endttime = Thsorted[i].end;
        let title = Thsorted[i].title;
        let location = Thsorted[i].location
        Thlist.push(
          {
            name: title,
            subtitle: starttime + "-" + endttime + " " + location
          }
        );
      }
      for (let i = 0; i < Fsorted.length; i++) {
        let starttime = Fsorted[i].start;
        let endttime = Fsorted[i].end;
        let title = Fsorted[i].title;
        let location = Fsorted[i].location
        Flist.push(
          {
            name: title,
            subtitle: starttime + "-" + endttime + " " + location
          }
        );
      }
    }

    return(
      <ScrollView style={{paddingTop: 50}}>
        <Text>Monday</Text>
        <List>
          {
            Mlist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.props.handler(item.name)}
              />
            ))
          }
        </List>
        <Text>Tuesday</Text>
        <List>
          {
            Tulist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
              />
            ))
          }
        </List>
        <Text>Wednesday</Text>
        <List>
          {
            Wlist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
              />
            ))
          }
        </List>
        <Text>Thursday</Text>
        <List>
          {
            Thlist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
              />
            ))
          }
        </List>
        <Text>Friday</Text>
        <List>
          {
            Flist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

class Calendar extends Component {
  render() {
    return(
      <Text>HI</Text>
    );
  }
}

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
};

class ScheduleBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTab: 'CourseSearch', searchedCourse: 'init', selectedCourse: 'init'}
    this.searchHandler = this.searchHandler.bind(this)
    this.handler = this.handler.bind(this)
  }

  handler(course) {
    this.setState({
      selectedTab: 'CourseSearch',
      selectedCourse: course,
      searchedCourse: 'init'
    });
  }

  searchHandler(course) {
    this.setState({
      searchedCourse: course,
      selectedCourse: 'init'
    })
  }

  asyncStore(course) {
    try {
      AsyncStorage.getItem('courses')
        .then(saved => {
          saved = saved == null ? [] : JSON.parse(saved)
          saved = Array.isArray(saved) ? saved : [saved]
          saved.push(course)
          return AsyncStorage.setItem('courses', JSON.stringify(saved))
        })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="menu"
            onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
            centerElement="Schedule Builder"
          />
          <TabNavigator tabBarStyle={{top:0}} tabBarShadowStyle={{bottom:0, top:null}} style={{marginBottom:-50}}>
              <TabNavigator.Item
                titleStyle={{opacity: 0}}
                renderIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#000000" />}
                renderSelectedIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#7a0019" />}
                selected={this.state.selectedTab === 'CourseSearch'}
                onPress={() => this.setState({ selectedTab: 'CourseSearch' })}>
                <CourseSearch searchedCourse={this.state.searchedCourse} searchHandler={this.searchHandler} asyncStore={this.asyncStore} selectedCourse={this.state.selectedCourse}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                renderIcon={() => <Icon style={{top: 5}} name="shopping-cart" size={30} color="#000000" />}
                renderSelectedIcon={() => <Icon style={{top: 5}} name="shopping-cart" size={30} color="#7a0019" />}
                selected={this.state.selectedTab === 'Scheduler'}
                onPress={() => this.setState({ selectedTab: 'Scheduler' })}>
                <Scheduler handler={this.handler}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                renderIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#000000" />}
                renderSelectedIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#7a0019" />}
                selected={this.state.selectedTab === 'Calendar'}
                onPress={() => this.setState({ selectedTab: 'Calendar' })}>
                <Calendar />
              </TabNavigator.Item>
            </TabNavigator>
        </Container>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
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
  topdegreestyle: {
    paddingTop: 50,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  topsearchstyle: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  topcoursestyle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  degreestyle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  flexcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  flextext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardcontent: {
    backgroundColor: '#d3d3d3',
    borderWidth: 2,
    borderColor: '#000000',
    margin: 5
  },
  cardcontenttext: {
    margin: 2
  }
});

export default ScheduleBuilder;
