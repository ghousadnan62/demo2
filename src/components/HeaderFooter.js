import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Right,
    Body,
    Icon,
    Text,
    StyleProvider
} from 'native-base';
import Card from './Cards/Card'
import {Image} from "react-native";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material'


import dataCustom from "./data";


export default class HeaderFooter extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Body>
                            <Title>
                                FARFETCH
                            </Title>
                        </Body>


                        <Right>
                            <Button transparent>
                                <Icon name='cart' style={{color: 'black'}}/>
                            </Button>
                        </Right>

                    </Header>


                    <Content>
                        <Image source={require('../Resources/Images/5.jpg')} style={{width: '100%', height: 350}}/>
                        <Card name="Men Section"/>
                        <Card name="Kids Section"/>
                    </Content>


                    <Footer>


                        <FooterTab>

                            <Button active>
                                <Icon name="home"/>
                                <Text>home</Text>
                            </Button>

                            <Button >
                                <Icon name="briefcase"/>
                                <Text>Shop</Text>
                            </Button>

                            <Button >
                                <Icon name="ribbon" />
                                <Text>Designer</Text>
                            </Button>

                            <Button >
                                <Icon name="star"/>
                                <Text>Wishlist</Text>
                            </Button>


                        </FooterTab>

                    </Footer>

                </Container>
            </StyleProvider>
        );
    }
}