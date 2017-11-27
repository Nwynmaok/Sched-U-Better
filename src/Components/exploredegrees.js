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
import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Card, Button } from 'react-native-elements';

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
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="menu"
            onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
            centerElement="Explore Degrees"
          />
      <ScrollView >
        <List containerStyle={{marginTop: 0}}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.props.navigation.navigate('DegreeRequirements', { selectedDegree: item.view })}
              />
            ))
          }
        </List>
      </ScrollView>
    </Container>
  </ThemeProvider>
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
    name: 'ACCT 2050H',
    subtitle: 'Honors: Introduction to Financial Reporting (4.0 cr)'
  },
]
const management = [
  {
    name: 'MGMT 1001',
    subtitle: 'Contemporary Management (3.0 cr)'
  },
  {
    name: 'MGMT 1001H',
    subtitle: 'Honors: Contemporary Management (3.0 cr)'
  },
  {
    name: 'MGMT 3001',
    subtitle: 'Fundamentals of Management (3.0 cr)'
  },
]
const corprespo = [
  {
    name: 'MGMT 1005',
    subtitle: 'Corporate Responsibility and Ethics (3.0 cr)'
  },
  {
    name: 'MGMT 1005H',
    subtitle: 'Corporate Responsibility and Ethics (3.0 cr)'
  },
]
const psychology = [
  {
    name: 'PSY 1001',
    subtitle: 'Introduction to Psychology (4.0 cr)'
  },
  {
    name: 'PSY 1001H',
    subtitle: 'Honors Introduction to Psychology (4.0 cr)'
  },
]
const careerskills = [
  {
    name: 'BA 3000',
    subtitle: 'Career Skills (1.0 cr)'
  },
]
const Immersion = [
  {
    name: 'MKTG 3001',
    subtitle: 'Principles of Marketing (3.0 cr)'
  },
  {
    name: 'SCO 3001',
    subtitle: 'Introduction to Operations Management (3.0 cr)'
  },
  {
    name: 'MGMT 3004',
    subtitle: 'Business Strategy (3.0 cr)'
  }
]
const Immersionoptional = [
  {
    name: 'FINA 3001',
    subtitle: 'Finance Fundamentals (3.0 cr)'
  },
  {
    name: 'FINA 3001H',
    subtitle: 'Honors: Finance Fundamentals (3.0 cr)'
  }
]
const InfoSys = [
  {
    name: 'IDSC 3001',
    subtitle: 'Introduction to Information Technology in Business (3.0 cr)'
  },
  {
    name: 'IDSC 3001H',
    subtitle: 'Honors: Introduction to Information Technology in Business (3.0 cr)'
  },
]
const HumanResources = [
  {
    name: 'HRIR 3021',
    subtitle: 'Human Resource Management and Industrial Relations (3.0 cr)'
  },
  {
    name: 'HRIR 3021H',
    subtitle: 'Honors: Human Resource Management and Industrial Relations (3.0 cr)'
  },
  {
    name: 'IBUS 3021',
    subtitle: 'Human Resources Management in Austrailia (4.0 cr)'
  },
]
const managerialaccount = [
  {
    name: 'ACCT 3001',
    subtitle: 'Introduction to Management Accounting (3.0 cr)'
  },
  {
    name: 'IBUS 3002',
    subtitle: 'Managerial Accounting in Argentina and Chile (4.0 cr)'
  },
]
const businesscomm = [
  {
    name: 'MGMT 3033W',
    subtitle: 'Business Communication (3.0 cr)'
  },
  {
    name: 'IBUS 3033W',
    subtitle: 'Business Communication in Spain (4.0 cr)'
  },
]
const MajorCourses = [
  {
    name: 'ACCT 5101',
    subtitle: 'Intermediate Accounting I (4.0 cr)'
  },
  {
    name: 'ACCT 5102',
    subtitle: 'Intermediate Accounting II (4.0 cr)'
  },
  {
    name: 'ACCT 5125W',
    subtitle: 'Auditing Principles and Procedures (4.0 cr)'
  },
  {
    name: 'ACCt 5135',
    subtitle: 'Fundamentals of Federal Income Tax (4.0 cr)'
  },
  {
    name: 'ACCT 5201',
    subtitle: 'Intermediate Management Accounting (2.0 cr)'
  },
  {
    name: 'BLAW 3058',
    subtitle: 'The Law of Contracts and Agency (4.0 cr)'
  },
  {
    name: 'ACCT 3150',
    subtitle: 'Role of the Accountant in Today\'s Finance Function (1.0 cr)'
  },
]
const Electives = [
  {
    name: 'ACCT 5160',
    subtitle: 'Financial Statement Analysis (2.0 cr)'
  },
  {
    name: 'ACCT 5180',
    subtitle: 'Consolidations and Advanced Reporting (2.0 cr)'
  },
  {
    name: 'ACCT 5236',
    subtitle: 'Introduction to Taxation of Business (2.0 cr)'
  },
  {
    name: 'ACCT 5310',
    subtitle: 'International Accounting (2.0 cr)'
  },
  {
    name: 'IDSC 4411',
    subtitle: 'Information Technology Governance and Assurance (2.0 cr)'
  },
  {
    name: 'ACCT 5126',
    subtitle: 'Internal Auditing (4.0 cr)'
  },
]

