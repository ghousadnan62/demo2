import React from 'react';
import {View, ScrollView} from 'react-native'
import CardComp from "../../components/Cards/CardComp";





export default class ShopNowScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopNowScreenProductDetails: [],
            baseAddress: "http://estore.nfasoft.com"
        };
    }
    componentDidMount(){
        fetch(this.state.baseAddress + "/api/products.php")
            .then(response => response.json())
            .then((responseJson)=> {
                console.log(responseJson);
                this.setState({
                    shopNowScreenProductDetails: responseJson.response.data
                })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }




    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, HEIGHT: '50%', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        this.state.shopNowScreenProductDetails.map(productCard => {
                                return (
                                    <CardComp key={productCard.id}
                                              imgSource={'https://images.pexels.com/photos/1100779/pexels-photo-1100779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}
                                              designerName={productCard.product_name}
                                              shortDescription = {productCard.short_description}
                                              price={productCard.offer_price}
                                              cardHeight={270}
                                              cardWidth={'48%'}
                                              leftMargin={4}
                                    />
                                )
                            }
                        )
                    }
                </View>

            </ScrollView>


        );
    };
}