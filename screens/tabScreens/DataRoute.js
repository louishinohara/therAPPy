// https://github.com/JulianCurrie/CwC_React_Native/blob/react_navigation_v5/App.js
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Donut from './visualizationGraphs/1stchart';
import AnotherScreen from './visualizationGraphs/2ndchart';
import ChartScreen from './visualizationGraphs/3rdchart';
import CAPSScreen from './visualizationGraphs/4thchart';

const Tab = createMaterialTopTabNavigator();

class DataRoute extends React.Component {
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title="< March 2020 >" />
            {/* <Appbar.Action icon="dots-vertical" onPress={null} /> */}
        </Appbar.Header>
   <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Pie Chart" component={Donut} />
        <Tab.Screen name="Charrt" component={AnotherScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="CAPS Survey" component={CAPSScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
); 
    }
}
  export default DataRoute;

