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

var radio_props = [
  {label: '0', value: 0},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
];

const survey = [
  {
    id: 'q1',
    text: 'I get sad or angry when I think of my family',
  },
  {
    id: 'q2',
    text: 'I am shy around others',
  },
  {
    id: 'q3',
    text: 'There are many things I am afraid of',
  },
  {
    id: 'q4',
    text: 'My heart races for no good reason',
  },
  {
    id: 'q5',
    text: 'I feel out of control when I eat',
  },
  {
    id: 'q6',
    text: 'I enjoy my classes',
  },
  {
    id: 'q7',
    text: 'I feel that my family loves me',
  },
  {
    id: 'q8',
    text: 'I feel disconnected from myself',
  },
  {
    id: 'q9',
    text: "I don't enjoy being around people as much as I used to",
  },
  {
    id: 'q10',
    text: 'I feel isolated and alone',
  },
  {
    id: 'q11',
    text: 'My family gets on my nerves',
  },
  {
    id: 'q12',
    text: 'I lose touch with reality',
  },
  {
    id: 'q13',
    text: 'I think about food more than I would like to',
  },
  {
    id: 'q14',
    text: 'I am anxious that I might have a panic attack while in public',
  },
  {
    id: 'q15',
    text: 'I feel confident that I can succeed academically',
  },
  {
    id: 'q16',
    text: 'I become anxious when I have to speak in front of audiences',
  },
  {
    id: 'q17',
    text: 'I have sleep difficulties',
  },
  {
    id: 'q18',
    text: 'My thoughts are racing',
  },
  {
    id: 'q19',
    text: 'I am satisfied with my body shape',
  },
  {
    id: 'q20',
    text: 'I feel worthless',
  },
  {
    id: 'q21',
    text: 'My family is basically a happy one',
  },
  {
    id: 'q22',
    text: 'I am dissatisfied with my weight',
  },
  {
    id: 'q23',
    text: 'I feel helpless',
  },
  {
    id: 'q24',
    text: 'I use drugs more than I should',
  },
  {
    id: 'q25',
    text: 'I eat too much',
  },
  {
    id: 'q26',
    text: 'I drink alcohol frequently',
  },
  {
    id: 'q27',
    text: 'I have spells of terror or panic',
  },
  {
    id: 'q28',
    text: 'I am enthusiastic about life',
  },
  {
    id: 'q29',
    text: "When I drink alcohol I can't remember what happened",
  },
  {
    id: 'q30',
    text: 'I feel tense',
  },
  {
    id: 'q31',
    text: "When I start eating I can't stop",
  },
];

export default class CapsSurvey extends Component {
  state = {
    q1: -1,
    q2: -1,
    q3: -1,
    q4: -1,
    q5: -1,
    q6: -1,
    q7: -1,
    q8: -1,
    q9: -1,
    q10: -1,
    q11: -1,
    q12: -1,
    q13: -1,
    q14: -1,
    q15: -1,
    q16: -1,
    q17: -1,
    q18: -1,
    q19: -1,
    q20: -1,
    q21: -1,
    q22: -1,
    q23: -1,
    q24: -1,
    q25: -1,
    q26: -1,
    q27: -1,
    q28: -1,
    q29: -1,
    q30: -1,
    q31: -1,
  };

  render() {
    let radioFormArr;
    radioFormArr = survey.map(buttonInfo => (
      <View>
        <Text style={styles.loginText}>{buttonInfo.text}</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            this.setState({[buttonInfo.id]: value});
          }}
          formHorizontal={true}
          labelHorizontal={false}
        />
      </View>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Initial Survey based on CAPS form</Text>
        <ScrollView>{radioFormArr}</ScrollView>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('EmotionWheelScreen')}>
          <Text style={styles.loginText}>To Mood Input</Text>
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
    backgroundColor: '#ff666b',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    // padding:20,
  },
});
