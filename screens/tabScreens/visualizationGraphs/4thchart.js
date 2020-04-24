import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";

import {
  BarChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class CAPSScreen extends React.Component {
    render() {
const chartConfig = {
//   backgroundGradientFrom: "#808080",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#808080",
  fillShadowGradient:"#FFcc0033",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(5, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5
};
const barData = {
      labels: ['Anger', 'Joy', 'Anxious', 'Sad', 'Joyful', 'Excited'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
        return (
    <View>
  {/* <Text>Bezier Line Chart</Text> */}
  <BarChart
//   style={graphStyle}
  data={barData}
  width={screenWidth}
  height={350}
  yAxisLabel=""
  fromZero = "True"
  chartConfig={{backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0,0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,}}
  verticalLabelRotation={30}
  
/>
<Text> What does this mean?</Text>
<Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
</View>
        );
    }
}

export default CAPSScreen;
