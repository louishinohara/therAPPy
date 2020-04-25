import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
class AnotherScreen extends React.Component {
    render() {

        const db = firebase.firestore();

        const query = db.collection("surveyData").where("userID", "==", "biKnLLfkEvfsoKTD9e311GkXbs22").get()
                .then(snapshot => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                    }  

                    snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    });
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        
        
        
        
        
        console.log(query)
        // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        // const fill = 'rgb(134, 65, 244)';
        const data = [50, 10, 40, 95, -4, -24];

        return (
            <View style={{ height: 200, padding: 20 }}>
                <BarChart
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
            </View>
        );
    }
}

export default AnotherScreen;
