import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';
import { Appbar } from "react-native-paper";

// https://www.vectorstock.com/royalty-free-vector/colored-flat-icons-of-emoticonsdifferent-emotions-vector-13779241
// https://www.bootdey.com/react-native-snippet/66/simple-profile-list-ui-example


class HistoryRoute extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "Monday, March 5, 2020", tags:['Mood1', 'Mood2', 'Mood3','Mood4'], message: 'Ate some icecream'},
        {id:2, color:"#FF3714", icon:"https://i.imgur.com/r1uqWbZ.png", date: "Sunday, March 4, 2020", tags:['Mood1', ],message: 'Got corona today'},
        {id:3, color:"#fd7c1a", icon:"https://i.imgur.com/N6d2HMQ.png", date: "Saturday, March 3, 2020", tags:['Mood1', 'Mood2', 'Mood3',],message: 'Hurt my knee'}, 
        {id:4, color:"#fed41c", icon:"https://i.imgur.com/XD8gBGr.png", date: "Friday, March 2, 2020", tags:['Mood1', 'Mood2',],message: 'Forgot to do HW'}, 
        {id:5, color:"#a1df39", icon:"https://i.imgur.com/UTUIdBX.png", date: "Thursday, March 1, 2020", tags:['Mood1', 'Mood2', 'Mood3','Mood4'],message: 'Did good on exam'}, 
        {id:6, color:"#fed41c", icon:"https://i.imgur.com/XD8gBGr.png", date: "Wednesday, February 29, 2020", tags:['Mood1', 'Mood2', 'Mood3', 'Mood4'],message: 'Ate some icecream'}, 
        {id:7, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "Tuesday, February 28, 2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
        {id:8, color:"#FF3714", icon:"https://i.imgur.com/r1uqWbZ.png", date: "Monday, February 27, 2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
        {id:9, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "Sunday, February 26, 2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.message);
  }

  tagClickEventListener = (tagdate) => {
    Alert.alert(tagdate);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  render() {
    return (

      <View style={styles.container}>
              <Appbar.Header>
        <Appbar.Content title="< March 2020 >" />
        </Appbar.Header>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>

              </TouchableOpacity>
            )
          }}/>
      </View>
    );
    }
}

export default HistoryRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  icon:{
    width:30,
    height:30,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:80,
    height:80,
    borderRadius:30,
  },
  date:{
    fontSize:18,
    fontWeight: '400',
    marginLeft:10,
    alignSelf: 'center',
    color: 'grey'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
});   