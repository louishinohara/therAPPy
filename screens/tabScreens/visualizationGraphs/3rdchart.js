//Written by Louis Shinohara
//Ajay Vejendla - Fixed chart to be dynamic, and added skeleton code for loading firebase data into graph
// Tested by Louis Shinohara
// Debugged by Josh Hymowitz
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

class ChartScreen extends React.Component {

  state = {

    lineData : {
    labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.","Jul.","Aug.","Sept.","Oct.","Nov","Dec"],
    datasets: [
    {
    data: [
      0,0,0,0,0,0,0,0,0,0,0,0
        ]
    }
    ]
}



  }

  changeData () {
    const self = this;

    const temp = {...self.state.lineData}
    //Get current time
    var now = new Date();
    //Create time stamps for start of current year and start of next month to create the timerange for queries
    var newYearsCurrent = firebase.generateDate(now.getFullYear(),0,1);
    var nextMonth = firebase.generateDate(now.getFullYear(),now.getMonth()+1,1);

    //Adjust labels to match current month
    temp.labels = this.state.lineData.labels.slice(0,now.getMonth()+1);
    firebase.queryDataDate('feelingsData',firebase.getUser(),newYearsCurrent,nextMonth).then(function(documents){
      //Do data processing here
      //Documents is an array of documents that match the range start of year to current month
      //Make sure final data array only has now.getMonth() entries
      //Write data to temp
      //For example, to change the data plotted on the graph do temp.datasets[0].data = array of data
      
      
    
    //Write temp to state, replacing lineData
    self.setState({lineData: temp});

    }).catch();
    
            
  };

  componentDidMount(){
    //Refresh data 
    this.changeData();
  };


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
   
            // legend: ["Rainy Days", "Sunny Days", "Snowy Days"] 
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Your Happiness Points From 2020</Text>
                <LineChart
    data={this.state.lineData}
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
          <Text style = {styles.description}> We generate these numbers based off your daily input scores. In the pie chart, you can see how often you were feeling very happy or very sad throughout the month. What this chart does it takes an average of all the emotions from that month and we give you a 'happiness' score based of that. This way you can see how you have been generally feeling throughout the last couple months.</Text>
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
        marginTop: 10,
        marginBottom: 15,

  }
});  