import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import HomeScreen from './HomeScreen'
import DummyScreen from './DummyScreen'



const ScreenManager = () => {
    return (
        <Router>
            <Scene key={'root'}>
                <Scene key={"homeScreen"} component={HomeScreen} hideNavBar={true} initial/>
                <Scene key={"dummyScreen"} component={DummyScreen} hideNavBar={false}/>
            </Scene>
        </Router>
    )
};

export default ScreenManager;