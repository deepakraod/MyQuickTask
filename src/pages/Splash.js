import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ToastAndroid,
  Dimensions
} from 'react-native';


import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import HomeScreen from './HomeScreen';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Splash extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: false,
        };

       
    }

	componentDidMount() {
    setTimeout( () => {
     this.setTimePassed();
    },2000);
    }

	setTimePassed() {
	   ToastAndroid.show("Time Expired!", ToastAndroid.SHORT);

	            Actions.HomeScreen();
	}
  
  render() {
    return (
            <ScrollView style={styles.scroll}>
           
	            <Image
                style={ styles.image }

	            source={require('../img/splash.png')}
	            />
                </ScrollView>

             


    );
        
  }

  press(){
    ToastAndroid.show('Hey you clicked me !', ToastAndroid.SHORT);
  }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 1
    },
    image: {
    width: deviceWidth,
    height: deviceHeight,
    alignSelf: "center"
    }

});