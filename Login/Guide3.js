//Third screen of guide sequence
//Survey explanation

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

var radio_props = [
  {label: '0', value: 0},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
];
export default class Guide3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
        <Text style={styles.loginText}>
          To start off you will take a survey, the survey operates like this:
        </Text>
        <Text style={styles.loginText}>
          Rate the level of agreement with each statement by selecting a value
          from 0 to 4
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            this.setState({value: value});
          }}
          formHorizontal={true}
          labelHorizontal={false}
        />
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <TouchableOpacity
              style={styles.leftBtn}
              onPress={() => this.props.navigation.navigate('Guide2Screen')}>
              <Text style={styles.loginText}>Back!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() => {
                //Submit data to /collection/doc/field
                //Currently /collection is the internal user ID, note that UID is different than username or email
                //TODO REMOVE, just a test submission
                firebase.firestore().collection(firebase.auth().currentUser.uid).doc('testMenu').set({'radioButton':this.state.value});
                this.props.navigation.navigate('Guide4Screen');
              }}>
              <Text style={styles.loginText}>Next!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

//Unbreak firestore



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //therappy1: #707590
    //therappylessblue: #707586
    backgroundColor: '#f2e9e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    //therappy1: #584d9b
    //therappylessblue: #584d9b
    //therappyteal: #20c0b0
    //therappyAIAIAIAI: #fdfdfb
    //lime green: #cbe86b
    color: '#ff666b',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000000',
  },
  forgot: {
    color: 'black',
    fontSize: 14,
  },
  loginText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  rightBtn: {
    width: '45%',
    backgroundColor: '#ff666b',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flex: 1,
    marginTop: 25,
  },
  leftView: {
    flex: 1,
    marginLeft: 90,
    marginTop: 25,
  },
  leftBtn: {
    width: '45%',
    backgroundColor: '#ff666b',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
