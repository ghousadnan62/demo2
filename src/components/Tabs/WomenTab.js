import React from 'react';
import {Image, View} from 'react-native'
import {Text} from "native-base";
import ClothingContainer from './ClothingContainer';
import ShoesContainer from './ShoesContainer';
import BagsContainer from './BagsContainer';
import OneByThreeProductContainer from './OneByThreeProductContainer';


const WomenTab = () => {
    return (
        <View>
            <Image
                source={{uri: 'https://www.fabafterfifty.co.uk/wp-content/uploads/2015/01/JD_Williams_07_GROUP_1441_4Dec14_4Dec14.jpg'}}
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
                imgLink={'https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Shoes
            </Text>

            <ShoesContainer
                imgLink={'http://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/L/3/L30037.jpg'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Bags
            </Text>

            <BagsContainer
                imgLink={'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1526659375-elle-straw-bags-0009-mercedes-1526659368.jpg?crop=1xw:1xh;center,top&resize=480:*'}
            />

            <Text style={{
                fontSize: 20,
                fontFamily: 'Righteous-Regular',
                margin: 10
            }}>
                Accessories
            </Text>
            <OneByThreeProductContainer
                imgLink={'https://review.chinabrands.com/chinabrands/seo/image/20180912/wholesale%20fashion%20accessories.jpg'}
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
                imgLink={'https://5.imimg.com/data5/VI/MW/MY-4509493/traditional-pearl-red-bahubali-earring-for-women-jewellery-500x500.jpg'}
                catagoryName={'Jewellery'}
            />


        </View>
    );
};

export default WomenTab;