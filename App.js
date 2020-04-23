import * as React from 'react';
import {Component} from 'react';
import AddButton from "./components/AddButton";
import { View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text  } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

// =============== Login Screen Stuff ==================\\

import Login from './screens/Login/Login';
import CreateAccount from './screens/Login/CreateAccount';
import RootStack from './RootStack';
import {NavigationContainer} from '@react-navigation/native';

// import './android/Firebase/globalFirebase';
//===== Fire Base Stuff ====== \\\

import { decode, encode } from 'base-64'
global.crypto = require('@firebase/firestore');
global.crypto.getRandomValues = byteArray => { for (let i = 0; i < byteArray.length; i++) { byteArray[i] = Math.floor(256 * Math.random()); } }

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }

export default function App() {
  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
     
  );
}
