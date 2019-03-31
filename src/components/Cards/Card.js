import React, {Component} from 'react';
import {Image} from 'react-native';
import {StyleSheet, ScrollView, View} from 'react-native'
import {
    Container,
    Card,
    CardItem,
    Text, Button, Icon, FooterTab,
} from 'native-base';

export default class CardImageExample extends Component {
    render() {
        return (

                <Container style={{marginTop: 10, height: 400,alignItems: 'center',
                    justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontWeight: 'bold', alignSelf:'center',marginBottom:20}}>
                            {this.props.name}
                        </Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <Card style={{height: 270, width: 200, marginLeft: 20}}>
                            <CardItem cardBody style={{flex:3}}>
                                <Image source={require('../../Resources/Images/1.jpg')} style={{height: 200, flex:1}} />
                            </CardItem>

                            <CardItem style={styles.cardFooter}>
                                <Text>
                                    Item Name {"\n"} Designer Name {"\n"} Price : 123
                                </Text>
                            </CardItem>
                        </Card>

                        <Card style={{height: 270, width: 200, marginLeft: 20}}>
                            <CardItem cardBody style={{flex:3}}>
                                <Image source={require('../../Resources/Images/4.jpg')} style={{height: 200, flex: 1}}/>
                            </CardItem>

                            <CardItem style={styles.cardFooter}>
                                <Text>
                                    Item Name {"\n"} Designer Name {"\n"} Price : 123
                                </Text>
                            </CardItem>
                        </Card>

                        <Card style={{height: 270, width: 200, marginLeft: 20}}>
                            <CardItem cardBody style={{flex:3}}>
                                <Image source={require('../../Resources/Images/3.jpg')} style={{height: 200, flex: 1}}/>
                            </CardItem>

                            <CardItem style={styles.cardFooter}>
                                <Text>
                                    Item Name {"\n"} Designer Name {"\n"} Price : 123
                                </Text>
                            </CardItem>
                        </Card>

                        <Card style={{height: 270, width: 200, marginLeft: 20, marginRight: 10}}>
                            <CardItem cardBody style={{flex:3}}>
                                <Image source={require('../../Resources/Images/4.jpg')} style={{height: 200, flex: 1}}/>
                            </CardItem>

                            <CardItem style={styles.cardFooter}>
                                <Text>
                                    Item Name {"\n"} Designer Name {"\n"} Price : 123
                                </Text>
                            </CardItem>
                        </Card>
                    </ScrollView>

                    <Button vertical style={{backgroundColor: 'black', color: 'white', alignSelf: 'center', marginTop:25,marginBottom: 20}}>
                        <Text>Shop Now</Text>
                    </Button>

                </Container>

        );
    }
}


const styles = StyleSheet.create({

    cardFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }
})