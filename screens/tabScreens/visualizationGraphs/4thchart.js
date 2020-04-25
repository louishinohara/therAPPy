import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";

import {
  BarChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class CAPSScreen extends React.Component {
    render() {
      const chartConfig = {
        backgroundColor: "#e26a00",
        fillShadowGradient:"#FFcc0033",
        backgroundGradientToOpacity: 0.5,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        color: (opacity = 1) => `rgba(5, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5
      };  
      const barData = {
        labels: ['Anger', 'Joy', 'Anxious', 'Sad', 'Joyful', 'Excited'],
        datasets: [
          {
            data: [            
              Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100],
          },
        ],
      };
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Last CAPS Survey From March</Text>
              <BarChart
            //   style={graphStyle} 
                  data={barData}
                  width={screenWidth}
                  height={350}
                  yAxisLabel=""
                  fromZero = "True"
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
              />
          <Text style={styles.subHeader}> What does this mean?</Text>
          <Text style = {styles.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
          </ScrollView>
        );
    }
}

export default CAPSScreen;
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

  }
});  