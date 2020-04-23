// https://github.com/JulianCurrie/CwC_React_Native/blob/react_navigation_v5/App.js
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chart View</Text>
    </View>
  );
}

function AnotherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Average Blah</Text>
    </View>
  );
}
function BlahScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Another Graph</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Average Blah</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

class DataRoute extends React.Component {
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title="View Data" />
            {/* <Appbar.Action icon="dots-vertical" onPress={null} /> */}
        </Appbar.Header>
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mood History" component={HomeScreen} />
        <Tab.Screen name="Donut" component={AnotherScreen} />
        <Tab.Screen name="Chart" component={BlahScreen} />
        <Tab.Screen name="Average" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
); 
    }
}
  export default DataRoute;

// const styles = StyleSheet.create({
//     title: {
//         fontSize: 28,
//         color: "#696969",
//         fontWeight: "600",
//         justifyContent: "center",
//         alignSelf: 'center',
//         marginTop: 30,
//     },
//     calendar: {
//         width:  Dimensions.get('window').width,
//         height: 350,
//         alignSelf: 'center',
//         marginTop: 20,
//         resizeMode: "contain",
//     },
//     radar: {
//         width:  Dimensions.get('window').width * .95,
//         height: 350,
//         alignSelf: 'center',
//         resizeMode: "contain",
//     },
// })