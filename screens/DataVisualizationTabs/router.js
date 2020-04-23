import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import HomeScreen from "./chart";  
import ProfileScreen from "./temp";  
import SettingScreen from "./settings";  
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,  
        Settings: SettingScreen,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'red'  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);  