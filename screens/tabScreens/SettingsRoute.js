// https://github.com/Mazurco066/react-native-settings-page
// https://github.com/florianstahr/react-native-settings-components
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions, Linking} from "react-native";
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



class SettingsRoute extends React.Component {
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
					{/* <CheckRow
						text='Check Row'
						iconName='your-icon-name'
						_color='#000'
						_value={this.state.check}
						_onValueChange={() => { this.setState({ check: !this.state.check }) }} /> */}

				</SectionRow>
			</ReactNativeSettingsPage>
      <Text style={styles.version}>  Sign Out </Text>
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
});

const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};
