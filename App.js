import * as React from 'react';
import {Component} from 'react';
import AddButton from "./components/AddButton";
import { View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text  } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

// =============== Login Screen Stuff ==================\\

import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount';
import RootStack from './RootStack';
import {NavigationContainer} from '@react-navigation/native';

//================== Bottom Tab Navigation ====================\\

import ProfileRoute from './screens/ProfileRoute';
import HistoryRoute from './screens/HistoryRoute';
import DataRoute from './screens/DataRoute';
import AddRoute from './screens/AddRoute'
import SettingsRoute from './screens/SettingsRoute';

// https://callstack.github.io/react-native-paper/bottom-navigation.html




export default class MyComponent extends React.Component {
  // =============== THE DIFFERENT SCREENS +++++++++++++++++++
  state = {
    index: 0,
    routes: [
      { key: 'profile', title: 'Profile', icon: 'account'},
      { key: 'history', title: 'History', icon: 'history',color:'blue' },
      { key: 'add', title: 'Add', icon: 'plus-circle-outline' },
      { key: 'data', title: 'See Data', icon: 'chart-multiline' },
      { key: 'settings', title: 'Settings', icon: 'settings', },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
// =============== SCREENS TO RENDER ALSO NECESSARY
  _renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    history: HistoryRoute,
    add: AddRoute,
    data: DataRoute,
    settings: SettingsRoute,
  });

  render() {
    return (
            <NavigationContainer>
        <RootStack />
      
      <BottomNavigation 
        // style={styles.title}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 30,
    },})