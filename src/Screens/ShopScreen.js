import React from 'react';
import {Container, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import FooterComp from '../components/ContentContainerComp/FooterComp'
import ShopScreenContainer from '../components/ScreenContainers/ShopScreenContainer'

const AccountScreen = () => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <ShopScreenContainer/>
                <FooterComp/>
            </Container>
        </StyleProvider>
    );
};

export default AccountScreen;