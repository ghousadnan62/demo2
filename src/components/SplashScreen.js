import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Spinner} from 'native-base';
export default class SplashScreen extends Component {
    render() {
        const viewStyles = [
            {
                background: 'white', alignItems: 'center', justifyContent: 'center', flex:1
            }
        ];
        const textStyle = {
            color:'black',
            fontSize:70,
            fontWeight: 'bold'
        };

        return (
            <View style={viewStyles}>
                <Text style={textStyle}>
                    Farfetch
                </Text>
                <Spinner color='black'/>
            </View>
        );
    }
}