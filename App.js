/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Container} from "native-base";
import ContentContainer from './src/components/HeaderFooter/ContentContainer'



type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

        <Container>
          <ContentContainer/>
        </Container>
    );
  }
}

