import React from 'react';
import {Image, View} from 'react-native'
import {Text} from "native-base";
import ClothingContainer from './ClothingContainer'
import ShoesContainer from './ShoesContainer'

const WomenTab = () => {
    return (
        <View>
            <Image
                source={{uri: 'https://www.fabafterfifty.co.uk/wp-content/uploads/2015/01/JD_Williams_07_GROUP_1441_4Dec14_4Dec14.jpg'}}
                style={{width: '100%', height: 350}}/>

            <View style={{
                margin: 10
            }}/>

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10
            }}>
                Clothing
            </Text>

            <ClothingContainer/>

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Shoes
            </Text>

            <ShoesContainer/>



        </View>
    );
};

export default WomenTab;