import {Image} from "react-native";
import {Content} from "native-base";
import CardContainer from '../Cards/CardContainer'
import React from "react";
import ButtonComp from './ButtonComp';

const ContentComp = () => {
    return (
        <Content>
            <Image source={require('../../Resources/Images/5.jpg')}
                   style={{width: '100%', height: 350}}/>
            <CardContainer sectionName="Men Section"/>

            <CardContainer sectionName="Kids Section"/>
        </Content>
    )
};

export default ContentComp