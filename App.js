//written by: Ariela Chomski
// tested by: Ushio Shinohara
//firebase additions by: Ajay Vejendla

import * as React from 'react';
import {Component} from 'react';
import AddButton from "./components/AddButton";
import { View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text  } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { YellowBox } from 'react-native';
import _ from 'lodash';
// =============== Login Screen Stuff ==================\\

import Login from './screens/Login/Login';
import CreateAccount from './screens/Login/CreateAccount';
import RootStack from './RootStack';
import {NavigationContainer} from '@react-navigation/native';

import './globalFirebase';
//===== Fire Base Stuff ====== \\\

import { decode, encode } from 'base-64'
global.crypto = require('@firebase/firestore');
global.crypto.getRandomValues = byteArray => { for (let i = 0; i < byteArray.length; i++) { byteArray[i] = Math.floor(256 * Math.random()); } }

if (!global.atob) { global.atob = decode; }


//===== Supress Timer Warnings =====\\
//Note that timer optimization is a known issue with firebase and react-native, and hasn't been fixed
//Doesn't seem to be a major performance issue right now



YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  

  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>

  );
}
