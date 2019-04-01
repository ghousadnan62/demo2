import {Card, CardItem, Text} from "native-base";
import {Image, StyleSheet} from "react-native";
import React from "react";

const CardComp = (props) => {
    return(
        <Card
            style={styles.mainCard}>

            <CardItem cardBody style={styles.cardBody}>
                <Image source={props.imgSource}
                       style={styles.cardBodyImg}
                />
            </CardItem>

            <CardItem bordered style={styles.cardFooter}>
                <Text>
                    {props.itemName} {"\n"} {props.designer} {"\n"} {props.price}
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
