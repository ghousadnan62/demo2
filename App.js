/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Container} from "native-base";
import HeaderFooter from './src/components/HeaderFooter/HeaderFooter'



type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

        <Container>
          <HeaderFooter/>
        </Container>
    );
  }
}

