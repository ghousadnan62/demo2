import React from 'react';
import {Image, View} from 'react-native'
import {Text} from "native-base";
import ClothingContainer from './ClothingContainer';
import ShoesContainer from './ShoesContainer';
import BagsContainer from './BagsContainer';
import OneByThreeProductContainer from './OneByThreeProductContainer';


const MenTab = () => {
    return (
        <View>
            <Image
                source={{uri: 'https://i.dailymail.co.uk/i/pix/2016/03/06/03/31DEF2EC00000578-0-Dario_Vidosic_Western_Sydney_Wanderers_Mitchell_Moses_Wests_Tige-a-12_1457235541097.jpg'}}
                style={{width: '100%', height: 350}}/>

            <View style={{
                margin: 10
            }}/>

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                marginBottom: 10
            }}>
                Clothing
            </Text>

            <ClothingContainer
                imgLink={'https://cdn.shopify.com/s/files/1/1053/5936/products/product-image_168765d4-9fce-4225-b846-69a7bb088b7b.jpg?v=1521741416'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Shoes
            </Text>

            <ShoesContainer
                imgLink={'http://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/9/0/christianlouboutin-spikesock-1190270_B026_1_1200x1200_1547550831.jpg'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Bags
            </Text>

            <BagsContainer
                imgLink={'data:image/jpeg;base64,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'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Accessories
            </Text>
            <OneByThreeProductContainer
                imgLink={'http://stat.homeshop18.com/homeshop18/images/productImages/639/fidato-only-you-mens-accessories-range-medium_c95f4fe54d59e08b3cc96cdf6558ae69.jpg'}
                catagoryName={'Accessories'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Jewellery
            </Text>

            <OneByThreeProductContainer
                imgLink={'https://cdn.shopify.com/s/files/1/0198/8790/products/Cool_Men_s_Stainless_Steel_Black_Wolf_Fang_Teeth_Pendant_Necklace_Chain_1024x1024.JPG?v=1526914353'}
                catagoryName={'Jewellery'}
            />


        </View>
    );
};

export default MenTab;