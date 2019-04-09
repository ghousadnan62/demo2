import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Button, Content, Accordion, Container, Icon} from "native-base";

const dataArray = [
    {title: "Description", content: "Lorem ipsum dolor sit amet"},
    {title: "Size & Fit", content: "Lorem ipsum dolor sit amet"},
    {title: "Composition & Care", content: "Lorem ipsum dolor sit amet"},
    {title: "Shipping & Free Return", content: "Lorem ipsum dolor sit amet"},
    {title: "Designer - Emporio Armani", content: "Lorem ipsum dolor sit amet"}
];

export default class ProductDetail extends React.Component {

    render() {
        return (

            <Container>
                <View style={{height: '45%'}}>
                    <ImageSlider
                        autoPlayWithInterval={3000}
                        images={[
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9'
                        ]}
                    />
                </View>

                <View>
                    <Text>
                        New Season
                    </Text>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <Text style={{fontWeight: 'bold'}}>
                        EMPORIO ARMANI
                    </Text>

                    <Text>
                        $500
                    </Text>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <Text>
                        logo printed bomber shirt
                    </Text>
                    <Text>
                        (VAT included)
                    </Text>
                </View>
                <View>
                    <Button
                        style={{
                            backgroundColor: 'white',
                            alignSelf: 'center',
                            marginTop: 25,
                            marginBottom: 20,
                            padding: 20
                        }}>
                        <Text style={{color: 'black'}}>Select Size</Text>
                    </Button>
                </View>


                <Accordion
                    dataArray={dataArray}
                    icon="add"
                    expandedIcon="remove"
                    iconStyle={{color: "green"}}
                    expandedIconStyle={{color: "red"}}
                    headerStyle={{backgroundColor: 'white'}}
                    contentStyle={{backgroundColor: 'white'}}
                />

                <Text style={{marginLeft: 14, fontWeight: 'bold'}}>
                    Contact US & Order By Phone
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Button style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center'
                    }}>
                        <Icon style={{justifyContent: 'center', alignSelf: 'center', color: "black"}}
                              name='md-call'/>
                    </Button>
                    <Button style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center'
                    }}>
                        <Icon style={{justifyContent: 'center', alignSelf: 'center', color: "black"}}
                              name='md-chatboxes'/>
                    </Button>
                </View>

            </Container>


        )
    }
};
