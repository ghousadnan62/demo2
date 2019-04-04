import React from 'react';
import {Button, Footer, FooterTab, Icon, Text} from "native-base";
import {Actions} from "react-native-router-flux";



const FooterComp = () => {
    return (

        <Footer>
            <FooterTab style={{
                display: 'flex'
            }}>

                <Button active onPress={()=>Actions.homeScreen()}>
                    <Icon name="home"/>
                    <Text>home</Text>
                </Button>

                <Button onPress={()=>Actions.shopScreen()}>
                    <Icon name="briefcase"/>
                    <Text>Shop</Text>
                </Button>


                <Button onPress={()=>Actions.designerScreen()}>
                    <Icon name="ribbon"/>
                    <Text>Designer</Text>
                </Button>

                <Button onPress={()=>Actions.wishlistScreen()}>
                    <Icon name="star"/>
                    <Text>Wishlist</Text>
                </Button>

                <Button onPress={()=>Actions.accountScreen()}>
                    <Icon name="person"/>
                    <Text>Me</Text>
                </Button>

            </FooterTab>

        </Footer>
    )
}

export default FooterComp;

