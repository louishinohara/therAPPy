import React, {Component} from 'react';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';

const survey = [
    {
        id: 'q36',
        text: 'I sometimes feel like breaking or smashing things',
    },
    {
        id: 'q37',
        text: "I have unwanted thoughts I can't control",
    },
    {
        id: 'q38',
        text: 'There is a history of abuse in my family',
    },
    {
        id: 'q39',
        text: 'I experience nightmares or flashbacks',
    },
    {
        id: 'q40',
        text: 'I feel sad all the time',
    },
];

export default class CapsSurvey8 extends Component {
    state = {
        q36: -1,
        q37: -1,
        q38: -1,
        q39: -1,
        q40: -1,
        radio_props: [
            {label: '0', value: 0},
            {label: '1', value: 1},
            {label: '2', value: 2},
            {label: '3', value: 3},
            {label: '4', value: 4},
        ],
    };

    constructor(props) {
        super(props);
        this.answers = new Map();
    }
    handleKey(key) {
        console.log(key);
    }
    handlePackage(id, value) {
        this.answers.set(id, value);
    }
    render() {
        let radioFormArr;
        radioFormArr = survey.map(buttonInfo => (
            <View key={buttonInfo.id}>
                <Text style={styles.loginText}>{buttonInfo.text}</Text>
                <RadioForm
                    radio_props={this.state.radio_props}
                    initial={0}
                    onPress={value => {
                        this.handlePackage(buttonInfo.id, value);
                    }}
                    formHorizontal={true}
                    labelHorizontal={false}
                />
            </View>
        ));
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Initial Survey based on CAPS form</Text>
                <Text style={styles.loginText}>Questions: 36-40 / 62</Text>
                <ScrollView>{radioFormArr}</ScrollView>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => {
                        console.log(this.answers);
                        //firebase.firestore().collection(firebase.auth().currentUser.uid).doc('capsForm').set({'1-5':this.answers});
                        this.props.navigation.navigate('CapsSurvey9Screen')}}>
                    <Text style={styles.loginText}>To questions 41-45</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //therappy1: #707590
        //therappylessblue: #707586
        backgroundColor: '#f2e9e1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        //therappy1: #584d9b
        //therappylessblue: #584d9b
        //therappyteal: #20c0b0
        //therappyAIAIAIAI: #fdfdfb
        //lime green: #cbe86b
        color: '#ff666b',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#000000',
    },
    forgot: {
        color: 'black',
        fontSize: 14,
    },
    loginText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    rightBtn: {
        width: '45%',
        backgroundColor: '#ff666b',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightView: {
        flex: 1,
        marginTop: 25,
    },
    leftView: {
        flex: 1,
        marginLeft: 90,
        marginTop: 25,
    },
    leftBtn: {
        width: '45%',
        backgroundColor: '#ff666b',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#7f58ff',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
        // padding:20,
    },
});
