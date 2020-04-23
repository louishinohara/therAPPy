//LoginScreen

import 'react-native-gesture-handler';
import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=> this.props.navigation.navigate('Guide1Screen')).catch(function(error){});

          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateAccountScreen')}>
          <Text style={styles.forgot}>Create Account</Text>
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
