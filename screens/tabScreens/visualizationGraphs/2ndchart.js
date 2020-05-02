import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions,Button} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import {getData} from '../getData'

var wholeData = []

    class AnotherScreen extends React.Component {
           constructor() {
            super()
            this.state = {
                wholeData: []
            }
        }
        toggle = (data) => {
            var a = [1,2,3]
            console.log(data)
        };
    render() {

        const db = firebase.firestore();
        var UID = firebase.auth().currentUser.uid;
        
        db.collection('surveyData').where("userID", "==", UID ).get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            // console.log(wholeData)
            var data = doc.data()
            wholeData.push(data)
            // console.log(wholeData)
            
            // console.log(data.academicAvg)
            
        });

        })
        .catch(error => {
        console.log('Error!', error);
        })
        
        var data = [3, 1, 4, 9, 1, 1];
        console.log('wholeData')
        return (
            
            <View style={{ height: 200, padding: 20 }}>

            <Button title="Select Month" onPress={this.toggle(wholeData)} />
          
            </View>

        );
    }
}

export default AnotherScreen;
