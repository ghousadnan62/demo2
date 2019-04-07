import React, {Component} from 'react';
import {Container,Text,View} from "native-base";



export default class ClothingContainer extends Component {
    render() {
        return (
            <Container>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'Righteous-Regular'
                }}>
                    Clothing
            </Text>


                <View  style={{flex: 1, flexDirection: 'row'}}>

                </View>
            </Container>
        );
    }
}
