import React from 'react';
import {Button, Container, Footer, FooterTab, Icon, Text} from "native-base";

const FooterComp = () => {
    return (

        <Footer>
            <FooterTab>

                <Button active>
                    <Icon name="home"/>
                    <Text>home</Text>
                </Button>

                <Button>
                    <Icon name="briefcase"/>
                    <Text>Shop</Text>
                </Button>

                <Button>
                    <Icon name="ribbon"/>
                    <Text>Designer</Text>
                </Button>

                <Button>
                    <Icon name="star"/>
                    <Text>Wishlist</Text>
                </Button>


            </FooterTab>

        </Footer>
    )
}

export default FooterComp;

