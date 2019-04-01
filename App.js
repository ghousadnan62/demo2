/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Container} from "native-base";
import HeaderFooter from './src/components/HeaderFooter'
import SplashScreen from './src/components/SplashScreen'


type Props = {};
export default class App extends Component<Props> {

  //setting state from loading mock splash screen
  constructor(props) {
    super(props);
    this.state={isLoading:true}
  }

  //creating a self destruction function
  performTimeDelay = async () => {
    return new Promise((resolve) =>
        setTimeout(
            () => { resolve('result')},
            1500
        )
    );
  }


  //changing state in componentDidMount
  async componentDidMount() {
    const data = await this.performTimeDelay();
    if(data!==null)
    {
      this.setState({isLoading:false})
    }
  }
  render() {

    //Loading mock splash screen
    // if ( this.state.isLoading){
    //   return (<SplashScreen/>)
    // }
    return (
        <Container>
          <HeaderFooter/>
        </Container>
    );
  }
}

