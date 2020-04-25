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
  FlatList,
  Button
} from 'react-native';
import { Appbar } from "react-native-paper";
import Modal from 'react-native-modal';
import { Picker, DatePicker } from 'react-native-wheel-pick';
// https://www.vectorstock.com/royalty-free-vector/colored-flat-icons-of-emoticonsdifferent-emotions-vector-13779241
// https://www.bootdey.com/react-native-snippet/66/simple-profile-list-ui-example


class HistoryRoute extends React.Component {
        state = {
        isModalVisible: false,
        };
 
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "3/5/2020", tags:['Mood1', 'Mood2', 'Mood3','Mood4'], message: 'Ate some icecream'},
        {id:2, color:"#FF3714", icon:"https://i.imgur.com/r1uqWbZ.png", date: "3/4/2020", tags:['Mood1', ], message: 'Got corona today'},
        {id:3, color:"#fd7c1a", icon:"https://i.imgur.com/N6d2HMQ.png", date: "3/3/2020", tags:['Mood1', 'Mood2', 'Mood3',],message: 'Hurt my knee'}, 
        {id:4, color:"#fed41c", icon:"https://i.imgur.com/XD8gBGr.png", date: "3/2/2020", tags:['Mood1', 'Mood2',], message: 'Forgot to do HW'}, 
        {id:5, color:"#a1df39", icon:"https://i.imgur.com/UTUIdBX.png", date: "3/1/2020", tags:['Mood1', 'Mood2', 'Mood3','Mood4'],message: 'Did good on exam'}, 
        {id:6, color:"#fed41c", icon:"https://i.imgur.com/XD8gBGr.png", date: "2/29/2020", tags:['Mood1', 'Mood2', 'Mood3', 'Mood4'],message: 'Ate some icecream'}, 
        {id:7, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "2/28/2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
        {id:8, color:"#FF3714", icon:"https://i.imgur.com/r1uqWbZ.png", date: "2/27/2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
        {id:9, color:"#23b526", icon:"https://i.imgur.com/1R82UKp.png", date: "2/26/2020", tags:['Mood1', 'Mood2', 'Mood3'],message: 'Ate some icecream'},
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
        <Appbar.Content title="March 2020 " />
        <Appbar.Action icon="calendar" onPress={this.toggleModal} />            
        </Appbar.Header>
        <Modal isVisible={this.state.isModalVisible} backdropColor="black">
          <View style={styles.modal}>
            <Picker
                style={{ backgroundColor: 'white' }}
                selectedValue='March 2020'
                pickerData={['March 2020', 'April 2020', 'February 2020', 'January 2020', 'December 2019', 'November 2019', 'October 2019']}
                onValueChange={value => { }}
                itemSpace={30} // this only support in android
            />
            <Button title="Select Month" onPress={this.toggleModal} />
          </View>
        </Modal>
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
                  <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
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
    flexWrap:'wrap'
  },
  image:{
    width:80,
    height:80,
    borderRadius:30,
  },
  date:{
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 10,
    alignSelf: 'center',
    color: '#eff0f1',
    position: 'absolute',
    height: 120,
    paddingLeft:155,

  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
      modal: {
        backgroundColor: "white",
        // height: 200,
    },
});   