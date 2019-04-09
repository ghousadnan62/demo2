import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import ShopNowScreen from './ShopNowScreen';
import AccountScreen from './AccountScreen';
import DesignerScreen from './DesignerScreen';
import ShopScreen from './ShopScreen';
import WishlistScreen from './WishlistScreen';
import ProductDetail from './ProductDetail';
const ScreenManager = () => {
    return (
        <Router>
            <Scene key={'root'}>
                <Scene key={"homeScreen"} component={HomeScreen} hideNavBar={true} initial/>
                <Scene key={"shopNowScreen"} component={ShopNowScreen}/>
                <Scene key={"accountScreen"} component={AccountScreen}/>
                <Scene key={"designerScreen"} component={DesignerScreen}/>
                <Scene key={"shopScreen"} component={ShopScreen}/>
                <Scene key={"wishlistScreen"} component={WishlistScreen}/>
                <Scene key={"productDetail"} component={ProductDetail}/>
            </Scene>
        </Router>
    )
};

export default ScreenManager;