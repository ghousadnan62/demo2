import React from 'react';
import {View} from 'react-native'
import {Text} from "native-base";
import OneByThreeProductContainer from './OneByThreeProductContainer'



const KidsTab = () => {
    return (
        <View>

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Girl (2-12 YRS)
            </Text>
            <OneByThreeProductContainer
                imgLink={'http://cdn.shopify.com/s/files/1/1053/9878/products/product-image-204872692_grande.jpg?v=1507139579'}
                catagoryName={'Clothing'}
            />



            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Boy (2-12 YRS)
            </Text>
            <OneByThreeProductContainer
                imgLink={'https://s7d4.scene7.com/is/image/JCPenney/DP0109201911073656M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'}
                catagoryName={'Clothing'}
            />




            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Baby Girl (0-36 MTH)

            </Text>
            <OneByThreeProductContainer
                imgLink={'https://s7d4.scene7.com/is/image/JCPenney/bb655958-4248-11e8-ae07-e53e4c49516f.jpg?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'}
                catagoryName={'Clothing'}
            />



            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Baby Boy (0-36 MTH)

            </Text>
            <OneByThreeProductContainer
                imgLink={'https://www.dhresource.com/0x0s/f2-albu-g6-M01-5C-E9-rBVaR1s8oZOAUSqfAAPUqt-e4NA193.jpg/newborn-baby-boy-clothes-cotton-infant-toddler.jpg'}
                catagoryName={'Clothing'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Teen Girl (13-16 YRS)

            </Text>
            <OneByThreeProductContainer
                imgLink={'https://image.kilimall.com/kenya/shop/store/goods/2513/2018/05/2513_05799545773361959_720.jpg'}
                catagoryName={'Clothing'}
            />




            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10,
                marginTop:10
            }}>
                Teen Boy (13-16 YRS)

            </Text>
            <OneByThreeProductContainer
                imgLink={'http://cdn.shopify.com/s/files/1/0157/1399/2768/products/Teen-Boys-Clothing-Sets-2019-Casual-Children-Girls-Clothes-Cotton-Plaid-Shirt-Pant-Set-2Pcs-Kids_c438f672-36df-480d-a5f3-d3889b508ef4_1200x1200.jpg?v=1547379530'}
                catagoryName={'Clothing'}
            />

        </View>
    );
};

export default KidsTab;