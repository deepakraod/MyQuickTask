import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ToastAndroid,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SecondScreen from './SecondScreen';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

const deviceWidth = Dimensions.get('window').width;

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: false,
        };

       
    }

	doLogin() {
	    /*try {
	      let response = fetch('http://www.mocky.io/v2/599d14462900001b072111e8');
	      let responseJson = response.json();
          console.message(responseJson.message);
	      return responseJson.message;
	    } catch(error) {
	      console.error(error);
	    }*/
        
            
	        return fetch('http://www.mocky.io/v2/599d14462900001b072111e8')
	      .then((response) => response.json())
	      .then((responseJson) => {
            ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);

            Actions.secondScreen();
	        return responseJson.message;
	      })
	      .catch((error) => {
	        console.error(error);
	      });
	  }
  
  render() {
    return (
        <ScrollView style={styles.scroll}>
            <Container>
	            <Image
                style={ styles.image }

	            source={require('../img/logo_signin.png')}
	            />
            </Container>
            <Container>
                <Label text="Username or Email" />
                <TextInput
                    //style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    //style={styles.textInput}
                />
                <Button 
                    label="Forgot Password" 
                    styles={{button: styles.alignRight, label: styles.label}} 
                    onPress={this.press.bind(this)} />
                    <Container>
                    <Button 
                        label="Login" 
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        onPress={this.doLogin.bind(this)} 
                        />
                </Container>
            

            <View alignSelf="center">

            <Text alignSelf="center">  Or login with</Text>
                    <View style={styles.inline} >
                        
                        {/*<Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                        Facebook
                        </Icon.Button>
                        <Icon.Button backgroundColor="#dd4b39" onPress={this.loginWithFacebook}>
                        Google
                        </Icon.Button>
                        <Icon.Button backgroundColor="#dd4b39" onPress={this.loginWithFacebook}>
                        Twitter
                        </Icon.Button>*/}

                        <TouchableHighlight onPress={this.loginWithFacebook}>
					      <Image
					        style={styles.button}
					        source={require('../img/ic_signin_facebook.png')}
					      />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.loginWithGplus}>
                          <Image
                            style={styles.button}
                            source={require('../img/ic_signin_gplus.png')}
                          />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.loginWithTwitter}>
                          <Image
                            style={styles.button}
                            source={require('../img/ic_signin_twitter.png')}
                          />
                        </TouchableHighlight>

                    </View>
               
            </View>
            </Container>
   
            <View style={styles.footer}>
                <Container>
                <Button 
                    label="DONT'T HAVE AN ACCOUNT ? SIGN UP" 
                    styles={{button: styles.alignRight, label: styles.label}} 
                    onPress={this.press.bind(this)} />
            </Container>
            </View>
             </ScrollView>

           // <Router>
          //<Scene key="root">
          //  <Scene key="secondScreen"
          //    component={SecondScreen}
          //    animation='fade'
          //    hideNavBar={true}
          //  />
         // </Scene>
        //</Router>

       


    );
  }

  press(){
    ToastAndroid.show('Hey you clicked me !', ToastAndroid.SHORT);
  }

  loginWithFacebook(){
    ToastAndroid.show('Login with Facebook !', ToastAndroid.SHORT);
  }

  loginWithGplus(){
    ToastAndroid.show('Login with Google !', ToastAndroid.SHORT);
  }

  loginWithTwitter(){
    ToastAndroid.show('Login with Twitter !', ToastAndroid.SHORT);
  }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFF',
        padding: 20
    },
    image: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    alignSelf: "center"
    },
    btn: {
    width: 50,
    height: 50,
    },
    label: {
        color: '#0d8898',
        fontSize: 16
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 18,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 18,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#1679B9'
    },
    transparentButton: {
        marginTop: 10,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    footer: {
       marginTop: 10
    }
});