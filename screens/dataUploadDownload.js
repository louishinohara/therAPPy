// Written by Ajay V
import * as DocumentPicker from 'expo-document-picker';
import * as fileSystem from 'expo-file-system';

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
  Alert,
  Button
} from 'react-native';


export default class dataUploadDownload extends Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      //<NavigationContainer>

      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
       


        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {

            DocumentPicker.getDocumentAsync('application/json').then((documentInfo) =>{
              console.log(documentInfo.uri);
              if(documentInfo.type === 'cancel'){

              }

              else if (!documentInfo.name.includes('.json') ){
                Alert.alert('Not valid data archive, only valid data type is .json')
              }
              else{
                

                Alert.alert(
                  "Confirm Upload",
                  "Upload "+documentInfo.name+" ?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "OK", onPress: () => {
                      
                      fileSystem.readAsStringAsync(documentInfo.uri).then(function(data){

                        data = JSON.parse(data);

                        if(data && typeof data == "object"){
                          Object.keys(data).forEach(docKey => {
                            firebase.submitDataDoc('test3',data[docKey],docKey);
                          })


                        }


                        Alert.alert('Data uploaded');

                      })

                    } 
                  
                  }
                  ],
                  { cancelable: false }
                );

              }



            } );


         

          }}>
          <Text style={styles.loginText}>Upload Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
         

          }}>
          <Text style={styles.loginText}>Dowload Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.props.navigation.navigate('BottomTabs')
          }}>
          <Text style={styles.loginText}>Back to Dashboard</Text>
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
