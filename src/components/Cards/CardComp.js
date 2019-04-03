import {Card, CardItem, Container} from "native-base";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

/*Component builds a card and
requires following props
* imgSource
* itemName
* designerName
* price
* */

const CardComp = (props) => {
    return (
        <Card
            style={styles.mainCard}>

            <CardItem cardBody style={styles.cardBody}>
                <Image source={{uri: props.imgSource}}
                       style={styles.cardBodyImg}
                />
            </CardItem>

            <CardItem bordered style={styles.cardFooter}>

                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        {props.designerName}
                    </Text>

                    <Text style={{
                        textAlign: 'center'
                    }}>
                        {props.shortDescription}
                    </Text>


                    <Text style={{
                        textAlign: 'center'
                    }}>
                        ${props.price}
                    </Text>
                </View>
            </CardItem>
        </Card>
    )

};

export default CardComp;

// styling of the card
const styles = StyleSheet.create({
    mainCard: {
        height: 270,
        width: 200,
        marginLeft: 20
    },

    cardBody: {
        flex: 3
    },

    cardBodyImg: {
        height: 200,
        flex: 1
    },

    cardFooter: {
        flex: 1
    }

});
