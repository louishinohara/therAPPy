// Written by Ushio Shinohara

import React from "react";
import {Component} from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions, Linking,TouchableOpacity,Alert,Button} from "react-native";
import { Appbar } from "react-native-paper";
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from "react-native-settings-components";
import ReactNativeSettingsPage, {
	SectionRow,
	NavigateRow,
  CheckRow
} from 'react-native-settings-page';
import 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

class SettingsRoute extends Component {
    constructor() {
        super();
        this.state = {
        username: "",
        allowPushNotifications: false,
        gender: ""
        };
    }


    	state = {
		check: false,
		switch: false,
		value: 40
	};

    render() {
      console.log(this.props);

        return (



        <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
          <Appbar.Header>
              <Appbar.Content title="Settings" />
              {/* <Appbar.Action icon="dots-vertical" onPress={null} /> */}
          </Appbar.Header>
    <ScrollView
          style={{
            flex: 1,
            backgroundColor:
              Platform.OS === "ios" ? colors.iosSettingsBackground : colors.white
          }}
        >
     {/* ================        Start of First Library       ================*/}
      <SettingsCategoryHeader
        title={"My Account"}
        textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
      />
      <SettingsDividerLong android={false} />
      <SettingsEditText
        title="Username"
        dialogDescription={"Enter your username."}
        valuePlaceholder="..."
        negativeButtonTitle={"Cancel"}
        buttonRightTitle={"Save"}
        onValueChange={value => {
          console.log("username:", value);
          this.setState({
            username: value
          });
        }}
        value={this.state.username}
      />
      <SettingsDividerShort />
      <SettingsPicker
        title="Gender"
        dialogDescription={"Choose your gender."}
        options={[
          { label: "...", value: "" },
          { label: "male", value: "male" },
          { label: "female", value: "female" },
          { label: "other", value: "other" }
        ]}
        onValueChange={value => {
          console.log("gender:", value);
          this.setState({
            gender: value
          });
        }}
        value={this.state.gender}
        styleModalButtonsText={{ color: colors.monza }}
      />

      <SettingsSwitch
        title={"Allow Push Notifications"}
        onValueChange={value => {
          console.log("allow push notifications:", value);
          this.setState({
            allowPushNotifications: value
          });
        }}
        value={this.state.allowPushNotifications}
        trackColor={{
          true: colors.switchEnabled,
          false: colors.switchDisabled,
        }}
      />
            {/* ================        Start of Second Library       ================*/}

    			<ReactNativeSettingsPage>
				<SectionRow text='Other Settings'>
            <NavigateRow
              text='Team Members'
              iconName='linkedin-square'
              onPressCallback={this._navigateToScreen}/>
          </SectionRow>
			</ReactNativeSettingsPage>
              <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Confirm",
              "Are you sure you want to sign out?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => {

                  firebase.signOut();

                  },
                  style: "cancel"

                },
              ],
              { cancelable: false }
            );



          }}>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.version}>  therAPPy version 1.1.2</Text>




    </ScrollView>
    </View>);
  }
}

export default SettingsRoute;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  version: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
      // marginBottom: 20,
  },
  signOut: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 20,
  }
});

const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};
