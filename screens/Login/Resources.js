//fifth screen of guide sequence
//outro

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const links = [
    {
        id: 1,
        title: 'Rutgers CAPS website',
        link: 'http://health.rutgers.edu/medical-counseling-services/counseling/',
        description: 'Offers Counseling, Alcohol and Other Drug Assistance Program & Psychiatric Services',
    },
    {
        id: 2,
        title: 'US SAMHSA website',
        link: 'https://www.samhsa.gov/find-treatment',
        description: 'The US Government Substance Abuse and Mental Health Services Administration.',
    },
    {
        id: 3,
        title: 'US NIMH website',
        link: 'https://www.nimh.nih.gov/health/find-help/index.shtml',
        description: 'The US Government National Institute of Mental Health, guide to finding help.',
    }
];

export default class Resources extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Resources</Text>
                <Text style={styles.loginText}>Hope you find this app helpful!</Text>
                <Text style={styles.loginText}>Have a good day! ^_^</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.leftView}>
                        <TouchableOpacity
                            style={styles.leftBtn}
                            onPress={() => this.props.navigation.navigate('Guide4Screen')}>
                            <Text style={styles.loginText}>Back!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightView}>
                        <TouchableOpacity
                            style={styles.rightBtn}
                            onPress={() =>
                                this.props.navigation.navigate('CapsSurveyScreen')
                            }>
                            <Text style={styles.loginText}>Next!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
});
