//written by: Ariela Chomski
//debugged by: Ariela Chomski
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
import firebaseMethods from "firebase/firestore";
const survey = [
    {
        id: 'q61',
        text: 'The less I eat, the better I feel about myself',
    },
    {
        id: 'q62',
        text: 'I feel that I have no one who understands me',
    },
];

export default class CapsSurvey13 extends Component {
    state = {
        q61: -1,
        q62: -1,
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
        global.survey.push(value);
    }
    handleSubmit() {
        var i;
        let data = {
            dateAndTimeReceived: -1,
            userID: firebase.auth().currentUser.uid,
            depression: -1,
            generalizedAnxiety: -1,
            socialAnxiety: -1,
            academicDistress: -1,
            eatingConcerns: -1,
            hostility: -1,
            alcoholUse: -1,
        };
        for (i = 0; i < global.survey.length; i++) {
            if (i === 3 || i === 4 || i === 10 || i === 11 || i === 20 || i === 24) {
                data.depression += global.survey[i];
            }
            else if (i === 1 || i === 6 || i === 8 || i === 9 || i === 14 || i === 16) {
                data.generalizedAnxiety += global.survey[i];
            }
            else if (i === 0 || i === 18 || i === 21 || i === 23 || i === 25) {
                data.socialAnxiety += global.survey[i];
            }
            else if (i === 7 || i === 25 || i === 29 || i === 32) {
                data.academicDistress += global.survey[i];
            }
            else if (i === 2 || i === 5 || i === 12) {
                data.eatingConcerns += global.survey[i];
            }
            else if (i === 17 || i === 19 || i === 22 || i === 28 || i === 31 || i === 33) {
                data.hostility += global.survey[i];
            }
            else if (i === 13 || i === 15 || i === 26 || i === 30) {
                data.alcoholUse += global.survey[i];
            }
        }
       //not tested yet
        // data.dateAndTimeReceived = firebaseMethods.Timestamp.now();
        console.log(data);
        firebase.firestore().collection('surveyData').doc().set(data);
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
                <Text style={styles.loginText}>Questions: 61-62 / 62</Text>
                <ScrollView>{radioFormArr}</ScrollView>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => {
                        console.log(this.answers);
                        this.handleSubmit();
                        //firebase.firestore().collection(firebase.auth().currentUser.uid).doc('capsForm').set({'1-5':this.answers});
                        this.props.navigation.navigate('ResourcesScreen')}}>
                    <Text style={styles.loginText}>To Additional Resources</Text>
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
