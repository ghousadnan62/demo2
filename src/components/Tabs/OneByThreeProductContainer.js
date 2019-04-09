import React, {Component} from 'react';
import {View} from "native-base";
import MiniCardComp from '../Cards/MiniCardComp'

/*
* props required
* -----------------
* imgLink
* catagoryName
* */



export default class OneByThreeProductContainer extends Component {
    render() {

        return (
            <View style = {{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>

                <MiniCardComp
                    imgSource={this.props.imgLink}
                    catagoryName={this.props.catagoryName}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />

                <MiniCardComp
                    imgSource={this.props.imgLink}
                    catagoryName={this.props.catagoryName}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />

                <MiniCardComp
                    imgSource={this.props.imgLink}
                    catagoryName={this.props.catagoryName}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />

            </View>
        );
    }
}
