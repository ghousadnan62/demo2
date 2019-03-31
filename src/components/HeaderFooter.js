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
    Text
} from 'native-base';
import Card from './Cards/Card'
import {Image} from "react-native";



import dataCustom from "./data";


export default class HeaderFooter extends Component {
    render() {
        return (

            <Container>
                <Header androidStatusBarColor={'#000'}
                        style={{
                            backgroundColor: 'white',
                            elevation: 4,
                            zIndex: 1,
                            fontWeight: 'bold'

                        }} >
                    <Body>
                        <Title style={{color: 'black'}}>
                            FARFETCH
                        </Title>
                    </Body>


                    <Right>
                        <Button transparent>
                            <Icon name='cart' style={{color:'black'}}/>
                        </Button>
                    </Right>



                </Header>


                <Content style={{zIndex:-1}}>
                    <Image source={require('../Resources/Images/5.jpg')} style={{width: '100%', height: 350}}/>
                    <Card name="Men Section"/>
                    <Card name="Kids Section"/>
                </Content>


                <Footer style={{backgroundColor: 'white'}}>

                    <FooterTab style={{backgroundColor: 'white'}}>

                        <Button vertical>
                            <Icon name="home" style={{color:'black'}}/>
                            <Text style={{color:'black'}}>home</Text>
                        </Button>

                        <Button vertical>
                            <Icon name="briefcase" style={{color:'black'}}/>
                            <Text style={{color:'black'}}>Shop</Text>
                        </Button>

                        <Button vertical>
                            <Icon name="ribbon" style={{color:'black'}}/>
                            <Text style={{color:'black'}}>Designer</Text>
                        </Button>

                        <Button vertical>
                            <Icon name="star" style={{color:'black'}}/>
                            <Text style={{color:'black'}}>Wishlist</Text>
                        </Button>


                    </FooterTab>

                </Footer>

            </Container>

        );
    }
}