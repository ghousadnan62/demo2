
import {Body, Button, Header, Icon, Right, Title} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";


const HeaderComp = () => {
    return (

        <Header>
            <StatusBarManger/>

            <Body>
                <Title>
                    Farfetch
                </Title>
            </Body>


            <Right>
                <Button transparent>
                    <Icon name='cart' style={{color: 'black'}}/>
                </Button>
            </Right>

        </Header>
    )
};

export default HeaderComp;