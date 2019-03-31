import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        const viewStyles = [
            {
                background: 'white', alignItems: 'center', justifyContent: 'center', flex:1
            }
        ];
        const textStyle = {
            color:'black',
            fontSize:40,
            fontWeight: 'bold'
        };

        return (
            <View style={viewStyles}>
                <Text style={textStyle}>
                    Farfetch
                </Text>
            </View>
        );
    }
}