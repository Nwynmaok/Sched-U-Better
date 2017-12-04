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
            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Carlson School of Management 1-142
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: Honors
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                      onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Carlson School of Management 1-142
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: Honors
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                      onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Carlson School of Management 1-142
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: Honors
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                      onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
                    />
                  </View>
                </View>
              </Card>
            </View>

          </ScrollView>
        );
        case 'ACCT 2050H':
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
                        ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Carlson School of Management 1-142
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                        onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

            </ScrollView>
          );
        case 'ACCT 2050H-001':
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
                        ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Carlson School of Management 1-142
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                        onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Fraser Hall 101
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                        onPress={() => this.props.asyncStore('MATH 1371-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors student and permission of University Honors Program
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                        onPress={() => this.props.asyncStore('MATH 1571H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                        onPress={() => this.props.asyncStore('MATH 1271-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Fraser Hall 101
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                        onPress={() => this.props.asyncStore('MATH 1371-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors student and permission of University Honors Program
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                        onPress={() => this.props.asyncStore('MATH 1571H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                        onPress={() => this.props.asyncStore('MATH 1271-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Fraser Hall 101
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                        onPress={() => this.props.asyncStore('MATH 1371-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors student and permission of University Honors Program
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                        onPress={() => this.props.asyncStore('MATH 1571H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                        onPress={() => this.props.asyncStore('MATH 1271-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
              <View>
                <Card>
                  <View style={styles.flextext}>
                    <View style={styles.leftContainer}>
                      <Text style={[styles.text, {textAlign: 'left'}]}>
                        MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Fraser Hall 101
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                        onPress={() => this.props.asyncStore('MATH 1371-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors student and permission of University Honors Program
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                        onPress={() => this.props.asyncStore('MATH 1571H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ford Hall B15
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                        onPress={() => this.props.asyncStore('MATH 1271-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
            <View>
              <Card>
                <View style={styles.flextext}>
                  <View style={styles.leftContainer}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                      MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Fraser Hall 101
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                      onPress={() => this.props.asyncStore('MATH 1371-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                      MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Ford Hall B15
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: Honors student and permission of University Honors Program
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                      onPress={() => this.props.asyncStore('MATH 1571H-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                      MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                    </Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                      Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                    </Text>
                  </View>
                </View>
                <View style={styles.cardcontent}>
                  <Text style={styles.cardcontenttext}>
                    Location: Ford Hall B15
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                  </Text>
                  <Text style={styles.cardcontenttext}>
                    Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                      onPress={() => this.props.asyncStore('MATH 1271-001')}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      raised
                      icon={{name: 'plus-square', type: 'font-awesome'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='Schedule'
                      onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
        case 'APEC 1101H':
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
                        APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ruttan Hall B35
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: Honors student, proficiency in high school algebra
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                        onPress={() => this.props.asyncStore('APEC 1101H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
                      />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          );
          case 'APEC 1101H-001':
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
                          APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                        </Text>
                      </View>
                      <View style={styles.rightContainer}>
                        <Text style={[styles.text, {textAlign: 'right'}]}>
                          Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardcontent}>
                      <Text style={styles.cardcontenttext}>
                        Location: Ruttan Hall B35
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Prereq: Honors student, proficiency in high school algebra
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                          onPress={() => this.props.asyncStore('APEC 1101H-001')}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <Button
                          raised
                          icon={{name: 'plus-square', type: 'font-awesome'}}
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Schedule'
                          onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
                        />
                      </View>
                    </View>
                  </Card>
                </View>
              </ScrollView>
            );
            case 'APEC 1101-001':
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
                            APEC 1101-001{"\n"}Spring 2018{"\n"}Tu Th 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
              case 'MATH 1271':
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
                              MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                            </Text>
                          </View>
                          <View style={styles.rightContainer}>
                            <Text style={[styles.text, {textAlign: 'right'}]}>
                              Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                            </Text>
                          </View>
                        </View>
                        <View style={styles.cardcontent}>
                          <Text style={styles.cardcontenttext}>
                            Location: Ford Hall B15
                          </Text>
                          <Text style={styles.cardcontenttext}>
                            Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                          </Text>
                          <Text style={styles.cardcontenttext}>
                            Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                              onPress={() => this.props.asyncStore('MATH 1271-001')}
                            />
                          </View>
                          <View style={styles.buttonContainer}>
                            <Button
                              raised
                              icon={{name: 'plus-square', type: 'font-awesome'}}
                              backgroundColor='#03A9F4'
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='Schedule'
                              onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
                            />
                          </View>
                        </View>
                      </Card>
                    </View>
                  </ScrollView>
                );
                case 'MATH 1571H':
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
                                MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                              </Text>
                            </View>
                            <View style={styles.rightContainer}>
                              <Text style={[styles.text, {textAlign: 'right'}]}>
                                Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                              </Text>
                            </View>
                          </View>
                          <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext}>
                              Location: Ford Hall B15
                            </Text>
                            <Text style={styles.cardcontenttext}>
                              Prereq: Honors student and permission of University Honors Program
                            </Text>
                            <Text style={styles.cardcontenttext}>
                              Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                                onPress={() => this.props.asyncStore('MATH 1571H-001')}
                              />
                            </View>
                            <View style={styles.buttonContainer}>
                              <Button
                                raised
                                icon={{name: 'plus-square', type: 'font-awesome'}}
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Schedule'
                                onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
                              />
                            </View>
                          </View>
                        </Card>
                      </View>
                    </ScrollView>
                  );
                  case 'MATH 1571H-001':
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
                                  MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                                </Text>
                              </View>
                              <View style={styles.rightContainer}>
                                <Text style={[styles.text, {textAlign: 'right'}]}>
                                  Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                                </Text>
                              </View>
                            </View>
                            <View style={styles.cardcontent}>
                              <Text style={styles.cardcontenttext}>
                                Location: Ford Hall B15
                              </Text>
                              <Text style={styles.cardcontenttext}>
                                Prereq: Honors student and permission of University Honors Program
                              </Text>
                              <Text style={styles.cardcontenttext}>
                                Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                                  onPress={() => this.props.asyncStore('MATH 1571H-001')}
                                />
                              </View>
                              <View style={styles.buttonContainer}>
                                <Button
                                  raised
                                  icon={{name: 'plus-square', type: 'font-awesome'}}
                                  backgroundColor='#03A9F4'
                                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                  title='Schedule'
                                  onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
                                />
                              </View>
                            </View>
                          </Card>
                        </View>
                      </ScrollView>
                    );
                    case 'MATH 1371H':
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
                                    MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                                  </Text>
                                </View>
                                <View style={styles.rightContainer}>
                                  <Text style={[styles.text, {textAlign: 'right'}]}>
                                    Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.cardcontent}>
                                <Text style={styles.cardcontenttext}>
                                  Location: Fraser Hall 101
                                </Text>
                                <Text style={styles.cardcontenttext}>
                                  Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                                </Text>
                                <Text style={styles.cardcontenttext}>
                                  Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                                    onPress={() => this.props.asyncStore('MATH 1371-001')}
                                  />
                                </View>
                                <View style={styles.buttonContainer}>
                                  <Button
                                    raised
                                    icon={{name: 'plus-square', type: 'font-awesome'}}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='Schedule'
                                    onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
                                  />
                                </View>
                              </View>
                            </Card>
                          </View>
                        </ScrollView>
                      );
                      case 'MATH 1371-001':
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
                                      MATH 1371-001{"\n"}Spring 2018{"\n"}T Th 9:05 - 9:55
                                    </Text>
                                  </View>
                                  <View style={styles.rightContainer}>
                                    <Text style={[styles.text, {textAlign: 'right'}]}>
                                      Lecture{"\n"}Professor TBD{"\n"}Capacity: 32/45
                                    </Text>
                                  </View>
                                </View>
                                <View style={styles.cardcontent}>
                                  <Text style={styles.cardcontenttext}>
                                    Location: Fraser Hall 101
                                  </Text>
                                  <Text style={styles.cardcontenttext}>
                                    Prereq: CSE or pre-bioprod concurrent registration is required (or allowed) in biosys engn (PRE), background in [precalculus, geometry, visualization of functions/graphs], instr consent; familiarity with graphing calculators recommended
                                  </Text>
                                  <Text style={styles.cardcontenttext}>
                                    Differentiation of single-variable functions, basics of integration of single-variable functions. Applications: max-min, related rates, area, curve-sketching. Use of calculator, cooperative learning.
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
                                      onPress={() => this.props.asyncStore('MATH 1371-001')}
                                    />
                                  </View>
                                  <View style={styles.buttonContainer}>
                                    <Button
                                      raised
                                      icon={{name: 'plus-square', type: 'font-awesome'}}
                                      backgroundColor='#03A9F4'
                                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                      title='Schedule'
                                      onPress={() => this.props.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
                                    />
                                  </View>
                                </View>
                              </Card>
                            </View>
                          </ScrollView>
                        );
                case 'MATH 1271-001':
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
                                MATH 1271-001{"\n"}Spring 2018{"\n"}M W 6:00 - 8:05
                              </Text>
                            </View>
                            <View style={styles.rightContainer}>
                              <Text style={[styles.text, {textAlign: 'right'}]}>
                                Lecture{"\n"}Professor TBD{"\n"}Capacity: 14/28
                              </Text>
                            </View>
                          </View>
                          <View style={styles.cardcontent}>
                            <Text style={styles.cardcontenttext}>
                              Location: Ford Hall B15
                            </Text>
                            <Text style={styles.cardcontenttext}>
                              Prereq: 4 yrs high school math including trig or satisfactory score on placement test or grade of at least C- in [1151 or 1155]
                            </Text>
                            <Text style={styles.cardcontenttext}>
                              Differential calculus of functions of a single variable, including polynomial, rational, exponential, and trig functions. Applications, including optimization and related rates problems. Single variable integral calculus, using anti-derivatives and simple substitution. Applications may include area, volume, work problems.
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
                                onPress={() => this.props.asyncStore('MATH 1271-001')}
                              />
                            </View>
                            <View style={styles.buttonContainer}>
                              <Button
                                raised
                                icon={{name: 'plus-square', type: 'font-awesome'}}
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Schedule'
                                onPress={() => this.props.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
                              />
                            </View>
                          </View>
                        </Card>
                      </View>
                    </ScrollView>
                  );
              case 'APEC 1101':
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
                              APEC 1101-001{"\n"}Spring 2018{"\n"}Tu Th 1:30 - 2:45
                            </Text>
                          </View>
                          <View style={styles.rightContainer}>
                            <Text style={[styles.text, {textAlign: 'right'}]}>
                              Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                            </Text>
                          </View>
                        </View>
                        <View style={styles.cardcontent}>
                          <Text style={styles.cardcontenttext}>
                            Location: Ruttan Hall B35
                          </Text>
                          <Text style={styles.cardcontenttext}>
                            Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                          </Text>
                          <Text style={styles.cardcontenttext}>
                            Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                              onPress={() => this.props.asyncStore('APEC 1101-001')}
                            />
                          </View>
                          <View style={styles.buttonContainer}>
                            <Button
                              raised
                              icon={{name: 'plus-square', type: 'font-awesome'}}
                              backgroundColor='#03A9F4'
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='Schedule'
                              onPress={() => this.props.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
                            />
                          </View>
                        </View>
                      </Card>
                    </View>
                  </ScrollView>
                );
        case 'APEC 1102H-001':
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
                        APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Blegen Hall 120
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                        onPress={() => this.props.asyncStore('APEC 1102H-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
                      />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          );
          case 'APEC 1102H':
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
                          APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                        </Text>
                      </View>
                      <View style={styles.rightContainer}>
                        <Text style={[styles.text, {textAlign: 'right'}]}>
                          Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardcontent}>
                      <Text style={styles.cardcontenttext}>
                        Location: Blegen Hall 120
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                          onPress={() => this.props.asyncStore('APEC 1102H-001')}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <Button
                          raised
                          icon={{name: 'plus-square', type: 'font-awesome'}}
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Schedule'
                          onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
                        />
                      </View>
                    </View>
                  </Card>
                </View>
              </ScrollView>
            );
        case 'APEC 1102':
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
                        APEC 1102-001{"\n"}Spring 2018{"\n"}M W F 10:40 - 11:30
                      </Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={[styles.text, {textAlign: 'right'}]}>
                        Lecture{"\n"}Gary Cooper{"\n"}Capacity: 29/80
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardcontent}>
                    <Text style={styles.cardcontenttext}>
                      Location: Ruttan Hall B35
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Prereq: APEC 1101 or ECON 1101
                    </Text>
                    <Text style={styles.cardcontenttext}>
                      Unemployment/inflation, measures of national income, macro models, fiscal policy/problems. Taxes and the national debt. Money/banking, monetary policy/problems. Poverty and income distribution. International trade and exchange rates. Economic growth/development.
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
                        onPress={() => this.props.asyncStore('APEC 1102-001')}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        raised
                        icon={{name: 'plus-square', type: 'font-awesome'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Schedule'
                        onPress={() => this.props.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
                      />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          );
          case 'APEC 1102-001':
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
                          APEC 1102-001{"\n"}Spring 2018{"\n"}M W F 10:40 - 11:30
                        </Text>
                      </View>
                      <View style={styles.rightContainer}>
                        <Text style={[styles.text, {textAlign: 'right'}]}>
                          Lecture{"\n"}Gary Cooper{"\n"}Capacity: 29/80
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardcontent}>
                      <Text style={styles.cardcontenttext}>
                        Location: Ruttan Hall B35
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Prereq: APEC 1101 or ECON 1101
                      </Text>
                      <Text style={styles.cardcontenttext}>
                        Unemployment/inflation, measures of national income, macro models, fiscal policy/problems. Taxes and the national debt. Money/banking, monetary policy/problems. Poverty and income distribution. International trade and exchange rates. Economic growth/development.
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
                          onPress={() => this.props.asyncStore('APEC 1102-001')}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <Button
                          raised
                          icon={{name: 'plus-square', type: 'font-awesome'}}
                          backgroundColor='#03A9F4'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Schedule'
                          onPress={() => this.props.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
            case 'microeconomics':
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
                            APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student, proficiency in high school algebra
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1101-001{"\n"}Spring 2018{"\n"}Tu Th 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'Microeconomics':
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
                            APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student, proficiency in high school algebra
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1101-001{"\n"}Spring 2018{"\n"}Tu Th 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'macroeconomics':
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
                  <View>
                    <Card>
                      <View style={styles.flextext}>
                        <View style={styles.leftContainer}>
                          <Text style={[styles.text, {textAlign: 'left'}]}>
                            APEC 1102-001{"\n"}Spring 2018{"\n"}M W F 10:40 - 11:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Gary Cooper{"\n"}Capacity: 29/80
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or ECON 1101
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Unemployment/inflation, measures of national income, macro models, fiscal policy/problems. Taxes and the national debt. Money/banking, monetary policy/problems. Poverty and income distribution. International trade and exchange rates. Economic growth/development.
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
                            onPress={() => this.props.asyncStore('APEC 1102-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Blegen Hall 120
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                            onPress={() => this.props.asyncStore('APEC 1102H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'Macroeconomics':
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
                  <View>
                    <Card>
                      <View style={styles.flextext}>
                        <View style={styles.leftContainer}>
                          <Text style={[styles.text, {textAlign: 'left'}]}>
                            APEC 1102-001{"\n"}Spring 2018{"\n"}M W F 10:40 - 11:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Gary Cooper{"\n"}Capacity: 29/80
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or ECON 1101
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Unemployment/inflation, measures of national income, macro models, fiscal policy/problems. Taxes and the national debt. Money/banking, monetary policy/problems. Poverty and income distribution. International trade and exchange rates. Economic growth/development.
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
                            onPress={() => this.props.asyncStore('APEC 1102-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Blegen Hall 120
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                            onPress={() => this.props.asyncStore('APEC 1102H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'Honors':
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
                            APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student, proficiency in high school algebra
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Blegen Hall 120
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                            onPress={() => this.props.asyncStore('APEC 1102H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                            MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ford Hall B15
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student and permission of University Honors Program
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                            onPress={() => this.props.asyncStore('MATH 1571H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                            ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Carlson School of Management 1-142
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                            onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'honors':
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
                            APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student, proficiency in high school algebra
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Blegen Hall 120
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                            onPress={() => this.props.asyncStore('APEC 1102H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                            MATH 1571H-001{"\n"}Spring 2018{"\n"}T Th 6:00 - 8:05
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Professor TBD{"\n"}Capacity: 12/28
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ford Hall B15
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student and permission of University Honors Program
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Differential/integral calculus of functions of a single variable. Emphasizes hard problem-solving rather than theory.
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
                            onPress={() => this.props.asyncStore('MATH 1571H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                            ACT 2050H-001{"\n"}Spring 2018{"\n"}T Th 9:55 - 11:35
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Cyrus Aghamolla{"\n"}Capacity: 22/48
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Carlson School of Management 1-142
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Introduction to financial accounting for U.S. organizations. Reading financial statements.
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
                            onPress={() => this.props.asyncStore('ACCT 2050H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                </ScrollView>
              );
            case 'APEC':
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
                            APEC 1101-001{"\n"}Spring 2018{"\n"}Tu Th 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1101H-001{"\n"}Spring 2018{"\n"}M W 1:30 - 2:45
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Donald Liu{"\n"}Capacity: 68/120
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: Honors student, proficiency in high school algebra
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Economic behavior of consumers/firms in domestic/international markets. Demand, supply, competition. Efficiency, Invisible Hand. Monopoly, imperfect competition. Externalities, property rights. Economics of public policy in environment/health/safety. Public goods, tax policy.
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Notes: First day of class attendance policy: You must attend the first class meeting and the first discussion session, unless you obtain approval for your intended absence before the first meeting. Without this prior approval, you may lose your place in class to another student.
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
                            onPress={() => this.props.asyncStore('APEC 1101H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            APEC 1102-001{"\n"}Spring 2018{"\n"}M W F 10:40 - 11:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Gary Cooper{"\n"}Capacity: 29/80
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Ruttan Hall B35
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or ECON 1101
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Unemployment/inflation, measures of national income, macro models, fiscal policy/problems. Taxes and the national debt. Money/banking, monetary policy/problems. Poverty and income distribution. International trade and exchange rates. Economic growth/development.
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
                            onPress={() => this.props.asyncStore('APEC 1102-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            APEC 1102H-001{"\n"}Spring 2018{"\n"}Tu Th 11:15 - 12:30
                          </Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={[styles.text, {textAlign: 'right'}]}>
                            Lecture{"\n"}Fahima Aziz{"\n"}Capacity: 12/30
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardcontent}>
                        <Text style={styles.cardcontenttext}>
                          Location: Blegen Hall 120
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Prereq: APEC 1101 or APEC 1101H or ECON 1101 or ECON 1101H, honors
                        </Text>
                        <Text style={styles.cardcontenttext}>
                          Measuring/describing an economy. Macroeconomic phenomena, including long-term growth, inflation, unemployment, and recessions. International trade and capital flows. Simple macroeconomic models. Financial markets. Monetary policy. Taxation, government expenditure, and debt as macroeconomic policy. Poverty and income distribution.
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
                            onPress={() => this.props.asyncStore('APEC 1102H-001')}
                          />
                        </View>
                        <View style={styles.buttonContainer}>
                          <Button
                            raised
                            icon={{name: 'plus-square', type: 'font-awesome'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Schedule'
                            onPress={() => this.props.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
