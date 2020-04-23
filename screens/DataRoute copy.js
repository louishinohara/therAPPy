// https://github.com/JulianCurrie/CwC_React_Native/blob/react_navigation_v5/App.js
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions} from "react-native";
import { Appbar } from "react-native-paper";


class DataRoute extends React.Component {
    render() {

        return (

    <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title="<     February 2020     >" />
            <Appbar.Action icon="dots-vertical" onPress={null} />
        </Appbar.Header>
        <ScrollView>
            <View>
            <Text style={styles.title}>Calendar View</Text>
            </View>
            <Image style={styles.calendar} source={{ uri: 'https://i.imgur.com/NlWdZSR.jpg' }} />
            <Text style={styles.title}>Radar View</Text>
            {/* https://livegap.com/charts/app.php?gallery=12 */}
            <Image style={styles.radar} source={{ uri: 'https://i.imgur.com/YSIa55S.png'}} />
            <Text style={styles.title}>Donut Chart View</Text>
            <Image style={styles.radar} source={{ uri: 'https://i.imgur.com/1ka0yBA.png'}} />
            <Text style={styles.title}>Happinness Tracker</Text>
            <Image style={styles.radar} source={{ uri: 'https://i.imgur.com/Wk04Ypb.png'}} />
        </ScrollView>
        
    </View>); 
    }
}
  export default DataRoute;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 30,
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