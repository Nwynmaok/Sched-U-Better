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
  Modal,
  ToastAndroid
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
    ToastAndroid.show('Removed ' + course + ' from schedule', ToastAndroid.SHORT);
    try {
      AsyncStorage.getItem('schedule')
        .then(saved => {
          // console.log(saved);
          // console.log(course);
          saved = saved == null ? [] : JSON.parse(saved)
          saved = Array.isArray(saved) ? saved : [saved]
          // console.log(saved);
          for (let i = 0; i < saved.length; i++) {
            if (saved[i].title === course) {
              delete saved[i];
            }
          }
          saved = saved.filter(function (val) { return val !== null; });
          // console.log(saved);
          return AsyncStorage.setItem('schedule', JSON.stringify(saved))
        })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let selectedCourse = [];
    if (this.props.selectedCourse != 'init') {
      switch (this.props.selectedCourse) {
        case 'APEC 1101-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('APEC 1101-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
          case 'APEC 1101H-001':
              selectedCourse.push(

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
                          icon={{name: 'remove', type: 'font-awesome'}}
                          backgroundColor='#ff0000'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='REMOVE'
                          onPress={() => this.asyncDelete('APEC 1101H-001')}
                        />
                      </View>
                    </View>
                  </Card>
                </View>

            );
            break;
        case 'APEC 1102-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('APEC 1102-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'APEC 1102H-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('APEC 1102H-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'MATH 1271-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('MATH 1271-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'MATH 1571H-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('MATH 1571H-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'MATH 1371-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('MATH 1371-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'ACCT 2050H-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('ACCT 2050H-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'ACCT 2050-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('ACCT 2050-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'SCO 2550-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('SCO 2550-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'MATH 1142-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('MATH 1142-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
        case 'ECON 1102-001':
            selectedCourse.push(

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
                        icon={{name: 'remove', type: 'font-awesome'}}
                        backgroundColor='#ff0000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='REMOVE'
                        onPress={() => this.asyncDelete('ECON 1102-001')}
                      />
                    </View>
                  </View>
                </Card>
              </View>

          );
          break;
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
      case 'accounting':
        return(
          <ScrollView>
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
                      onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                      onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                      onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                      onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                      onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                      onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
        case 'ACCT 2050H-001':
          return(
            <ScrollView>
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
                        onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                          onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
                      />
                    </View>
                  </View>
                </Card>
              </View>
            </ScrollView>
          );
          case 'MATH 1371':
            return(
              <ScrollView>
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
                          onPress={() => this.asyncAddSchedule('MATH 1371-001', ['Tu','Th'], '9.05', '9.55', 'Fraser Hall 101')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                          onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                          onPress={() => this.asyncAddSchedule('MATH 1271-001', ['M','W'], '18.00', '20.05', 'Ford Hall B15')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                          onPress={() => this.asyncAddSchedule('APEC 1102-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                          onPress={() => this.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                        onPress={() => this.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
            case 'APEC':
              return (
                <ScrollView>
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
                            onPress={() => this.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>


                </ScrollView>
              );
              case 'honors':
                return (
                  <ScrollView>
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
                              onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                              onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                              onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                              onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                              onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                              onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                              onPress={() => this.asyncAddSchedule('MATH 1571H-001', ['Tu','Th'], '18.00', '20.05', 'Ford Hall B15')}
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
                              onPress={() => this.asyncAddSchedule('ACCT 2050H-001', ['Tu','Th'], '9.55', '11.35', 'Carlson School of Management 1-142')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102-001', ['M','W', 'F'], '10.40', '11.30', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1102H-001', ['Tu','Th'], '11.15', '12.30', 'Blegen Hall 120')}
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
            case 'Microeconomics':
              return (
                <ScrollView>
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
                            onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1101H-001', ['M','W'], '13.30', '14.45', 'Ruttan Hall B35')}
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
                            onPress={() => this.asyncAddSchedule('APEC 1101-001', ['Tu','Th'], '13.30', '14.45', 'Ruttan Hall B35')}
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
          <TextInput
            style={styles.topsearchstyle}
            placeholder="Course Search"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={() => this.props.searchHandler(this.state.text)}
          />
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
      for (let i = 0; i < this.state.schedule.length; i++) {
        if (this.state.schedule[i].day) {
          let days = this.state.schedule[i].day;
          // console.log(days.length);
          for (let j = 0; j < days.length; j++) {
            switch (days[j]) {
              case 'M':
                M.push(this.state.schedule[i]);
                break;
              case 'Tu':
                Tu.push(this.state.schedule[i]);
                break;
              case 'W':
                W.push(this.state.schedule[i]);
                break;
              case 'Th':
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
        var a = Number(first.start);
        var b = Number(second.start);
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Tusorted = Tu.sort(function(first, second) {
        var a = Number(first.start);
        var b = Number(second.start);
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Wsorted = W.sort(function(first, second) {
        var a = Number(first.start);
        var b = Number(second.start);
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Thsorted = Th.sort(function(first, second) {
        var a = Number(first.start);
        var b = Number(second.start);
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0
        }
      });
      let Fsorted = F.sort(function(first, second) {
        var a = Number(first.start);
        var b = Number(second.start);
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
        starttime = starttime.split('.');
        starthour = starttime[0];
        startmin = starttime[1];
        let endtime = Msorted[i].end;
        endtime = endtime.split('.');
        endhour = endtime[0];
        endmin = endtime[1];
        let title = Msorted[i].title;
        let location = Msorted[i].location
        if (i > 0 && (Number(Msorted[i].start) < Number(Msorted[i-1].end))) {
          let oldtitle = Msorted[i-1].title;
          let oldstart = Msorted[i-1].start;
          let oldend = Msorted[i-1].end;
          oldstart = oldstart.split('.');
          oldstarthour = oldstart[0];
          oldstartmin = oldstart[1];
          oldend = oldend.split('.');
          oldendhour = oldend[0];
          oldendmin = oldend[1];
          Mlist.pop();
          Mlist.push(
            {
              name: oldtitle,
              subtitle: 'TIME CONFLICT ' + oldstarthour + ":" + oldstartmin + "-" + oldendhour + ":" + oldendmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
          Mlist.push(
            {
              name: title,
              subtitle: 'TIME CONFLICT ' + starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
        } else {
          Mlist.push(
            {
              name: title,
              subtitle: starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location
            }
          );
        }
      }
      for (let i = 0; i < Tusorted.length; i++) {
        let starttime = Tusorted[i].start;
        starttime = starttime.split('.');
        starthour = starttime[0];
        startmin = starttime[1];
        let endtime = Tusorted[i].end;
        endtime = endtime.split('.');
        endhour = endtime[0];
        endmin = endtime[1];
        let title = Tusorted[i].title;
        let location = Tusorted[i].location
        if (i > 0 && (Number(Tusorted[i].start) < Number(Tusorted[i-1].end))) {
          let oldtitle = Tusorted[i-1].title;
          let oldstart = Tusorted[i-1].start;
          let oldend = Tusorted[i-1].end;
          oldstart = oldstart.split('.');
          oldstarthour = oldstart[0];
          oldstartmin = oldstart[1];
          oldend = oldend.split('.');
          oldendhour = oldend[0];
          oldendmin = oldend[1];
          Tulist.pop();
          Tulist.push(
            {
              name: oldtitle,
              subtitle: 'TIME CONFLICT ' + oldstarthour + ":" + oldstartmin + "-" + oldendhour + ":" + oldendmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
          Tulist.push(
            {
              name: title,
              subtitle: 'TIME CONFLICT ' + starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
        } else {
          Tulist.push(
            {
              name: title,
              subtitle: starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location
            }
          );
        }
      }
      for (let i = 0; i < Wsorted.length; i++) {
        let starttime = Wsorted[i].start;
        starttime = starttime.split('.');
        starthour = starttime[0];
        startmin = starttime[1];
        let endtime = Wsorted[i].end;
        endtime = endtime.split('.');
        endhour = endtime[0];
        endmin = endtime[1];
        let title = Wsorted[i].title;
        let location = Wsorted[i].location
        if (i > 0 && (Number(Wsorted[i].start) < Number(Wsorted[i-1].end))) {
          let oldtitle = Wsorted[i-1].title;
          let oldstart = Wsorted[i-1].start;
          let oldend = Wsorted[i-1].end;
          oldstart = oldstart.split('.');
          oldstarthour = oldstart[0];
          oldstartmin = oldstart[1];
          oldend = oldend.split('.');
          oldendhour = oldend[0];
          oldendmin = oldend[1];
          Wlist.pop();
          Wlist.push(
            {
              name: oldtitle,
              subtitle: 'TIME CONFLICT ' + oldstarthour + ":" + oldstartmin + "-" + oldendhour + ":" + oldendmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
          Wlist.push(
            {
              name: title,
              subtitle: 'TIME CONFLICT ' + starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
        } else {
          Wlist.push(
            {
              name: title,
              subtitle: starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location
            }
          );
        }
      }
      for (let i = 0; i < Thsorted.length; i++) {
        let starttime = Thsorted[i].start;
        starttime = starttime.split('.');
        starthour = starttime[0];
        startmin = starttime[1];
        let endtime = Thsorted[i].end;
        endtime = endtime.split('.');
        endhour = endtime[0];
        endmin = endtime[1];
        let title = Thsorted[i].title;
        let location = Thsorted[i].location
        if (i > 0 && (Number(Thsorted[i].start) < Number(Thsorted[i-1].end))) {
          let oldtitle = Thsorted[i-1].title;
          let oldstart = Thsorted[i-1].start;
          let oldend = Thsorted[i-1].end;
          oldstart = oldstart.split('.');
          oldstarthour = oldstart[0];
          oldstartmin = oldstart[1];
          oldend = oldend.split('.');
          oldendhour = oldend[0];
          oldendmin = oldend[1];
          Thlist.pop();
          Thlist.push(
            {
              name: oldtitle,
              subtitle: 'TIME CONFLICT ' + oldstarthour + ":" + oldstartmin + "-" + oldendhour + ":" + oldendmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
          Thlist.push(
            {
              name: title,
              subtitle: 'TIME CONFLICT ' + starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
        } else {
          Thlist.push(
            {
              name: title,
              subtitle: starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location
            }
          );
        }
      }
      for (let i = 0; i < Fsorted.length; i++) {
        let starttime = Fsorted[i].start;
        starttime = starttime.split('.');
        starthour = starttime[0];
        startmin = starttime[1];
        let endtime = Fsorted[i].end;
        endtime = endtime.split('.');
        endhour = endtime[0];
        endmin = endtime[1];        let title = Fsorted[i].title;
        let location = Fsorted[i].location
        if (i > 0 && (Number(Fsorted[i].start) < Number(Fsorted[i-1].end))) {
          let oldtitle = Fsorted[i-1].title;
          let oldstart = Fsorted[i-1].start;
          let oldend = Fsorted[i-1].end;
          oldstart = oldstart.split('.');
          oldstarthour = oldstart[0];
          oldstartmin = oldstart[1];
          oldend = oldend.split('.');
          oldendhour = oldend[0];
          oldendmin = oldend[1];
          Flist.pop();
          Flist.push(
            {
              name: oldtitle,
              subtitle: 'TIME CONFLICT ' + oldstarthour + ":" + oldstartmin + "-" + oldendhour + ":" + oldendmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
          Flist.push(
            {
              name: title,
              subtitle: 'TIME CONFLICT ' + starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location,
              icon: 'error',
              color: '#ff0000'
            }
          );
        } else {
          Flist.push(
            {
              name: title,
              subtitle: starthour + ":" + startmin + "-" + endhour + ":" + endmin + " " + location
            }
          );
        }
      }
    }

    return(
      <ScrollView >
        <Text style={{paddingTop: 50}}>Monday</Text>
        <List>
          {
            Mlist.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.subtitle}
                onPress={() => this.props.handler(item.name)}
                leftIcon={{name: item.icon, color: item.color}}
                titleStyle={{color: item.color}}
                subtitleStyle={{color: item.color}}
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
                onPress={() => this.props.handler(item.name)}
                leftIcon={{name: item.icon, color: item.color}}
                titleStyle={{color: item.color}}
                subtitleStyle={{color: item.color}}
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
                onPress={() => this.props.handler(item.name)}
                leftIcon={{name: item.icon, color: item.color}}
                titleStyle={{color: item.color}}
                subtitleStyle={{color: item.color}}
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
                onPress={() => this.props.handler(item.name)}
                leftIcon={{name: item.icon, color: item.color}}
                titleStyle={{color: item.color}}
                subtitleStyle={{color: item.color}}              />
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
                onPress={() => this.props.handler(item.name)}
                leftIcon={{name: item.icon, color: item.color}}
                titleStyle={{color: item.color}}
                subtitleStyle={{color: item.color}}              />
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
    this.state = { selectedTab: 'Scheduler', searchedCourse: 'init', selectedCourse: 'init'}
    this.searchHandler = this.searchHandler.bind(this)
    this.handler = this.handler.bind(this)
    this.asyncStore = this.asyncStore.bind(this)
    this.asyncAddSchedule = this.asyncAddSchedule.bind(this)

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
                renderIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#000000" />}
                renderSelectedIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#7a0019" />}
                selected={this.state.selectedTab === 'Scheduler'}
                onPress={() => this.setState({ selectedTab: 'Scheduler' })}>
                <Scheduler handler={this.handler}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                titleStyle={{opacity: 0}}
                renderIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#000000" />}
                renderSelectedIcon={() => <Icon style={{top: 5}} name="search" size={30} color="#7a0019" />}
                selected={this.state.selectedTab === 'CourseSearch'}
                onPress={() => this.setState({ selectedTab: 'CourseSearch' })}>
                <CourseSearch searchedCourse={this.state.searchedCourse} searchHandler={this.searchHandler} asyncStore={this.asyncStore} selectedCourse={this.state.selectedCourse} asyncAddSchedule={this.asyncAddSchedule}/>
              </TabNavigator.Item>
            </TabNavigator>
        </Container>
      </ThemeProvider>
    );
  }
}
// <TabNavigator.Item
//   renderIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#000000" />}
//   renderSelectedIcon={() => <Icon style={{top: 5}} name="calendar" size={30} color="#7a0019" />}
//   selected={this.state.selectedTab === 'Calendar'}
//   onPress={() => this.setState({ selectedTab: 'Calendar' })}>
//   <Calendar />
// </TabNavigator.Item>

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
    paddingTop: 50,
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
