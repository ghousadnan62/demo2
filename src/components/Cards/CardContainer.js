import React from 'react';
import {ScrollView} from 'react-native';
import {
    Container,
    Text, Button
} from 'native-base';
import CardComp from './CardComp'
import CardContainerHeader from './CardContainerHeader'
import ProductsCards from './data'



/* Contains and handles all the cards
* Requires following Props
* sectionName
* */

const CardContainer = (props) => {
    return (

        <Container
            style={{
                marginTop: 10,
                height: 400,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <CardContainerHeader name={props.sectionName}/>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                {
                    ProductsCards.map(productCard => {
                            return (
                                <CardComp imgSource = "../../Resources/Images/1.jpg"
                                          itemName={productCard.itemName}
                                          designerName={productCard.designerName}
                                          price={productCard.price}/>
                            )
                        }

                    )
                }

            </ScrollView>

            <Button vertical style={{color: 'white', alignSelf: 'center', marginTop: 25, marginBottom: 20}}>
                <Text>Shop Now</Text>
            </Button>

        </Container>

    );
};

export default CardContainer;