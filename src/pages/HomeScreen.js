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
    DrawerLayoutAndroid,
    ListView,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Container from '../components/Container';
import Label from '../components/Label';
import Swipeout from 'react-native-swipeout';
import { FloatingAction } from 'react-native-floating-action';


const SIZE = 50;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class HomeScreen extends Component {
	constructor() {
		super();

        ToastAndroid.show("Home Screen", ToastAndroid.SHORT);
		this.state = {
			isLoading: false,
		};

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(['Action Item 1', 'Action Item 2','Action Item 3', 'Action Item 4', 'Action Item 5', 'Action Item 6']),
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

     renderRow(rowData) {
    let swipeBtns = [{
      text: 'Delete',
      margin: 10,
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.deleteNote(rowData) }
    }];

    return (
      <Swipeout right={swipeBtns}
        autoClose={true}
        backgroundColor= 'transparent'>
        <TouchableHighlight
          underlayColor='rgba(192,192,192,0.6)'
           >
          <View>
            <View style={styles.rowContainer}>
              <Text style={styles.text}> {rowData} </Text>
            </View>

          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  deleteNote(rowData) {
    this.setState({searchText:''});
  }

  viewNote(rowData) {
    this.props.navigator.push({
      component: ViewNote,
      title: rowData.title,
      rightButtonTitle: 'Share',
      onRightButtonPress: () => this.share(rowData.body),
      passProps: {
        noteText: rowData.body,
        noteTitle: rowData.title,
        noteId: this.noteId(rowData),
      }
    });
  }


	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (


	        <View style={{flex: 1, alignItems: 'center'}}>
		        <Text style={{margin: 10, fontSize: 30, textAlign: 'right'}}>My Task List</Text>


	            <ListView
		        dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
                {/*renderRow={(rowData) => <Text style={ styles.text }>{rowData}</Text>}*/}

                <FloatingAction
                   onPress={
			          (name) => {
			            console.log(`selected button: ${name}`);
			          }
			        }
			      />

            </View>
  		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    red: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
     },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth - 20,
        height: SIZE,
        borderRadius: 10,
        zIndex: 99,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#eef',
    },
    circle: {
        height: SIZE,
        width: SIZE,
        marginTop: -SIZE,
        borderRadius: 100,
        backgroundColor: 'orange',
    },
    image: {
        width: 24,
        height: 24,
    }
});

