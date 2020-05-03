import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions,Button} from "react-native";
import { BarChart, Grid,XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import {getData} from '../getData'

    class AnotherScreen extends React.Component {
           constructor() {
            super();
            this.db = firebase.firestore().collection('userProfiles')
            this.state = {
                userArr: []
            }
        }

            componentDidMount() {
                this.unsubscribe = this.db.onSnapshot(this.getCollection);
            }

            componentWillUnmount(){
                this.unsubscribe();
            }

            getCollection = (querySnapshot) => {
                const userArr = [];
                querySnapshot.forEach((res) => {
                const { fullName, phoneNumber } = res.data();
                userArr.push({
                    key: res.id,
                    res,
                    fullName,
                    phoneNumber,
                });
                console.log(userArr)
                });
                this.setState({
                userArr,
                // isLoading: false,
            });
            }

        // toggle = (data) => {
        //     var a = [1,2,3]
        //     console.log(data)
        // };
    render() {

        // const db = firebase.firestore();
        // var UID = firebase.auth().currentUser.uid;
        
        // db.collection('surveyData').where("userID", "==", UID ).get()
        // .then(snapshot => {
        // snapshot.forEach(doc => {
        //     // console.log(wholeData)
        //     var data = doc.data()
        //     wholeData.push(data)
        //     // console.log(wholeData)
            
        //     // console.log(data.academicAvg)
            
        // });

        // })
        // .catch(error => {
        // console.log('Error!', error);
        // })
        
        var data = [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,]
        // console.log('wholeData')
        return (
            
            // <View style={{ height: 200, padding: 20 }}>

            // <Button title="Select Month" onPress={this.toggle(data)} />
          
            // </View>
            <ScrollView>
            <Button title="Select Month" onPress={{}} />
        </ScrollView>
        );
    }
}

export default AnotherScreen;
