import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from './Container';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Card, Button } from 'react-native-elements';

const list = [
  {
    name: 'Accounting',
    subtitle: 'Carlson School of Management',
    view: 'Accounting'
  },
  {
    name: 'Acting',
    subtitle: 'College of Liberal Arts',
    view: 'Acting'
  },
  {
    name: 'Aerospace Engineering',
    subtitle: 'College of Science and Engineering',
    view: 'Aerospace Engineering'
  },
  {
    name: 'Architecture',
    subtitle: 'College of Design',
    view: 'Architecture'
  },
  {
    name: 'Art',
    subtitle: 'College of Liberal Arts',
    view: 'Art'
  },
  {
    name: 'Astrophysics',
    subtitle: 'College of Science and Engineering',
    view: 'Astrophysics'
  },
  {
    name: 'Biochemistry',
    subtitle: 'College of Biological Sciences',
    view: 'Biochemistry'
  },
  {
    name: 'Biology',
    subtitle: 'College of Biological Sciences',
    view: 'Biology'
  },
  {
    name: 'Biomendical Engineering',
    subtitle: 'College of Science and Engineering',
    view: 'Biomedical Engineering'
  },
  {
    name: 'Business and Marketing Education',
    subtitle: 'College of Education and Human Development',
    view: 'Business and Marketing Education'
  },
  {
    name: 'Civil Engineering',
    subtitle: 'College of Science and Engineering',
    view: 'Civil Engineering'
  },
  {
    name: 'Computer Science',
    subtitle: 'College of Science and Engineering',
    view: 'Computer Science'
  },
]

class MajorSearch extends Component {

