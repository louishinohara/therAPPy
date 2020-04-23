import * as React from 'react';
import { View, StyleSheet, Image, Button, ScrollView,Text,Dimensions } from "react-native";
import { Appbar } from "react-native-paper";



class HistoryRoute extends React.Component {
    render() {

        return (
                <View style={{ flex: 1, backgroundColor: "#FFF0809" }}>
        <Appbar.Header>
            <Appbar.Content title="Recommendation History" />
            <Appbar.Action icon="dots-vertical" onPress={null} />
        </Appbar.Header>
        <ScrollView>

        </ScrollView>
        
    </View>
        );
    }
}

export default HistoryRoute;

