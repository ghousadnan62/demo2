/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Container} from "native-base";
import HeaderFooter from './src/components/HeaderFooter'
import SplashScreen from './src/components/SplashScreen'


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state={isLoading:true}
  }

  render() {

    if ( this.state.isLoading){
      return (<SplashScreen/>)
    }
    return (
        <Container>
          <HeaderFooter/>
        </Container>



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
