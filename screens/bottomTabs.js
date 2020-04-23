import * as React from 'react';
import {Component} from 'react';
import AddButton from "../components/AddButton";
import { View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text  } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

// ================== Bottom Tab Navigation ====================\\

import ProfileRoute from './tabScreens/ProfileRoute';
import HistoryRoute from './tabScreens/HistoryRoute';
import DataRoute from './tabScreens/DataRoute';
import AddRoute from './tabScreens/AddRoute'
import SettingsRoute from './tabScreens/SettingsRoute';

// https://callstack.github.io/react-native-paper/bottom-navigation.html

export default class BottomTabs extends React.Component {
  // =============== THE DIFFERENT SCREENS +++++++++++++++++++
  state = {
    index: 0,
    routes: [
      { key: 'profile', title: 'Profile', icon: 'account'},
      { key: 'history', title: 'History', icon: 'history' },
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
      <BottomNavigation 
        // style={styles.title}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
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