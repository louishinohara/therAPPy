//Forgot Password Screen

import 'react-native-gesture-handler';
import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AppState,
} from 'react-native';

export default class Login extends Component {
  state = {
    email: '',
  };
  render() {
    return (
      //<NavigationContainer>

      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            //value={this.state.email}
            onChangeText={this.onChangeEmail.bind(this)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            //Reset email as stored in state when button is pressed
            //Do something if successful in .then block, otherwise do something else if failed in catch block

            //Currently no output is given for success or failure
            //TODO output status message of reset attempt
            firebase.auth()
              .sendPasswordResetEmail(this.state.email)
              .then(function() {
                // Email sent.
              })
              .catch(function(error) {
                // An error happened.
              });
          }}>
          <Text style={styles.loginText}>Send Reset Link</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={styles.forgot}>Back to Login Screen</Text>
        </TouchableOpacity>
      </View>

      //  </NavigationContainer>
    );
  }
  onChangeEmail(text) {
    this.setState({email: text});
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
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ff666b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    // padding:20,
  },
});
