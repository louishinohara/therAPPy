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
import CapsSurvey from './screens/Login/CapsSurvey';
import BottomTabs from './screens/bottomTabs'

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
