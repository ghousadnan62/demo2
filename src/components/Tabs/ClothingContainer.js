import React, {Component} from 'react';
import {View} from "native-base";
import MiniCardComp from '../Cards/MiniCardComp'


export default class ClothingContainer extends Component {
    render() {

        return (
            <View style = {{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />

                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
            </View>
        );
    }
}
