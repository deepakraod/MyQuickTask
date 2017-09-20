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
  View,
  ToastAndroid,
  Alert,
  Button
} from 'react-native';

import NFC, {NfcDataType, NdefRecordType} from "react-native-nfc";
import {StackNavigator,} from 'react-navigation';
//ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
NFC.addListener((payload) => {
// ToastAndroid.show('A tag appeared now !', ToastAndroid.SHORT);
    switch (payload.type) {
        
        case NfcDataType.NDEF:
            let messages = payload.data;
            for (let i in messages) {
                let records = messages[i];
                for (let j in records) {
                    let r = records[j];
                    if (r.type === NdefRecordType.TEXT) {
						ToastAndroid.show('text appeared now !', ToastAndroid.SHORT);
                       
                        // do something with the text data 
                    } else {
                       /* ToastAndroid.show('in else appeared now !', ToastAndroid.SHORT);
					   ToastAndroid.show(
                            `TEXT tag of type ${r.type} with data ${r.data}`,
                            ToastAndroid.SHORT
                        ); */
						
						Alert.alert('NFC Details', 'Id : '+ r.id+ "\n"+ 'Type : '+r.type +"\n" + 'Data :'+ r.data ,
						[
							{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
							{text: 'OK', onPress: () => console.log('OK Pressed')},
						  ],
						{ cancelable: false }
						)
                    }
                }
            }
            break;
            
        case NfcDataType.TAG:
           //ToastAndroid.show('A 1 appeared now !', ToastAndroid.SHORT);
		   ToastAndroid.show(
                `The TAG is non-NDEF:\n\n${payload.data.description}`,
                ToastAndroid.SHORT
            );
            
            break;
    }
 
});

 function listener(payload){
    // TODO
	
}
//NFC.addListener(listener);
 
 export default class TagTap extends Component {

 static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
  });
	
  render() {

  //const { navigate } = this.props.navigation;
  const navigate = ({ navigation }) => {(this.props.navigator.push({name:'Second',})), ToastAndroid.show('Inside Navigate!'+  navigate, ToastAndroid.SHORT)};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to NFC Tag detection Using React Native!
        </Text>
        <Button onPress={() => { 
		      //componentDidMount(){
		      ToastAndroid.show('Please Scan an NFC', ToastAndroid.SHORT);
			 //ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
			    NFC.addListener(listener);
			 //ToastAndroid.show('A pikachu 2 appeared nearby !', ToastAndroid.SHORT);
		 }//Alert.alert('You tapped the button!')
		 }//}
		  title="Click Me"
        />

        <Button
          onPress={() =>{ navigate('Second'), ToastAndroid.show('Chat Button Clicked..', ToastAndroid.SHORT)}}
         //onPress={() => this.props.navigation.navigate('Second')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}


class SecondScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat with Lucy',
  });
  render() {
    return (
      <View>
        <Text>Chat with Deeps</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
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

const SimpleApp = StackNavigator({
  Home: { screen: AwesomeProject },
  Second: { screen: SecondScreen },
});
