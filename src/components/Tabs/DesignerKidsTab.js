import React from 'react';
import {Text,View} from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";

const DesignerKidsTab = () => {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>


            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}
            > Popular Desingers</Text>

            <View
                style={{
                    display:'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}
            >
                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Guci'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Calvin Klein'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Lacoste'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Guci'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Calvin Klein'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

                <MiniCardComp
                    imgSource={'https://images.prod.meredith.com/product/ddd17df35c0d0e251e199b2fc8585602/1519882213810/l/no-prob-llama-shirt-no-probllama-shirt-graphic-tees-for-women-t-shirts-for-women-shirts-with-sayings-mom-shirt-mom-life-shirt'}
                    catagoryName={'Lacoste'}
                    cardHeight={150}
                    cardWidth={110}
                    Margin={0}
                />

            </View>
        </View>
    );
};

export default DesignerKidsTab;