import React from 'react';
import {Button, Footer, FooterTab, Icon, Text} from "native-base";

const FooterComp = () => {
    return (

        <Footer>
            <FooterTab style={{
                display: 'flex'
            }}>

                <Button active uppercase={false}>
                    <Icon name="home"/>
                    <Text>home</Text>
                </Button>

                <Button uppercase={false}>
                    <Icon name="briefcase"/>
                    <Text>Shop</Text>
                </Button>


                <Button uppercase={false}>
                    <Icon name="ribbon"/>
                    <Text>Designer</Text>
                </Button>

                <Button uppercase={false}>
                    <Icon name="star"/>
                    <Text>Wishlist</Text>
                </Button>

                <Button uppercase={false}>
                    <Icon name="person"/>
                    <Text>Me</Text>
                </Button>

            </FooterTab>

        </Footer>
    )
}

export default FooterComp;

