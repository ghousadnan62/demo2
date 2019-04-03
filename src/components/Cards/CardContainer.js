import React from 'react';
import {ScrollView} from 'react-native';
import {
    Container,
} from 'native-base';
import CardComp from './CardComp'
import CardContainerHeader from './CardContainerHeader'
import ProductsCards from './data'
import ButtonComp from "../ContentContainerComp/ButtonComp";
import {Actions} from "react-native-router-flux";


/* Contains and handles all the cards
* Requires following Props
* sectionName
* */

const CardContainer = (props) => {
    return (

        <Container
            style={{
                marginTop: 10,
                height: 430,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <CardContainerHeader name={props.sectionName}/>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                {
                    ProductsCards.map(productCard => {
                            return (
                                <CardComp key = {productCard.id}
                                          imgSource = {productCard.imgSource}
                                          itemName={productCard.itemName}
                                          designerName={productCard.designerName}
                                          price={productCard.price}/>
                            )
                        }

                    )
                }

            </ScrollView>
            <ButtonComp title={'Shop Now'}
                        onPressAction = {() => Actions.dummyScreen()}/>
        </Container>

    );
};

export default CardContainer;