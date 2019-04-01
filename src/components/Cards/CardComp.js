import {Card, CardItem, Text} from "native-base";
import {Image, StyleSheet} from "react-native";
import React from "react";

/*Component builds a card and
requires following props
* imgSource
* itemName
* designerName
* price
* */

const CardComp = (props) => {
    return(
        <Card
            style={styles.mainCard}>

            <CardItem cardBody style={styles.cardBody}>
                <Image source={require("../../Resources/Images/1.jpg")}
                       style={styles.cardBodyImg}
                />
            </CardItem>

            <CardItem bordered style={styles.cardFooter}>
                <Text>
                    {props.itemName} {"\n"} {props.designerName} {"\n"} {props.price}
                    {}
                </Text>

            </CardItem>
        </Card>
    )
};

export default CardComp;

// styling of the card
const styles = StyleSheet.create({
    mainCard:{
        height: 270,
        width: 200,
        marginLeft: 20
    },

    cardBody:{
        flex:3
    },

    cardBodyImg:{
        height: 200,
        flex:1
    },

    cardFooter:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }

});
