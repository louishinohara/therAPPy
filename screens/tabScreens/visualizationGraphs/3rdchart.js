import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class ChartScreen extends React.Component {
    render() {
        const chartConfig={
      backgroundColor: "#6200ee",
      backgroundGradientFrom: "#6200ee",
      backgroundGradientTo: "#6200ee",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(230, 126, 34, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    };
     var lineData = {
            labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    };
            // legend: ["Rainy Days", "Sunny Days", "Snowy Days"] 
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Happiness Points From 2020</Text>
                <LineChart
    data={lineData}
    width={Dimensions.get("window").width} // from react-native
    height={280}
    yAxisLabel=""
    yAxisSuffix="HP"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={chartConfig}
    bezier
    fromZero = "True"
    getDotColor="white,white"
    verticalLabelRotation={30}
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
          <Text style={styles.subHeader}> What does this mean?</Text>
          <Text style = {styles.description}> Using our algorithm at therAPPy, we have calculated how 'happy' you have been for the month. The closer you are to the peak (100) the happier you have been. This line graph shows how your mood has been changing over the span of the last couple months </Text>
          </ScrollView>
        );
    }
}

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 35,
  },
  chart: {
      backgroundColor: 'blue',
      color: 'blue'
  },
  subHeader: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center', 
        marginTop: 5,
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