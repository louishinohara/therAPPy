// Written by Ushio Shinohara
//Ajay Vejendla - Debugged charts to be dynamic, added code for getting the appropriate docs from firebase
  // tested by: Josh Hymowitz
  // debugged by: Ushio Shinohara
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import {
  PieChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class MyPieChart extends React.Component {
state = {
  data : [
    {
      name: "Very Happy Days",
      population: 0,
      color: "#23b526",
      legendFontColor: "#23b526",
      legendFontSize: 15
    },
    {
      name: "Happy Days",
      population: 0,
      color: "#a1df39",
      legendFontColor: "#a1df39",
      legendFontSize: 15
    },
    {
      name: "Neutral Days",
      population: 0,
      color: "#fed41c",
      legendFontColor: "#fed41c",
      legendFontSize: 15
    },
    {
      name: "Sad Days",
      population: 0,
      color: "#fd7c1a",
      legendFontColor: "#fd7c1a",
      legendFontSize: 15
    },
    {
      name: "Bad Days",
      population: 0,
      color: "#FF3714",
      legendFontColor: "#FF3714",
      legendFontSize: 15
    }
  ]
}

updateData(){

  const self = this;
  //Create clone of chart data currently in state
  const temp = {...self.state.data}
  //Get current time
  var now = new Date();
  //Create time stamps for start of current month and start of next month to create the timerange for queries
  var currentMonth = firebase.generateDate(now.getFullYear(),now.getMonth,1);

  var nextMonth = firebase.generateDate(now.getFullYear(),(now.getMonth()+1)%12,1);


  //Lazy fix for December
  if(now.getMonth() == 11){

    nextMonth.setFullYear(now.getFullYear+1);

  }

  firebase.queryDataDate('feelingsData',firebase.getUser(),currentMonth,nextMonth).then(function(documents){
    //Do data processing here
    //Documents is an array of documents that contains all the values for the current 
    //Final array should never exceed 
    //Write data to temp
    //For example, to change the data plotted on the graph do temp.datasets[0].data = array of data
    
    
  
  //Write temp to state, replacing current chart data
  self.setState({data: temp});

  }).catch(

    //Errors and promise rejections are already handled in globalFirebase
  );




}

componentDidMount(){

  this.updateData();

}

    render() {
        const chartConfig = {
        fillShadowGradient:"#FFcc0033",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(5, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5
    };
// Data to test out the graphs

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>How You Were Feeling This Month</Text>
                <View styles={styles.chart}>
                <PieChart
                    data={this.state.data}
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
                <Text style = {styles.description}> Based off the emotions that you have inputted into our app, therAPPy has taken the emotions you inputted and has placed how you are feeling within 1 of 5 categories spanning from very happy to very unhappy. Your pie chart displays the total of our calculated fields which we have placed you in for the month</Text>
            </ScrollView>

        );
    }
}

export default MyPieChart;
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