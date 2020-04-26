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
                <Text style = {styles.description}> Based off the emotions that you have inputted into our app, therAPPy has taken the emotions you inputted and has placed how you are feeling within 1 of 5 categories spanning from very happy to very unhappy. You pie chart displays the total of our calculated field which we have placed you in for the month</Text>
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
        marginLeft: 14,
        marginRight: 14,

  }
});  