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
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import * as Colors from '../themes/colors';
import { COLOR, ThemeProvider, Toolbar, BottomNavigation } from 'react-native-material-ui';
import Container from './Container';
import { Navigator, NativeModules } from 'react-native';
import { Card, SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';


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
  topsavedcourses: {
  },
  buttonContainer: {
    flex: 1,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexcontainer2: {
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
  },
  courselink: {
    textDecorationLine: 'underline',
    color: '#0645AD',
  }
});

class CourseSearch extends Component {
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
          <View style={styles.flexcontainer2}>
            <View style={styles.leftContainer}>
              <TouchableOpacity onPress={() =>  this.props.searchHandler(course)}>
                <Text style={styles.courselink}>{this.state.courses[i]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
              <Button
                title='X'
                backgroundColor='#ff0000'
                buttonStyle={{height: 25, borderRadius: 25, marginLeft: 0, marginRight: 0, marginBottom: 0, justifyContent: 'center'}}
                onPress={() => this.asyncDelete(course)}/>
            </View>
          </View>
        )
      }
    }

    switch (this.props.searchedCourse) {
      case 'accounting':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACCT 2050-001{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
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
                      onPress={() => this.props.asyncStore('ACCT 2050-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050-001', ['M','W'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'Accounting':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACCT 2050-001{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
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
                      onPress={() => this.props.asyncStore('ACCT 2050-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050-001', ['M','W'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ACCT':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACCT 2050-001{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
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
                      onPress={() => this.props.asyncStore('ACCT 2050-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050-001', ['M','W'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ACCT 2050-001':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACCT 2050-001{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
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
                      onPress={() => this.props.asyncStore('ACCT 2050-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050-001', ['M','W'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ACCT 2050':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACCT 2050-001{"\n"}Spring 2018{"\n"}M W 8:00 - 9:40
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
                      onPress={() => this.props.asyncStore('ACCT 2050-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050-001', ['M','W'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'SCO':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncStore('SCO 2550-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
        case 'Statistics':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

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
                        onPress={() => this.props.asyncStore('SCO 2550-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], '8.00', '9.40', 'Carlson School of Management L-110')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
        case 'statistics':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

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
                        onPress={() => this.props.asyncStore('SCO 2550-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], '8.00', '9.40', 'Carlson School of Management L-110')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
      case 'SCO 2550-001':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncStore('SCO 2550-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'SCO 2550':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncStore('SCO 2550-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('SCO 2550-001', ['Tu','Th'], '8.00', '9.40', 'Carlson School of Management L-110')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
        case 'calculus':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                        onPress={() => this.props.asyncStore('MATH 1142-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
        case 'Calculus':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                        onPress={() => this.props.asyncStore('MATH 1142-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
        case 'Math':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                        onPress={() => this.props.asyncStore('MATH 1142-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
        case 'math':
          return(
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                 <View>{courselist}</View>
                </Card>
              </View>

              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                        onPress={() => this.props.asyncStore('MATH 1142-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
      case 'MATH':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                      onPress={() => this.props.asyncStore('MATH 1142-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'MATH 1142-001':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                      onPress={() => this.props.asyncStore('MATH 1142-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'MATH 1142':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      MATH 1142-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
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
                      onPress={() => this.props.asyncStore('MATH 1142-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1142-001', ['M','W'], '18.00', '20.05', 'Lind Hall 302')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ECON 1102':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncStore('ECON 1102-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], '9.45', '11.00', 'Wiley Hall 175')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ECON 1102-001':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncStore('ECON 1102-001')}

                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], '9.45', '11.00', 'Wiley Hall 175')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ECON 1101-034':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
               <View>{courselist}</View>
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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-034', ['W'], '17.30', '18.20', 'Carlson School of Management L-126')}

                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
      case 'ECON 1101-033':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
                <View>{courselist}</View>
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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-033', ['M','W'], '16.00', '17.15', 'Blegen Hall 425')}

                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        );
      case 'ECON 1101-002':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
                <View>{courselist}</View>
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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-002', ['W'], '10.10', '11.00', 'Blegen Hall 415')}

                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        );
      case 'ECON 1101-001':
        return(
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
                <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], '9.05', '9.55', 'Wiley Hall 175')}

                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        );
      case 'ECON 1101':
        return (
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
                <View>{courselist}</View>
              </Card>
            </View>

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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], '9.05', '9.55', 'Wiley Hall 175')}

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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-002', ['W'], '10.10', '11.00', 'Blegen Hall 415')}

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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-033', ['M','W'], '16.00', '17.15', 'Blegen Hall 425')}

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
                      onPress={() => this.props.asyncAddSchedule('ECON 1101-034', ['W'], '17.30', '18.20', 'Carlson School of Management L-126')}

                    />
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        );
        case 'ECON':
          return (
            <ScrollView>
              <TextInput
                style={styles.topsearchstyle}
                placeholder="Course Search"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={() => this.props.searchHandler(this.state.text)}
              />
              <View style={styles.topsavedcourses}>
                <Card title="SAVED COURSES">
                  <View>{courselist}</View>
                </Card>
              </View>

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
                        onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], '9.05', '9.55', 'Wiley Hall 175')}

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
                        onPress={() => this.props.asyncAddSchedule('ECON 1101-002', ['W'], '10.10', '11.00', 'Blegen Hall 415')}

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
                        onPress={() => this.props.asyncAddSchedule('ECON 1101-033', ['M','W'], '16.00', '17.15', 'Blegen Hall 425')}

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
                        onPress={() => this.props.asyncAddSchedule('ECON 1101-034', ['W'], '17.30', '18.20', 'Carlson School of Management L-126')}

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
                        onPress={() => this.props.asyncStore('ECON 1102-001')}

                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], '9.45', '11.00', 'Wiley Hall 175')}

                      />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          );
          case 'Economics':
            return (
              <ScrollView>
                <TextInput
                  style={styles.topsearchstyle}
                  placeholder="Course Search"
                  onChangeText={(text) => this.setState({text})}
                  onSubmitEditing={() => this.props.searchHandler(this.state.text)}
                />
                <View style={styles.topsavedcourses}>
                  <Card title="SAVED COURSES">
                    <View>{courselist}</View>
                  </Card>
                </View>

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], '9.05', '9.55', 'Wiley Hall 175')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-002', ['W'], '10.10', '11.00', 'Blegen Hall 415')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-033', ['M','W'], '16.00', '17.15', 'Blegen Hall 425')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-034', ['W'], '17.30', '18.20', 'Carlson School of Management L-126')}

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
                          onPress={() => this.props.asyncStore('ECON 1102-001')}

                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <Button
                          raised
                          icon={{name: 'plus-square', type: 'font-awesome'}}
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Schedule'
                          onPress={() => this.props.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], '9.45', '11.00', 'Wiley Hall 175')}

                        />
                      </View>
                    </View>
                  </Card>
                </View>
              </ScrollView>
            );
          case 'economics':
            return (
              <ScrollView>
                <TextInput
                  style={styles.topsearchstyle}
                  placeholder="Course Search"
                  onChangeText={(text) => this.setState({text})}
                  onSubmitEditing={() => this.props.searchHandler(this.state.text)}
                />
                <View style={styles.topsavedcourses}>
                  <Card title="SAVED COURSES">
                    <View>{courselist}</View>
                  </Card>
                </View>

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-001', ['M','W', 'F'], '9.05', '9.55', 'Wiley Hall 175')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-002', ['W'], '10.10', '11.00', 'Blegen Hall 415')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-033', ['M','W'], '16.00', '17.15', 'Blegen Hall 425')}

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
                          onPress={() => this.props.asyncAddSchedule('ECON 1101-034', ['W'], '17.30', '18.20', 'Carlson School of Management L-126')}

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
                          onPress={() => this.props.asyncStore('ECON 1102-001')}

                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <Button
                          raised
                          icon={{name: 'plus-square', type: 'font-awesome'}}
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Schedule'
                          onPress={() => this.props.asyncAddSchedule('ECON 1102-001', ['Tu','Th'], '9.45', '11.00', 'Wiley Hall 175')}

                        />
                      </View>
                    </View>
                  </Card>
                </View>
              </ScrollView>
            );
      default:
        return (
          <ScrollView>
            <TextInput
              style={styles.topsearchstyle}
              placeholder="Course Search"
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={() => this.props.searchHandler(this.state.text)}
            />
            <View style={styles.topsavedcourses}>
              <Card title="SAVED COURSES">
                <View>{courselist}</View>
              </Card>
            </View>


          </ScrollView>
        );
    }
  }
}

class Schedules extends Component {
  render() {
    return(
      <Text>HI</Text>
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

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // selectedTab: 'CourseSearch',
      searchedCourse: 'init'
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.asyncAddSchedule = this.asyncAddSchedule.bind(this)

  }

  searchHandler(course) {
    this.setState({
      searchedCourse: course
    })
  }

  asyncStore(course) {
    ToastAndroid.show('Added ' + course + ' to dashboard', ToastAndroid.SHORT);
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

  asyncAddSchedule(title, day, start, end, location) {
    let courseinfo = {
       title: title, day: day, start: start, end: end, location: location
    }
    ToastAndroid.show('Added ' + title + ' to schedule', ToastAndroid.SHORT);
    try {
      AsyncStorage.getItem('schedule')
        .then(schedule => {
          schedule = schedule == null ? [] : JSON.parse(schedule)
          schedule = Array.isArray(schedule) ? schedule : [schedule]
          var found = false;
          for(var i = 0; i < schedule.length; i++) {
            if (schedule[i].title == title) {
              found = true;
              break;
            }
          }
          if (!found) {
            schedule.push(courseinfo);
          }
          return AsyncStorage.setItem('schedule', JSON.stringify(schedule))
        })
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="menu"
            onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
            centerElement="Dashboard"
          />
          <CourseSearch searchedCourse={this.state.searchedCourse} searchHandler={this.searchHandler} asyncStore={this.asyncStore} asyncAddSchedule={this.asyncAddSchedule}/>

        </Container>
      </ThemeProvider>
    );
  }
}
export default Dashboard;

//
// <TabNavigator tabBarStyle={{top:0}} tabBarShadowStyle={{bottom:0, top:null}} style={{marginBottom:-50}}>
//     <TabNavigator.Item
//       titleStyle={{opacity: 0}}
//       renderIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#000000" />}
//       renderSelectedIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#7a0019" />}
//       selected={this.state.selectedTab === 'CourseSearch'}
//       onPress={() => this.setState({ selectedTab: 'CourseSearch' })}>
//       <CourseSearch searchedCourse={this.state.searchedCourse} searchHandler={this.searchHandler} asyncStore={this.asyncStore}/>
//     </TabNavigator.Item>
//     <TabNavigator.Item
//       renderIcon={() => <Icon style={{top: 5}} name="shopping-cart" size={30} color="#000000" />}
//       renderSelectedIcon={() => <Icon style={{top: 5}} name="shopping-cart" size={30} color="#7a0019" />}
//       selected={this.state.selectedTab === 'Schedules'}
//       onPress={() => this.setState({ selectedTab: 'Schedules' })}>
//       <Schedules />
//     </TabNavigator.Item>
//     <TabNavigator.Item
//       renderIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#000000" />}
//       renderSelectedIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#7a0019" />}
//       selected={this.state.selectedTab === 'Calendar'}
//       onPress={() => this.setState({ selectedTab: 'Calendar' })}>
//       <Calendar />
//     </TabNavigator.Item>
//   </TabNavigator>
