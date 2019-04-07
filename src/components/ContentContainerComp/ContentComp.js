import {Image} from "react-native";
import {Content} from "native-base";
import HomeScreenCardContainer from '../Cards/HomeScreenCardContainer'
import React from "react";

const ContentComp = (props) => {
    return (
        <Content>
            <Image source={require('../../Resources/Images/5.jpg')}
                   style={{width: '100%', height: 350}}/>

            <HomeScreenCardContainer
                sectionName="Men Section"

            />

            <HomeScreenCardContainer
                sectionName="Kids Section"
            />
        </Content>
    )
};

export default ContentComp