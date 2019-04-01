import {Image} from "react-native";
import {Content} from "native-base";
import Card from '../Cards/Card'
import React from "react";

const ContentComp = () => {
    return (
        <Content>
            <Image source={require('../../Resources/Images/5.jpg')}
                   style={{width: '100%', height: 350}}/>
            <Card name="Men Section"/>
            <Card name="Kids Section"/>
        </Content>
    )
};

export default ContentComp