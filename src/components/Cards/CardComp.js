import {Card, CardItem, Container} from "native-base";
import {Image, StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";
import React from "react";
import {Actions} from "react-native-router-flux";
/*Component builds a card and
requires following props
---------------------------
* imgSource
* itemName
* designerName
* price
--------------------------
cardHeight
cardWidth
leftMargin
* */

const CardComp = (props) => {
    return (
        <TouchableOpacity onPress={()=> Actions.productDetail() }>
            <Card
                pointerEvents="none"
                style={{
                    height: props.cardHeight,
                    width: props.cardWidth,
                    marginLeft: props.leftMargin
                }}>

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
        </TouchableOpacity>
    )

};

export default CardComp;

// styling of the card
const styles = StyleSheet.create({
    /*mainCard: {
        height: 270,
        width: 200,
        /!*marginLeft: 20*!/
    },*/

    cardBody: {
        flex: 3,
        overflow: 'hidden'
    },

    cardBodyImg: {
        height: 200,
        flex: 1
    },

    cardFooter: {
        flex: 1
    }

});