class DegreeRequirements extends Component {
  render() {
    switch (this.props.navigation.state.params.selectedDegree) {
      case 'Accounting':
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Explore Degrees"
              />
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
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
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
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
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
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
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
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
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
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.degreestyle}>Lower Division Requirements</Text>
            <Text style={styles.welcome}>Management (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                management.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Corporate Responsibility & Ethics (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                corprespo.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Psychology (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                psychology.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Career Skills</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                careerskills.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Immersion Core</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                Immersion.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Immersion Core (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                Immersionoptional.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Information Systems (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                InfoSys.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Human Resources (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                HumanResources.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Managerial Accounting (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                managerialaccount.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Business Communications (Pick 1)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                businesscomm.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.degreestyle}>Major Courses</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                MajorCourses.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
            <Text style={styles.welcome}>Electives (take 4 or more credits of the following)</Text>
            <List containerStyle={{marginTop: 0}}>
              {
                Electives.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    subtitle={item.subtitle}
                    onPress={() => this.props.navigation.navigate('Courses', { selectedCourse: item.name })}
                  />
                ))
              }
            </List>
          </ScrollView>
        </Container>
      </ThemeProvider>
        );
      case 'init':
        return(
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Explore Degrees"
              />
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Select a degree from the degree listings
            </Text>
          </ScrollView>
        </Container>
      </ThemeProvider>
        );
      default:
        return (
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Explore Degrees"
              />
          <ScrollView>
            <Text style={styles.topdegreestyle}>Degree Requirements Unavailable</Text>
          </ScrollView>
        </Container>
      </ThemeProvider>
        )
    }
  }
}

class Courses extends Component {
  constructor(props) {
    super(props)
    this.asyncStore = this.asyncStore.bind(this)
    this.asyncAddSchedule = this.asyncAddSchedule.bind(this)
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
    switch (this.props.navigation.state.params.selectedCourse) {
      case 'ACCT 2050':
      return(
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Explore Degrees"
            />
        <ScrollView>
          <Text style={styles.topdegreestyle}>
            ACCT 2050
          </Text>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ACCT 2050{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Lecture{"\n"}Kendell Poch{"\n"}Capacity: 45/120
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Location: Carlson School of Management L-110
                </Text>
                <Text style={styles.cardcontenttext}>
                  Prereq: Soph
                </Text>
                <Text style={styles.cardcontenttext}>
                  Introduction to financial accounting for U.S. organizations. Reading financial statements.
                </Text>
                <Text style={styles.cardcontenttext}>
                  Notes: non-CSOM Students only
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
                    onPress={() => this.asyncStore('ACCT 2050-001')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                    onPress={() => this.asyncAddSchedule('ACCT 2050-001', ['M','W'], 8.00, 9.40, 'Carlson School of Management L-110')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </Container>
    </ThemeProvider>
      );
      case 'SCO 2550':
      return(
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Explore Degrees"
            />
        <ScrollView>
          <Text style={styles.topdegreestyle}>
            SCO 2550
          </Text>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    SCO 2550-001{"\n"}Spring 2018{"\n"}Tu Th 8:00 - 9:40
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Lecture{"\n"}Bhupinder Juneja{"\n"}Capacity: 13/120
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Location: Carlson School of Management L-110
                </Text>
                <Text style={styles.cardcontenttext}>
                  Prereq: [Math 1031 or equiv], at least 30 cr
                </Text>
                <Text style={styles.cardcontenttext}>
                  Data analysis, basic inferential procedures, statistical sampling/design, regression/time series analysis. How statistical thinking contributes to improved decision making.
                </Text>
                <Text style={styles.cardcontenttext}>
                  Notes: non-CSOM Students only
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
                    onPress={() => this.asyncStore('SCO 2550-001')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                    onPress={() => this.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], 8.00, 9.40, 'Carlson School of Management L-110')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </Container>
    </ThemeProvider>
      );
      case 'MATH 1142':
      return(
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Explore Degrees"
            />
        <ScrollView>
          <Text style={styles.topdegreestyle}>
            MATH 1142
          </Text>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    MATH 1142-001{"\n"}Spring 2018{"\n"}M W 18:00 - 20:05
                  </Text>
                </View>
                <View style={styles.rightContainer}>
                  <Text style={[styles.text, {textAlign: 'right'}]}>
                    Lecture{"\n"}Professor TBD{"\n"}Capacity: 6/28
                  </Text>
                </View>
              </View>
              <View style={styles.cardcontent}>
                <Text style={styles.cardcontenttext}>
                  Location: Lind Hall 302
                </Text>
                <Text style={styles.cardcontenttext}>
                  Prereq: [Satisfactory score on placement test or grade of at least C- in [1031 or 1051]
                </Text>
                <Text style={styles.cardcontenttext}>
                  A streamlined one-semester tour of differential and integral calculus in one variable, and differential calculus in two variables. No trigonometry/does not have the same depth as MATH 1271-1272. Formulas and their interpretation and use in applications.
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
                    onPress={() => this.asyncStore('MATH 1142-001')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                    onPress={() => this.asyncAddSchedule('MATH 1142-001', ['M','W'], 18.00, 20.05, 'Lind Hall 302')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </Container>
    </ThemeProvider>
      );
      case 'ECON 1102':
      return(
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Explore Degrees"
            />
        <ScrollView>
          <Text style={styles.topdegreestyle}>
            ECON 1102
          </Text>
          <View>
            <Card>
              <View style={styles.flextext}>
                <View style={styles.leftContainer}>
                  <Text style={[styles.text, {textAlign: 'left'}]}>
                    ECON 1102-001{"\n"}Spring 2018{"\n"}T Th 9:45 - 11:00
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
                  Prereq: [1101 or equiv], knowledge of plane geometry and advanced algebra
                </Text>
                <Text style={styles.cardcontenttext}>
                  Aggregate consumption, saving, investment, and national income. Role of money, banking, and business cycles in domestic and world economy. International trade, growth, and development. U.S. economy and its role in the world economy. International interdependencies among nations.
                </Text>
                <Text style={styles.cardcontenttext}>
                  Notes: This course has evening midterms. (2 hr evening final) The common final includes ALL sections of 1102 -- of course excluding IDL.
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
                    onPress={() => this.asyncStore('ECON 1102-001')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    raised
                    icon={{name: 'plus-square', type: 'font-awesome'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Schedule'
                    onPress={() => this.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], 9.45, 11.00, 'Wiley Hall 175')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </Container>
    </ThemeProvider>
      );
      case 'ECON 1101':
        return(
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Explore Degrees"
              />
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
                      onPress={() => this.asyncStore('ECON 1101-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], 9.05, 9.55, 'Wiley Hall 175')}
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
                      onPress={() => this.asyncStore('ECON 1101-002')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.asyncAddSchedule('ECON 1101-002', ['W'], 10.10, 11.00, 'Blegen Hall 415')}
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
                      onPress={() => this.asyncStore('ECON 1101-033')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.asyncAddSchedule('ECON 1101-033', ['M','W'], 16.00, 17.15, 'Blegen Hall 425')}

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
                      onPress={() => this.asyncStore('ECON 1101-034')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.asyncAddSchedule('ECON 1101-034', ['W'], 17.30, 18.20, 'Carlson School of Management L-126')}

                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        </Container>
      </ThemeProvider>
        );
      case 'init':
        return (
        <ThemeProvider uiTheme={uiTheme}>
          <Container>
            <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
            <Toolbar
              leftElement="menu"
              onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
              centerElement="Explore Degrees"
            />
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Select a course from degree requirements
            </Text>
          </ScrollView>
        </Container>
      </ThemeProvider>
        );
      default:
        return(
          <ThemeProvider uiTheme={uiTheme}>
            <Container>
              <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
              <Toolbar
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                centerElement="Explore Degrees"
              />
          <ScrollView>
            <Text style={styles.topdegreestyle}>
            Course Information Unavailable
            </Text>
          </ScrollView>
        </Container>
      </ThemeProvider>
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

const degreestack = StackNavigator({
    MajorSearch: { screen: MajorSearch },
    DegreeRequirements: { screen: DegreeRequirements },
    Courses: { screen: Courses },
  },
  {
    headerMode: 'none',
    // cardStyle: { paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight },
  }
);

export default degreestack;




// class ExploreDegrees extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { selectedTab: 'MajorSearch', selectedDegree: 'init', selectedCourse: 'init'}
//     this.handler = this.handler.bind(this)
//     this.navigator = this.navigator.bind(this)
//     this.asyncStore = this.asyncStore.bind(this)
//     this.asyncAddSchedule = this.asyncAddSchedule.bind(this)
//   }
//
//   handler(view) {
//     this.setState({
//       selectedTab: 'DegreeRequirements',
//       selectedDegree: view
//     });
//   }
//
//   navigator(course) {
//     this.setState({
//       selectedTab: 'Courses',
//       selectedCourse: course
//     })
//   }
//
//   asyncAddSchedule(title, day, start, end, location) {
//     let courseinfo = {
//        title: title, day: day, start: start, end: end, location: location
//     }
//     try {
//       AsyncStorage.getItem('schedule')
//         .then(schedule => {
//           schedule = schedule == null ? [] : JSON.parse(schedule)
//           schedule = Array.isArray(schedule) ? schedule : [schedule]
//           schedule.push(courseinfo)
//           return AsyncStorage.setItem('schedule', JSON.stringify(schedule))
//         })
//     } catch (error) {
//       console.log(error);
//     }
//   }
//
//   asyncStore(course) {
//     try {
//       AsyncStorage.getItem('courses')
//         .then(saved => {
//           saved = saved == null ? [] : JSON.parse(saved)
//           saved = Array.isArray(saved) ? saved : [saved]
//           saved.push(course)
//           return AsyncStorage.setItem('courses', JSON.stringify(saved))
//         })
//     } catch (error) {
//       console.log(error);
//     }
//   }
//
//   render() {
//     return (
//       <ThemeProvider uiTheme={uiTheme}>
//         <Container>
//           <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
//           <Toolbar
//             leftElement="menu"
//             onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
//             centerElement="Explore Degrees"
//           />
//         <TabNavigator tabBarStyle={{top:0}} tabBarShadowStyle={{bottom:0, top:null}} style={{marginBottom:-50}}>
//             <TabNavigator.Item
//               titleStyle={{opacity: 0}}
//               renderIcon={() => <Icon style={{top: 5}} name="list-alt" size={30} color="#000000" />}
//               renderSelectedIcon={() => <Icon style={{top: 5}} name="list-alt" size={30} color="#7a0019" />}
//               selected={this.state.selectedTab === 'MajorSearch'}
//               onPress={() => this.setState({ selectedTab: 'MajorSearch' })}>
//               <MajorSearch handler={this.handler}/>
//             </TabNavigator.Item>
//             <TabNavigator.Item
//               renderIcon={() => <Icon style={{top: 5}} name="check-square-o" size={30} color="#000000" />}
//               renderSelectedIcon={() => <Icon style={{top: 5}} name="check-square-o" size={30} color="#7a0019" />}
//               selected={this.state.selectedTab === 'DegreeRequirements'}
//               onPress={() => this.setState({ selectedTab: 'DegreeRequirements' })}>
//               <DegreeRequirements navigator={this.navigator} selectedDegree={this.state.selectedDegree}/>
//             </TabNavigator.Item>
//             <TabNavigator.Item
//               renderIcon={() => <Icon style={{top: 5}} name="book" size={30} color="#000000" />}
//               renderSelectedIcon={() => <Icon style={{top: 5}} name="book" size={30} color="#7a0019" />}
//               selected={this.state.selectedTab === 'Courses'}
//               onPress={() => this.setState({ selectedTab: 'Courses' })}>
//               <Courses selectedCourse={this.state.selectedCourse} asyncStore={this.asyncStore} asyncAddSchedule={this.asyncAddSchedule}/>
//             </TabNavigator.Item>
//           </TabNavigator>
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }
