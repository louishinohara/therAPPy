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
        fillShadowGradient:"#6200ee",
        backgroundGradientToOpacity: 0.5,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        color: (opacity = 1) => `rgba(5, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5
      };  
      const barData = {
        labels: ['Depression', 'General Anxiety', 'Substance Use', 'Social Anxiety', 'Academic Distress', 'Eating Concerns', 'Family Distress','Hostility',''],
        datasets: [
          {
            data: [            
              Math.random() * 100,
            Math.random() * 100,
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
              // style={styles.graphStyle} 
                  data={barData}
                  width={screenWidth * .95}
                  height={450}
                  yAxisLabel=""
                  fromZero = "True"
                  chartConfig={chartConfig}
                  verticalLabelRotation={42}
                  showBarTops="True"
                  style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              />
          <Text style={styles.subHeader}> What does this mean?</Text>
          <Text style = {styles.description}>   The CCAPS-62 survey, which is the basis for our evaluation of a user’s mental health, consists of 62 questions describing a person’s thoughts, feelings, and experiences over the past two weeks, with answers on a scale of 0 or “not like me at all”, to 4 or “extremely like me”. Each question is an indicator of one of eight factors the survey evaluates (Depression, Substance Abuse, Eating Concerns, Generalized Anxiety, Family Distress, Social Anxiety, Hostility, and Academic Distress).</Text>
          <Text> </Text>
          <Text style = {styles.description}>   Professionals will keep track of all eight subscores of every client in their practice, and assign each client eight scores, indicating what percentile they fall into for that subscale. The CCAPS test further establishes two cutoff points for each subscale. These two cutoff points divide the sample into three regions: low concern, mild concern, and elevated concern. The exact cutoff point-values are unique to each subscale, and are shown in Figure 4.1. These cutoffs can be expressed both as percentiles of the clinical population, as well as through averages of the raw numerical answers of all the questions in a given subscale.</Text>
          <Text> </Text>
          <Text style = {styles.description}>   For example, if the Depression category had 4 questions, which the user answered with 0, 1, 2, and 3, the average would be 1.5, placing the user in the “mild concern” range.</Text>
          <Text style={styles.subHeader}> Where you stand</Text>
          <Image style={styles.image} source={{ uri: 'https://i.imgur.com/RMsFfpN.png' }} />
          <Text style={styles.subHeader}> CAPS _______ Chart</Text>
          <Image style={styles.image} source={{ uri: 'https://i.imgur.com/FdAqMfo.png' }} />
          <Text style={styles.subHeader}> For more information visit xxx</Text>
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
        marginTop: 25,
        marginBottom: 20,
  },
  description: {
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center', 
        marginLeft: 14,
        marginRight: 14,

  },
  image: {
        width: screenWidth * .9,
        height: 260,
        // borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        // position: 'absolute',
        // marginTop: 20,
        resizeMode:'contain'
  }
});  