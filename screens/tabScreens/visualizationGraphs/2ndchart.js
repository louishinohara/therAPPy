import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions,Button} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import {getData} from '../getData'

    class AnotherScreen extends React.Component {
        onSurveyDataReceived = (surveyData) => {
            console.log(surveyData);
            this.setState(prevState => ({
                surveyData: surveyData
            }));
        }
        componentDidMount() {
            getData(this.onSurveyDataReceived)
        }

    render() {
        
                
        var data = [3, 1, 4, 9, 1, 1];
        return (
            
            <View style={{ height: 200, padding: 20 }}>
                {/* <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: 'rgb(134, 65, 244)' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ data }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => index }
                    labelStyle={ { color: 'black' } }
                />
                            */}
            <Button title="Select Month" onPress={()=> getData({

            }) } />
          
            </View>

        );
    }
}

export default AnotherScreen;
