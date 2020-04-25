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
            <ScrollView style={styles.container}>
                <Text style={styles.title}>How You Were Feeling For March!</Text>
                <View styles={styles.chart}>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="#ffffff"
                    paddingLeft="1"
                    absolute
                />
                </View>
                <Text style={styles.subHeader}> What does this mean?</Text>
                <Text style = {styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
            </ScrollView>

        );
    }
}

export default Donut;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 20,
  },
  chart: {
      backgroundColor: 'blue',
      color: 'blue'
  },
  subHeader: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center', 
        marginTop: 30,
        marginBottom: 20,
  },
  description: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center', 

  }
});  