// https://github.com/Mazurco066/react-native-settings-page
// https://github.com/florianstahr/react-native-settings-components
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
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
	}

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
						text='Navigate Row'
						iconName='your-icon-name'
						onPressCallback={this._navigateToScreen} />
					{/* <SwitchRow 
						text='Switch Row' 
						iconName='your-icon-name'
						_value={this.state.switch}
						_onValueChange={() => { this.setState({ switch: !this.state.switch }) }} /> */}
					<CheckRow 
						text='Check Row'
						iconName='your-icon-name'
						_color='#000'
						_value={this.state.check}
						_onValueChange={() => { this.setState({ check: !this.state.check }) }} />
					{/* <SliderRow 
						text='Slider Row'
						iconName='your-icon-name'
						_color='#000'
						_min={0}
						_max={100}
						_value={this.state.value}
						_onValueChange={value => { this.setState({ value }) }} /> */}
				</SectionRow>
			</ReactNativeSettingsPage>




    </ScrollView>
    </View>);
  }
}

export default SettingsRoute;

const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};