import * as React from 'react';
import { View, StyleSheet, Image, Button, ScrollView,Dimensions,ImageBackground,Platform } from "react-native";
import { Avatar, Card, Title, Paragraph,BottomNavigation, Text  } from 'react-native-paper';
import { Block,theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

// import {Images } from '../constants';
import {HeaderHeight} from "../../constants/utils"
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;


class ProfileRoute extends React.Component {
    render() {
        return (
<Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri:'https://images.unsplash.com/photo-1512529920731-e8abaea917a5?fit=crop&w=840&q=80'}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>Rachel Brown</Text>
                <Block row space="between">
                  <Block row>
                    <Block middle style={styles.pro}>
                      <Text size={16} color="white">Pro</Text>
                    </Block>
                    <Text color="white" size={16} muted style={styles.seller}>Seller</Text>
                    {/* <Text size={16} color={materialTheme.COLORS.WARNING}>
                      {/* 4.8 <Icon name="shape-star" family="GalioExtra" size={14} /> */}
                    {/* </Text> */}
                  </Block>
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      {/* <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} /> */}
                      {` `} Los Angeles, CA
                      </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>36</Text>
                <Text muted size={12}>Streak</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>5</Text>
                <Text muted size={12}>Text</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>2</Text>
                <Text muted size={12}>Text</Text>
              </Block>
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text size={16}>More Text</Text>
              <Text size={12} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('Home')}>Navigation Button</Text>
            </Block>
            {/* <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
                {Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}  
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block>
            </Block> */}
          </ScrollView>
        </Block>
      </Block>);
    }
    }

export default ProfileRoute;
const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    // backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
