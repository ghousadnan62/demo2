import StatusBarManger from "./StatusBarManager";
import {Body, Button, Header, Icon, Right, Title} from "native-base";
import React from "react";


const HeaderComp = () => {
    return (

        <Header>
            <StatusBarManger/>
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
    )
};

export default HeaderComp;