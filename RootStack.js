//establishing rootstack for screen navigation

import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount';
import ForgotPassword from './Login/ForgotPassword';
import Guide1 from './Login/Guide1';
import Guide2 from './Login/Guide2';
import Guide3 from './Login/Guide3';
import Guide4 from './Login/Guide4';
import Guide5 from './Login/Guide5';
import EmotionWheel from './Login/EmotionWheel';
import CapsSurvey from './Login/CapsSurvey';

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
    CapsSurveyScreen: {screen: CapsSurvey},
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

export default RootStack;
