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
    Screen1:{screen:UserLogin,
        navigationOptions: {
            header: null,
          }},
    Screen2:{screen:HomeScreen,
        navigationOptions: {
            header: null,
          }},
}
);

export default Navigation;


