import React, {Component} from 'react';
import {View} from "native-base";
import MiniCardComp from '../Cards/MiniCardComp'


export default class ShoesContainer extends Component {
    render() {

        return (
            <View style = {{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />
                <MiniCardComp
                    imgSource={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
                    catagoryName={'T-Shirts'}
                    cardHeight={115}
                    cardWidth={115}
                    Margin={10}
                />

            </View>
        );
    }
}
