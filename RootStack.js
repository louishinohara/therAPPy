// written by: Ariela Chomski
// added to by: Louis Shinohara
//establishing rootstack for screen navigation

import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import Login from './screens/Login/Login';
import CreateAccount from './screens/Login/CreateAccount';
import ForgotPassword from './screens/Login/ForgotPassword';
import Guide1 from './screens/Login/Guide1';
import Guide2 from './screens/Login/Guide2';
import Guide3 from './screens/Login/Guide3';
import Guide4 from './screens/Login/Guide4';
import Guide5 from './screens/Login/Guide5';
import EmotionWheel from './screens/Login/EmotionWheel';
import BottomTabs from './screens/bottomTabs';
import CapsSurvey1 from './screens/Login/CapsSurveys/CapsSurvey1';
import CapsSurvey2 from "./screens/Login/CapsSurveys/CapsSurvey2";
import CapsSurvey3 from "./screens/Login/CapsSurveys/CapsSurvey3";
import CapsSurvey4 from "./screens/Login/CapsSurveys/CapsSurvey4";
import CapsSurvey5 from "./screens/Login/CapsSurveys/CapsSurvey5";
import CapsSurvey6 from "./screens/Login/CapsSurveys/CapsSurvey6";
import CapsSurvey7 from "./screens/Login/CapsSurveys/CapsSurvey7";
import CapsSurvey8 from "./screens/Login/CapsSurveys/CapsSurvey8";
import CapsSurvey9 from "./screens/Login/CapsSurveys/CapsSurvey9";
import CapsSurvey10 from "./screens/Login/CapsSurveys/CapsSurvey10";
import CapsSurvey11 from "./screens/Login/CapsSurveys/CapsSurvey11";
import CapsSurvey12 from "./screens/Login/CapsSurveys/CapsSurvey12";
import CapsSurvey13 from "./screens/Login/CapsSurveys/CapsSurvey13";
import Resources from "./screens/Login/Resources";
import MoodWheel from "./screens/Login/MoodWheel";
import SettingsRoute from "./screens/tabScreens/SettingsRoute";

const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    LoginScreen: {screen: Login},
    CreateAccountScreen: {screen: CreateAccount},
    ForgotPasswordScreen: {screen: ForgotPassword},
    Guide1Screen: {screen: Guide1},
    Guide2Screen: {screen: Guide2},
    Guide3Screen: {screen: Guide3},
    Guide4Screen: {screen: Guide4},
    Guide5Screen: {screen: Guide5},
    EmotionWheelScreen: {screen: EmotionWheel},
      CapsSurvey1Screen: {screen: CapsSurvey1},
      CapsSurvey2Screen: {screen: CapsSurvey2},
      CapsSurvey3Screen: {screen: CapsSurvey3},
      CapsSurvey4Screen: {screen: CapsSurvey4},
      CapsSurvey5Screen: {screen: CapsSurvey5},
      CapsSurvey6Screen: {screen: CapsSurvey6},
      CapsSurvey7Screen: {screen: CapsSurvey7},
      CapsSurvey8Screen: {screen: CapsSurvey8},
      CapsSurvey9Screen: {screen: CapsSurvey9},
      CapsSurvey10Screen: {screen: CapsSurvey10},
      CapsSurvey11Screen: {screen: CapsSurvey11},
      CapsSurvey12Screen: {screen: CapsSurvey12},
      CapsSurvey13Screen: {screen: CapsSurvey13},
      ResourcesScreen: {screen: Resources},
      MoodWheelScreen: {screen: MoodWheel},
    BottomTabs : {
        screen:BottomTabs,
        navigationOptions: {
        headerShown: false,
        indepdendent: true,
     },} ,
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

export default RootStack;
