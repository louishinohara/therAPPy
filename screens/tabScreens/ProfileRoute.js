import * as React from 'react';
import { View, StyleSheet, Image, Button, ScrollView,Dimensions,ImageBackground,Platform, TouchableHighlight,Linking} from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text,Appbar  } from 'react-native-paper';
import { Block,theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

// import {Images } from '../constants';
import {HeaderHeight} from "../../constants/utils"
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;


class ProfileRoute extends React.Component {
    render() {
        return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://i.imgur.com/xfnigDQ.jpg' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.description}></Text>
                </View>
                <Card style={styles.cardContent}>
                    <Card.Content>
                        <Title style={styles.date}>Monday, May 1st</Title>
                        <Paragraph style={styles.recTitle}>Here's your latest recommendation!</Paragraph>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Paragraph style={styles.reBody}>We've been noticing that you have been feeling down lately. We recommend that you go out for a walk!</Paragraph>
                    </Card.Content>
                    
  
                </Card>
                <Card style={styles.cardContent}>
                
                    <Card.Content>
                        <Title>Here Are Some Events Near You!</Title>
                    </Card.Content>
                    <TouchableHighlight onPress={ ()=>{ Linking.openURL('https://therappy.rutgers.edu/?page_id=96')}}>
                    <Card.Cover source={{ uri: 'https://i.imgur.com/k5mgiDT.png' }} />
                    </TouchableHighlight>
                </Card>
            </View>
        </View>
    </ScrollView>);

    }
    }

export default ProfileRoute;
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#7F58FF",
        height: 200,
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 80
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 20,
    },
    bodyContent: {
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 18,
        color: "#696969",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    cardContent: {
        elevation: 4,
        // marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        resizeMode:'contain',
    },
    date: {
        fontSize: 20
    },
    recTitle: {
        fontSize: 18
    },
    recBody: {
        fontSize: 17,
        marginTop: 40
    },

});
