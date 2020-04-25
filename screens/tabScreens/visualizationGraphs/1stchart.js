import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import {
  PieChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class Donut extends React.Component {
    render() {
        const chartConfig = {
        fillShadowGradient:"#FFcc0033",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(5, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5
    };

const data = [
  {
    name: "Very Happy Days",
    population: 10,
    color: "#23b526",
    legendFontColor: "#23b526",
    legendFontSize: 15
  },
  {
    name: "Happy Days",
    population: 5,
    color: "#a1df39",
    legendFontColor: "#a1df39",
    legendFontSize: 15
  },
  {
    name: "Neutral Days",
    population: 3,
    color: "#fed41c",
    legendFontColor: "#fed41c",
    legendFontSize: 15
  },
  {
    name: "Sad Days",
    population: 1,
    color: "#fd7c1a",
    legendFontColor: "#fd7c1a",
    legendFontSize: 15
  },
  {
    name: "Bad Days",
    population: 11,
    color: "#FF3714",
    legendFontColor: "#FF3714",
    legendFontSize: 15
  }
];
        return (
                <View>
                <Text> Pie Chart For March</Text>
  <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="1"
  absolute
/>

<Text> What does this mean?</Text>
<Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
</View>

        );
    }
}

export default Donut;
