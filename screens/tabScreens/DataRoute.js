// https://github.com/JulianCurrie/CwC_React_Native/blob/react_navigation_v5/App.js
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions,Button} from "react-native";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Donut from './visualizationGraphs/1stchart';
import AnotherScreen from './visualizationGraphs/2ndchart';
import ChartScreen from './visualizationGraphs/3rdchart';
import CAPSScreen from './visualizationGraphs/4thchart';
import Modal from 'react-native-modal';
import { Picker, DatePicker } from 'react-native-wheel-pick';
const Tab = createMaterialTopTabNavigator();
// Date Picker
// https://github.com/TronNatthakorn/react-native-wheel-pick

// Modal Library
// https://www.npmjs.com/package/react-native-modal

class DataRoute extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        isModalVisible: false,
        value: 'May 2020'
      }
   }

      
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  setDate = (val) => {
    this.setState({value: val});
  };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title= {this.state.value} />
            {/* Calls Date Picking Modal */}
            <Appbar.Action icon="calendar" onPress={this.toggleModal} />            
        </Appbar.Header>
        <Modal isVisible={this.state.isModalVisible} backdropColor="black">
          <View style={styles.modal}>
            <Picker
                style={{ backgroundColor: 'white' }}
                selectedValue='March 2020'
                pickerData={['March 2020', 'April 2020', 'February 2020', 'January 2020', 'December 2019', 'November 2019', 'October 2019']}
                onValueChange={value => {this.setDate(value)}}
            />
            <Button title="Select Month" onPress={this.toggleModal} />
          </View>
        </Modal>
   <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Pie Chart" component={Donut} />
        {/* <Tab.Screen name="Charrt" component={AnotherScreen} /> */}
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="CAPS Survey" component={CAPSScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
); 
    }
}
  export default DataRoute;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "white",
        // height: 200,
    },
});
