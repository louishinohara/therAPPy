import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions,Button} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import {getData} from '../getData'

    class AnotherScreen extends React.Component {
           constructor() {
            super()
            this.state = {
                wholeData: []
            }
        }



        toggle = () => {
            var a = [1,2,3]
            console.log(a)
        };
    render() {

        const db = firebase.firestore();
        var UID = firebase.auth().currentUser.uid;
        var wholeData = []
        db.collection('surveyData').where("userID", "==", UID ).get()
        .then(snapshot => {
        snapshot.forEach(doc => {
            wholeData.push(doc.data())
            this.toggle
        });
        
        })
        .catch(error => {
        console.log('Error!', error);
        })

        var data = [3, 1, 4, 9, 1, 1];
        return (
            
            <View style={{ height: 200, padding: 20 }}>

            <Button title="Select Month" onPress={this.toggle} />
          
            </View>

        );
    }
}

export default AnotherScreen;
