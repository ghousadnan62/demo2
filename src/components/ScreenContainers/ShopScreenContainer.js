import React from 'react';
import {Container, Content, Tabs, Tab} from "native-base";
import WomenTab from '../Tabs/WomenTab';
import MenTab from '../Tabs/MenTab';
import KidsTab from '../Tabs/KidsTab'


const ShopScreenContainer = () => {
    return (
        <Container>
            <Content>
                    <Tabs>
                        <Tab heading={'WOMEN'}>
                            <WomenTab/>
                        </Tab>

                        <Tab heading={'MEN'}>
                            <MenTab/>
                        </Tab>

                        <Tab heading={'KIDS'}>
                            <KidsTab/>
                        </Tab>
                    </Tabs>
            </Content>
        </Container>
    )
};

export default ShopScreenContainer;