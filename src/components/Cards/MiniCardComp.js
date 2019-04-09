import {Card, CardItem, Container} from "native-base";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

/*Component builds a card and
requires following props
---------------------------
* imgSource
* catagoryName
--------------------------
cardHeight
cardWidth
Margin
* */
const MiniCardComp = (props) => {
    return (
        <Card
            style={{
                height: props.cardHeight,
                width: props.cardWidth,
                margin: props.Margin,
                overflow:'hidden'
            }}>

            <CardItem cardBody style={{flex:15}}>
                <Image source={{uri: props.imgSource}}
                       style={{
                            height:160,
                           flex:2
                       }}
                />
            </CardItem>

            <CardItem bordered style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View>
                    <Text style={{
                        fontWeight:'bold'
                    }}>z
                        {props.catagoryName}
                    </Text>
                </View>
            </CardItem>
        </Card>
    )

};

export default MiniCardComp;