import React, {Component} from 'react';
import {Container, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import HeaderComp from './HeaderComp'
import ContentComp from './ContentComp'
import FooterComp from './FooterComp'



export default class ContentContainer extends Component {
    render() {
        return (
            //Provides styles to its children
            <StyleProvider style={getTheme(material)}>
                <Container>
                    {/*// modular header component*/}
                    <HeaderComp/>

                    {/*modular content component*/}
                    <ContentComp/>

                    {/*modular footer component*/}
                    <FooterComp activeTabNum={1}/>

                </Container>
            </StyleProvider>
        );
    }
}