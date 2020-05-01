import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
class AnotherScreen extends React.Component {
    render() {
        
        var depression = 0
        var generalAnxiety = null
        var substanceAbuse = null
        var socialAnxiety = null
        var academicDistress = null
        var eatingConcerns = null
        var familyDistress = null
        var hostility = null

        const db = firebase.firestore();
        var UID = firebase.auth().currentUser.uid;
        var startDate = new Date();
        var year = 2020
        var month = 4
        var day = 30
        startDate.setHours(0,0,0,0);
        startDate.setFullYear(year,month,day);
        console.log(startDate)
        
        // var s = firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815"))
        
        // Values to be used in the graph


        var query = db.collection("surveyData").where("userID", "==", UID ).get()
                .then(snapshot => {
                    if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                    }  

                    snapshot.forEach(doc => {
                    var data = doc.data()
                    depression = data.depAvg
                    generalAnxiety = data.genAnxAvg
                    substanceAbuse = data.substanceAvg
                    socialAnxiety = data.socAnxAvg
                    academicDistress = data.academicAvg
                    eatingConcerns = data.eatingAvg
                    familyDistress = data.familyAvg
                    hostility = data.hositilityAvg
                
                    });
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        
        
        var data = [3, 1, 4, 9, 1, 1];
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
