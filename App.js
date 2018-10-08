/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import UserLogin from './src/UserLogin';
import HomeScreen from './src/HomeScreen';




const Navigation = StackNavigator({
    Screen1:{screen:UserLogin},
    Screen2:{screen:HomeScreen},
},
{
  initialRouteName: 'Screen1',

  navigationOptions: {
    title: 'My Initial Scene',
    textAlign:'center',
    headerStyle: {
      backgroundColor: 'blue'
    }, headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
   
  }
}
);

export default Navigation;


