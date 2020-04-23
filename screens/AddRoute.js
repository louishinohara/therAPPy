import React from "react";
import {View,Text,Image,StyleSheet,Dimensions} from "react-native";
import { Appbar } from "react-native-paper";



class AddRoute extends React.Component {
    render() {

        return (

    <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title="March 1st, 2020" />
            <Appbar.Action icon="dots-vertical" onPress={null} />
        </Appbar.Header>
        <Text style={styles.title}>How are you feeling right now?</Text>
            <Image style={styles.radar} source={{ uri: 'https://i.imgur.com/7kZ7VQd.png'}} />
    </View>
);}}
export default AddRoute;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    calendar: {
        width:  Dimensions.get('window').width,
        height: 350,
        alignSelf: 'center',
        marginTop: 20,
        resizeMode: "contain",
    },
    radar: {
        width:  Dimensions.get('window').width * .95,
        height: 350,
        alignSelf: 'center',
        resizeMode: "contain",
    },
})