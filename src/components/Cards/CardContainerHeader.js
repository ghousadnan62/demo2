import {View} from "react-native";
import {Text} from "native-base";
import React from "react";

/* Creates header for card container
* Receives following properties
* name
* */

const CardContainerHeader = (props) => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                alignSelf: 'center',
                marginBottom: 20}}>
                {props.name}
            </Text>
        </View>
    )
};


export default CardContainerHeader;
