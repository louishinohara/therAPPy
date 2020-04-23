//Create Account Screen

import 'react-native-gesture-handler';
// JavaScript source code
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CreateAccount extends React.Component {
  state = {
    email: '',
    password: '',
    confirm: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={this.onChangeEmail.bind(this)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            //underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={this.onChangePassword.bind(this)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#003f5c"
            //underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={this.onChangeConfirm.bind(this)}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={styles.forgot}>Back to Login Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            if (this.state.password == this.state.confirm) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(
                  this.state.email,
                  this.state.password,
                )
                .then(this.props.navigation.navigate('Guide1Screen'))
                .catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorMessage);
                  // ...
                });
            }
          }}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onChangeEmail(text) {
    this.setState({email: text});
  }
  onChangePassword(text) {
    this.setState({password: text});
  }
  onChangeConfirm(text) {
    this.setState({confirm: text});
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
    //color: "#cbe86b",
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
    color: 'white',
    fontSize: 18,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ff666b',
    //backgroundColor: "#cbe86b",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    // padding:20,
  },
});
