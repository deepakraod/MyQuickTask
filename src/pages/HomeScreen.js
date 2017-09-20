import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
    ToastAndroid,
    ScrollView,
    Text,
    DrawerLayoutAndroid
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Container from '../components/Container';
import Label from '../components/Label';


const SIZE = 40;

export default class HomeScreen extends Component {
	constructor() {
		super();

        ToastAndroid.show("Home Screen", ToastAndroid.SHORT);
		this.state = {
			isLoading: false,
		};
        
		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

     

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

       

		return (

        
	      <View style={{flex: 1, alignItems: 'center'}}>
	        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
	        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
	      </View>
          
       
            

             
               
            
           
		);
	}
}