  render() {
    return(
      <ScrollView style={{paddingTop: 50}}>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.props.handler(item.view)}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const microeconomics = [
  {
    name: 'ECON 1101',
    subtitle: 'Principles of Microeconomics (4.0 cr)'
  },
  {
    name: 'APEC 1101',
    subtitle: 'Principles of Microeconomics (4.0 cr)'
  },
  {
    name: 'APEC 1101H',
    subtitle: 'Principles of Microeconomics (4.0 cr)'
  },
]
const macroeconomics = [
  {
    name: 'ECON 1102',
    subtitle: 'Principles of Macroeconomics (4.0 cr)'
  },
  {
    name: 'APEC 1102',
    subtitle: 'Principles of Macroeconomics (3.0 cr)'
  },
  {
    name: 'APEC 1102H',
    subtitle: 'Honors: Principles of Microeconomics (4.0 cr)'
  },
]
const calculus = [
  {
    name: 'MATH 1142',
    subtitle: 'Short Calculus (4.0 cr)'
  },
  {
    name: 'MATH 1271',
    subtitle: 'Calculus I (3.0 cr)'
  },
  {
    name: 'MATH 1571H',
    subtitle: 'Honors Calculus I (4.0 cr)'
  },
  {
    name: 'MATH 1371',
    subtitle: 'CSE Calculus I (4.0 cr)'
  },
]
const statistics = [
  {
    name: 'SCO 2550',
    subtitle: 'Business Statistics: Data Sources, Presentation. and Analysis (4.0 cr)'
  },
]
const accounting = [
  {
    name: 'ACCT 2050',
    subtitle: 'Introduction to Financial Reporting (4.0 cr)'
  },
  {
    name: 'SCO 2550',
    subtitle: 'Honors: Introduction to Financial Reporting (4.0 cr)'
  },
]

class DegreeRequirements extends Component {
  render() {
    switch (this.props.selectedDegree) {
      case 'Accounting':
        return (
          <ScrollView>
            <Text style={styles.topdegreestyle}>Accounting</Text>
            <Text style={styles.degreestyle}>Admission Requirements</Text>
            <Text style={styles.welcome}>Microeconomics (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                microeconomics.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Macroeconomics (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                macroeconomics.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Calculus (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                calculus.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Statistics</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                statistics.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Accounting (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                accounting.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
            <Text style={styles.degreestyle}>Lower Division Requirements</Text>
            <Text style={styles.welcome}>Management (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                accounting.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigator(item.name)}
                  />
                ))
              }
            </List>
          </ScrollView>
        );
      case 'init':
        return(
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Select a degree from the degree listings
            </Text>
          </ScrollView>
        );
      default:
        return (
          <ScrollView>
            <Text style={styles.topdegreestyle}>Degree Requirements Unavailable</Text>
          </ScrollView>
        )
    }
  }
}

class Courses extends Component {
  render() {
    switch (this.props.selectedCourse) {
      case 'ECON 1101':
        return(
          <ScrollView>
            <Text style={styles.topdegreestyle}>
              ECON 1101
            </Text>
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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], 9.05, 9.55, 'Wiley Hall 175')}
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
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Select a course from degree requirements
            </Text>
          </ScrollView>
        );
      default:
        return(
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Course Information Unavailable
            </Text>
          </ScrollView>
        );
    }
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

class ExploreDegrees extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTab: 'MajorSearch', selectedDegree: 'init', selectedCourse: 'init'}
    this.handler = this.handler.bind(this)
    this.navigator = this.navigator.bind(this)
    this.asyncStore = this.asyncStore.bind(this)
    this.asyncAddSchedule = this.asyncAddSchedule.bind(this)
  }

  handler(view) {
    this.setState({
      selectedTab: 'DegreeRequirements',
      selectedDegree: view
    });
  }

  navigator(course) {
    this.setState({
      selectedTab: 'Courses',
      selectedCourse: course
    })
  }

  asyncAddSchedule(title, day, start, end, location) {
    let courseinfo = {
       title: title, day: day, start: start, end: end, location: location
    }
    try {
      AsyncStorage.getItem('schedule')
        .then(schedule => {
          schedule = schedule == null ? [] : JSON.parse(schedule)
          schedule = Array.isArray(schedule) ? schedule : [schedule]
          schedule.push(courseinfo)
          return AsyncStorage.setItem('schedule', JSON.stringify(schedule))
        })
    } catch (error) {
      console.log(error);
    }
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
            centerElement="Explore Degrees"
          />
        <TabNavigator tabBarStyle={{top:0}} tabBarShadowStyle={{bottom:0, top:null}} style={{marginBottom:-50}}>
            <TabNavigator.Item
              titleStyle={{opacity: 0}}
              renderIcon={() => <Icon style={{top: 5}} name="list-alt" size={30} color="#000000" />}
              renderSelectedIcon={() => <Icon style={{top: 5}} name="list-alt" size={30} color="#7a0019" />}
              selected={this.state.selectedTab === 'MajorSearch'}
              onPress={() => this.setState({ selectedTab: 'MajorSearch' })}>
              <MajorSearch handler={this.handler}/>
            </TabNavigator.Item>
            <TabNavigator.Item
              renderIcon={() => <Icon style={{top: 5}} name="check-square-o" size={30} color="#000000" />}
              renderSelectedIcon={() => <Icon style={{top: 5}} name="check-square-o" size={30} color="#7a0019" />}
              selected={this.state.selectedTab === 'DegreeRequirements'}
              onPress={() => this.setState({ selectedTab: 'DegreeRequirements' })}>
              <DegreeRequirements navigator={this.navigator} selectedDegree={this.state.selectedDegree}/>
            </TabNavigator.Item>
            <TabNavigator.Item
              renderIcon={() => <Icon style={{top: 5}} name="book" size={30} color="#000000" />}
              renderSelectedIcon={() => <Icon style={{top: 5}} name="book" size={30} color="#7a0019" />}
              selected={this.state.selectedTab === 'Courses'}
              onPress={() => this.setState({ selectedTab: 'Courses' })}>
              <Courses selectedCourse={this.state.selectedCourse} asyncStore={this.asyncStore} asyncAddSchedule={this.asyncAddSchedule}/>
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

export default ExploreDegrees;
