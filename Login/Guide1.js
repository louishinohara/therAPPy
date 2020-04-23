//First screen of guide sequence
//Intro

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Guide1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
        <Text style={styles.loginText}>
          Thank you for signing up for therAPPy, the app that helps you track
          and improve your mental health!
        </Text>
        <Text style={styles.loginText}>
          Please click the button below to navigate your way
          through the app.
        </Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('Guide2Screen')}>
          <Text style={styles.loginText}>Next!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //therappy1: #707590
    //therappylessblue: #707586
    backgroundColor: '#f2e9e1',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  loginBtn: {
    width: '45%',
    backgroundColor: '#ff666b',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    // padding:20,
  },
});
