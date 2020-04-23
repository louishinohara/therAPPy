//fourth screen of guide sequence
//plutchik's wheel of emotion input guide

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {withNavigation} from '@react-navigation/compat';

let items = [
  {
    id: '1',
    name: 'acceptance',
  },
  {
    id: '2',
    name: 'admiration',
  },
  {
    id: '3',
    name: 'aggressiveness',
  },
  {
    id: '4',
    name: 'amazement',
  },
  {
    id: '5',
    name: 'anger',
  },
  {
    id: '6',
    name: 'annoyance',
  },
  {
    id: '7',
    name: 'anticipation',
  },
  {
    id: '8',
    name: 'apprehension',
  },
  {
    id: '9',
    name: 'awe',
  },
  {
    id: '10',
    name: 'boredom',
  },
  {
    id: '11',
    name: 'contempt',
  },
  {
    id: '12',
    name: 'disapproval',
  },
  {
    id: '13',
    name: 'disgust',
  },
  {
    id: '14',
    name: 'distraction',
  },
  {
    id: '15',
    name: 'ecstasy',
  },
  {
    id: '16',
    name: 'fear',
  },
  {
    id: '17',
    name: 'grief',
  },
  {
    id: '18',
    name: 'interest',
  },
  {
    id: '19',
    name: 'joy',
  },
  {
    id: '20',
    name: 'loathing',
  },
  {
    id: '21',
    name: 'love',
  },
  {
    id: '22',
    name: 'optimism',
  },
  {
    id: '23',
    name: 'pensiveness',
  },
  {
    id: '24',
    name: 'rage',
  },
  {
    id: '25',
    name: 'remorse',
  },
  {
    id: '26',
    name: 'sadness',
  },
  {
    id: '27',
    name: 'serenity',
  },
  {
    id: '28',
    name: 'submission',
  },
  {
    id: '29',
    name: 'surprise',
  },
  {
    id: '30',
    name: 'terror',
  },
  {
    id: '31',
    name: 'trust',
  },
  {
    id: '32',
    name: 'vigilance',
  },
];

class Guide4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: items,
    };
  }
  FlatListItemSeparator = () => <View style={styles.line} />;

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = this.state.dataSource.findIndex(
      item => data.item.id === item.id,
    );

    this.state.dataSource[index] = data.item;
    items = items.map(item => {
      item.isSelect = false;
      item.selectedClass = styles.list;
      return item;
    });
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  renderItem = data => (
    <TouchableOpacity
      style={[styles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}>
      <Text style={styles.loginText}>{data.item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.loginText}>
            Each day you can input how you're feeling! Use the diagram to narrow
            down how you're feeling and select the corresponding emotion(s) from
            the dropdown like the one below!
          </Text>
          <Image
            style={styles.smol}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plutchik-wheel.svg/1200px-Plutchik-wheel.svg.png',
            }}
          />
          <View style={styles.rowContainer}>
            <View style={styles.leftView}>
              <TouchableOpacity
                style={styles.leftBtn}
                onPress={() => this.props.navigation.navigate('Guide3Screen')}>
                <Text style={styles.loginText}>Back!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightView}>
              <TouchableOpacity
                style={styles.rightBtn}
                onPress={() => this.props.navigation.navigate('Guide5Screen')}>
                <Text style={styles.loginText}>Next!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id}
          extraData={this.state}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(Guide4);

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#c6aac4',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  title: {
    fontSize: 16,
  },
  selected: {backgroundColor: '#FA7B5F'},
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
    marginRight: 10,
    marginLeft: 10,
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
  smol: {
    width: 400,
    height: 400,
  },
});
