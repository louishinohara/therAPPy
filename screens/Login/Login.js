//written by: Ariela Chomski
//firebase additions by: Ajay Vejendla
//debugged by: Ariela Chomski

import 'react-native-gesture-handler';
import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Button
} from 'react-native';


export default class LoginBase extends Component {
  state = {
    email: '',
    password: '',
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
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ForgotPasswordScreen')
          }>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            //Returns promise, if login is sucessful navigate to login screen, else do the function in the catch block
            //TODO Display error message when login is unsuccessful
            //TODO add lockout if too many failed attempts in some time frame

            console.log(this.props)

            //=========== SIGN IN TURNED ON ===========\\
            firebase.login(this.state.email,this.state.password).then(()=> this.props.navigation.navigate('Guide1Screen')).catch(function(error){
              
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                alert('Wrong password');
              }
              else if (errorCode === 'auth/invalid-email') {
                alert('Invalid Email');
              }
              else if (errorCode === 'auth/user-disabled') {
                alert('User blocked for too many wrong attempts. Try again in a few minutes.');
              }
              else if (errorCode === 'auth/user-not-found') {
                alert('No user found with the given email. Try creating an account.');
              }
            });
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountBtn}
          onPress={() => this.props.navigation.navigate('CreateAccountScreen')}>
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dataBtn}
          onPress={() => this.props.navigation.navigate('dataUpDown')}>
          <Text style={styles.dataText}>Upload / Download Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BottomTabs')}>
          <Text style={styles.dataText}>TO MAIN SCREEN DELETE LATER</Text>
        </TouchableOpacity>

      </View>

      //  </NavigationContainer>
    );
  }
  onChangeEmail(text) {
    this.setState({email: text});
  }
  onChangePassword(text) {
    this.setState({password: text});
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
    color: '#7f58ff',
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
  createAccount: {
    color: 'white',
    fontSize: 18,
  },
  loginText: {
    color: 'black',
    fontSize: 18,
  },
  dataText: {
    color: 'black',
    fontSize: 18,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#7f58ff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 20,
    // padding:20,
  },
    createAccountBtn: {
          width: '80%',
    backgroundColor: 'grey',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    // marginTop: 20,
    // padding:20,

  },
      dataBtn: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    // marginTop: 20,
    // padding:20,
  },
});
