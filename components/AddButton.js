import React from "react";
import {View, Text, StyleSheet, TouchableHighlight, Animated} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
export default class AddButton extends React.Component {
    // buttonSize = new Animated.Value(1)
    // handlePress = () => {

    // }
    render() {
        return (
            <View style={{position:"absolute",alignItems:"center"}}>
                <View style={styles.button}>
                    <TouchableHighlight  underlayColor = "#7F58FF">
                        <View>
                            <FontAwesome5 name="plus" size={24} color="#FFF"/>
                        </View>
                    </TouchableHighlight>
                    </View> 
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
button: {
    backgroundColor: "#7F58FF",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    position: "absolute",
    top: -60,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFF",
}
})