/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import Splash from './src/pages/Splash';
import HomeScreen from './src/pages/HomeScreen';
import Container from './src/components/Container';

export default class MyQuickTask extends Component {
  render() {
    return (
       
      
        <Router>

          <Scene key="root">

            <Scene key="Splash"
              component={Splash}
              animation='fade'
              initial={true}
              hideNavBar={true}
            />

            <Scene key="HomeScreen"
              component={HomeScreen}
              animation='fade'
              initial={false}
              hideNavBar={true}
            />
          </Scene>
        </Router>
       

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyQuickTask', () => MyQuickTask);
